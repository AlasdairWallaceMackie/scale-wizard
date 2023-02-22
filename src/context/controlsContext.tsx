import React from "react"

import { noteCodeLookup, getScaleDegrees } from "../data/notes"
import tunings, { getTuning } from "../data/tunings"
import scales, { getScale } from "../data/scales"
import { DEFAULT_KEY, SHARP_FLAT_DEFAULT, DEFAULT_SCALE, DEFAULT_TUNING, DEFAULT_NUMBER_OF_FRETS } from "../data/settings"

import { ControlsContextInterface, Tuning, Scale } from "../d"

const ControlsContext = React.createContext<ControlsContextInterface>({} as any)

function ControlsContextProvider(props: any){
    const [numberOfFrets, setNumberOfFrets] = React.useState<number>(DEFAULT_NUMBER_OF_FRETS)
    const [currentTuning, setCurrentTuning] = React.useState<Tuning>(getTuning(DEFAULT_TUNING))
    const [currentKey, setCurrentKey] = React.useState<number>(noteCodeLookup[DEFAULT_KEY])
    const [currentScale, setCurrentScale] = React.useState<Scale>(getScale(DEFAULT_SCALE))
    const [sharpOrFlat, setSharpOrFlat] = React.useState<"sharp"|"flat">(SHARP_FLAT_DEFAULT)
    const [scaleDegrees, setScaleDegrees] = React.useState<number[]>([])

    React.useEffect(() => {
        setScaleDegrees(getScaleDegrees(currentKey, currentScale))
        console.log(scaleDegrees)
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
            handler: () => {setSharpOrFlat(prevState => prevState === "sharp" ? "flat" : "sharp")
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