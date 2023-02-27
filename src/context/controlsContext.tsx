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
    const [showAllNotes, setShowAllNotes] = React.useState<boolean>(DEFAULT.SHOW_ALL_NOTES)
    const [showNoteNames, setShowNoteNames] = React.useState<boolean>(DEFAULT.SHOW_NOTE_NAMES)
    
    const [currentScaleDegrees, setCurrentScaleDegrees] = React.useState<number[]>([])
    const [currentPositionPitches, setCurrentPositionPitches] = React.useState<Pitch[]>([])




    React.useEffect(() => {
        setCurrentScaleDegrees(getScaleDegrees(currentKey, currentScale))
    }, [currentKey, currentScale])

    React.useEffect(() => {
        const lowestString: string = currentTuning.notes.slice(-1)[0]
        const lowestScalePitch = getLowestScalePitch(
            getPitchObject(lowestString),
            currentScaleDegrees
        )
        if (currentScaleDegrees.length > 0){
            // Do...while loop ensures the default position won't start at the bottom of the neck
            do {
                lowestScalePitch.increment()
            } while (lowestScalePitch.note !== currentScaleDegrees[0])
        }

        let currentPitch: Pitch = lowestScalePitch.clone()
        let pitchList: Pitch[] = []
        
        /**
            * Do this around 45 times to get a comfortable length list
            * Need enough pitches to cover at least 3 notes per String component for guitars with up to 8 strings
        */
        for (var i=0; i<45; i++){
            if (currentScaleDegrees.includes(currentPitch.note))
                pitchList.push(currentPitch.clone())
    
            currentPitch.increment()
        }
    
        setCurrentPositionPitches(pitchList)
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
        showAllNotes: {
            value: showAllNotes,
            handler: () => {
                setShowAllNotes(prevState => !prevState)
            }
        },
        showNoteNames: {
            value: showNoteNames,
            handler: () => {
                setShowNoteNames(prevState => !prevState)
            }
        },
        currentPositionPitches: {
            value: currentPositionPitches,
            handler: (increment: -1|1) => {
                setCurrentPositionPitches(prevPitches => {
                    let newPitches = prevPitches.map(pitch => pitch.clone())
                    newPitches.forEach((pitch: Pitch) => {
                        pitch.incrementWithinScale(increment, currentScaleDegrees)
                    })
                    return newPitches
                })
            }
        }
    }




    return (
        <ControlsContext.Provider value={contextData}>
            {props.children}
        </ControlsContext.Provider>
    )
}

export {ControlsContextProvider, ControlsContext}