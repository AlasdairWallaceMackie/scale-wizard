import React from "react"

import { noteCodeLookup, getScaleDegrees, Pitch, getPitchObject, getLowestScalePitch } from "../data/notes"
import tunings, { getTuning } from "../data/tunings"
import scales, { getScale } from "../data/scales"
import { DEFAULT } from "../data/settings"

import { ControlsContextInterface, Tuning, Scale } from "../d"

const ControlsContext = React.createContext<ControlsContextInterface>({} as any)

function ControlsContextProvider(props: any){
    const [numberOfFrets, setNumberOfFrets] = React.useState<number>(DEFAULT.NUMBER_OF_FRETS)
    const [currentTuning, setCurrentTuning] = React.useState<Tuning>(getTuning(DEFAULT.TUNING))
    const [currentKey, setCurrentKey] = React.useState<number>(noteCodeLookup[DEFAULT.KEY])
    const [currentScale, setCurrentScale] = React.useState<Scale>(getScale(DEFAULT.SCALE))
    const [sharpOrFlat, setSharpOrFlat] = React.useState<"sharp"|"flat">(DEFAULT.SHARP_FLAT)
    const [showAllPositions, setShowAllPositions] = React.useState<boolean>(DEFAULT.SHOW_ALL_POSITIONS)
    const [showNoteNames, setShowNoteNames] = React.useState<boolean>(DEFAULT.SHOW_NOTE_NAMES)
    
    const [currentScaleDegrees, setCurrentScaleDegrees] = React.useState<number[]>([])
    const [currentPositionNotes, setCurrentPositionNotes] = React.useState<Pitch[]>([])




    React.useEffect(() => {
        setCurrentScaleDegrees(getScaleDegrees(currentKey, currentScale))
    }, [currentKey, currentScale])

    React.useEffect(() => {
        const lowestString: string = currentTuning.notes.slice(-1)[0]
        const lowestScalePitch = getLowestScalePitch(
            getPitchObject(lowestString),
            currentScaleDegrees
        )
        let currentPitch: Pitch = lowestScalePitch.clone()
        let pitchList: Pitch[] = []
        
        /**
            * Do this around 40 times to get a comfortable length list
            * Need enough pitches to cover at least 3 notes per String component 
        */
        for (var i=0; i<40; i++){
            if (currentScaleDegrees.includes(currentPitch.note))
                pitchList.push(currentPitch.clone())
    
            currentPitch.increment()
        }
    
        setCurrentPositionNotes(pitchList)
    }, [currentScaleDegrees, currentTuning])




    const contextData: ControlsContextInterface = {
        currentTuning: {
            value: currentTuning,
            handler: (event: React.ChangeEvent<HTMLSelectElement>) => {
                const value: number = parseInt(event.currentTarget.value)
                setCurrentTuning(tunings[value])
            }
        },
        currentKey: {
            value: currentKey,
            handler: (event: React.ChangeEvent<HTMLSelectElement>) => {
                const value: number = parseInt(event.currentTarget.value)
                setCurrentKey(value)
            }
        },
        currentScale: {
            value: currentScale,
            handler: (event: React.ChangeEvent<HTMLSelectElement>) => {
                const value: number = parseInt(event.currentTarget.value)
                setCurrentScale(scales[value])
            }
        },
        currentScaleDegrees: {
            value: currentScaleDegrees,
            // No handler passed, since this will never be directly changed by user
        },
        numberOfFrets: {
            value: numberOfFrets,
            handler: (event: React.ChangeEvent<HTMLSelectElement>) => {
                const value: number = parseInt(event.currentTarget.value)
                setNumberOfFrets(value)
            }
        },
        sharpOrFlat: {
            value: sharpOrFlat,
            handler: () => {
                setSharpOrFlat(prevState => prevState === "sharp" ? "flat" : "sharp")
            }
        },
        showAllPositions: {
            value: showAllPositions,
            handler: () => {
                setShowAllPositions(prevState => !prevState)
            }
        },
        showNoteNames: {
            value: showNoteNames,
            handler: () => {
                setShowNoteNames(prevState => !prevState)
            }
        },
    }




    return (
        <ControlsContext.Provider value={contextData}>
            {props.children}
        </ControlsContext.Provider>
    )
}

export {ControlsContextProvider, ControlsContext}