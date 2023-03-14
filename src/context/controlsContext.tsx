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
    
    const currentScaleDegrees: number[] = React.useMemo(() => getScaleDegrees(currentKey, currentScale), [currentKey, currentScale])
    const allPositions: Pitch[][] = React.useMemo(() => getAllPositions(currentTuning, currentScaleDegrees), [currentTuning, currentScaleDegrees])

    const [currentPositionIndex, setCurrentPositionIndex] = React.useState<number>(0)
    const currentPositionPitches: Pitch[] = allPositions[currentPositionIndex]
    
    React.useEffect(() => {
        let startPositionIndex = 0
        for (var i=0; i<=allPositions.length; i++){
            if (allPositions[i][0].note === currentScaleDegrees[0] && i !== 0){
                startPositionIndex = i
                break
            }
        }
        setCurrentPositionIndex(startPositionIndex)
    }, [allPositions, currentScaleDegrees])






    function getAllPositions(tuning: Tuning, scaleDegrees: number[]): Pitch[][]{
        const lowestStringInfo: string = tuning.notes.slice(-1)[0]
        const lowestScalePitch = getLowestScalePitch(
            getPitchObject(lowestStringInfo),
            scaleDegrees
        )
    
        const highestPositionStartPitch = lowestScalePitch.clone()
        highestPositionStartPitch.octave += 2
        
        // For diatonic scales (7 notes), this will prevent the position range from going off the fretboard
        if (currentScale.intervals.length && currentScale.intervals.length >= 7){
            highestPositionStartPitch
                .incrementWithinScale(-1, scaleDegrees)
                .incrementWithinScale(-1, scaleDegrees)
        }
    
        let basePitch: Pitch = lowestScalePitch.clone()
        let pitchList: Pitch[] = []
        let positionLists: Pitch[][] = []
    
        do {
            let currentPitch: Pitch = basePitch.clone()
            pitchList = []
            /**
                * Do this around 45 times to get a comfortable length list
                * Need enough pitches to cover at least 3 notes per String component for guitars with up to 8 strings
            */
            for (var i=0; i<45; i++){
                if (scaleDegrees.includes(currentPitch.note))
                    pitchList.push(currentPitch.clone())
    
                currentPitch.increment()
            }
            positionLists.push(pitchList)
            basePitch.incrementWithinScale(1, scaleDegrees)
        } while(JSON.stringify(basePitch) !== JSON.stringify(highestPositionStartPitch) && scaleDegrees.length > 0)

        return positionLists
    }






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
        allPositions: {
            value: allPositions,
            // No handler
        },
        currentPositionPitches: {
            value: currentPositionPitches,
            // No handler
        },
        currentPositionIndex: {
            value: currentPositionIndex,
            handler: e => {
                const value = parseInt(e.target.value)

                if (value >= 0 && value < allPositions.length)
                    setCurrentPositionIndex(value)
                else
                    console.warn("Attempt to set currentPositionIndex out of range")
            },
            increment: (increment: -1|1) => {
                setCurrentPositionIndex(prevIndex => {
                    const newIndex = prevIndex + increment
                    return newIndex >=0 && newIndex < allPositions.length ? newIndex : prevIndex
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