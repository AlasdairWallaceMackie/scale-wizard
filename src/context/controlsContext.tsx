import React from "react"

import { noteCodeLookup, getScaleDegrees } from "../data/notes"
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
    const [scaleDegrees, setScaleDegrees] = React.useState<number[]>([])
    const [showAllPositions, setShowAllPositions] = React.useState<boolean>(DEFAULT.SHOW_ALL_POSITIONS)
    const [showNoteNames, setShowNoteNames] = React.useState<boolean>(DEFAULT.SHOW_NOTE_NAMES)

    React.useEffect(() => {
        setScaleDegrees(getScaleDegrees(currentKey, currentScale))
    }, [currentKey, currentScale])

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
        scaleDegrees: {
            value: scaleDegrees,
            // No handler passed, since this will never be directly changed by user
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