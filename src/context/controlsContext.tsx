import React from "react"

import { noteCodeLookup } from "../data/notes"
import tunings from "../data/tunings"
import scales from "../data/scales"
import { DEFAULT_KEY, SHARP_FLAT_DEFAULT, DEFAULT_SCALE, DEFAULT_NUMBER_OF_FRETS } from "../data/settings"

import { ControlsContextInterface } from "../d"

const ControlsContext = React.createContext<ControlsContextInterface>({} as any)

function ControlsContextProvider(props: any){
    const [numberOfFrets, setNumberOfFrets] = React.useState(DEFAULT_NUMBER_OF_FRETS)
    const [currentTuning, setCurrentTuning] = React.useState(tunings[0])
    const [currentKey, setCurrentKey] = React.useState(noteCodeLookup[DEFAULT_KEY])
    const [currentScale, setCurrentScale] = React.useState(scales[0])
    const [sharpOrFlat, setSharpOrFlat] = React.useState<"sharp"|"flat">(SHARP_FLAT_DEFAULT)


    function handleChangeTuning(event: React.ChangeEvent<HTMLSelectElement>){
        const value: number = parseInt(event.currentTarget.value)
        setCurrentTuning(tunings[value])
    }

    function handleChangeKey(event: React.ChangeEvent<HTMLSelectElement>){
        const value: number = parseInt(event.currentTarget.value)
        setCurrentKey(value)
    }

    function handleChangeScale(event: React.ChangeEvent<HTMLSelectElement>){
        const value: number = parseInt(event.currentTarget.value)
        setCurrentScale(scales[value])
    }

    function handleChangeNumberOfFrets(event: React.ChangeEvent<HTMLSelectElement>){
        const value: number = parseInt(event.currentTarget.value)
        setNumberOfFrets(value)
    }
    
    function toggleSharpFlat(){
        setSharpOrFlat(prevState => prevState === "sharp" ? "flat" : "sharp")
    }

    const contextData: ControlsContextInterface = {
        numberOfFrets: {
            value: numberOfFrets,
            handler: handleChangeNumberOfFrets
        },
        currentTuning: {
            value: currentTuning,
            handler: handleChangeTuning
        },
        currentKey: {
            value: currentKey,
            handler: handleChangeKey
        },
        currentScale: {
            value: currentScale,
            handler: handleChangeScale
        },
        sharpOrFlat: {
            value: sharpOrFlat,
            handler: toggleSharpFlat
        },
    }

    return (
        <ControlsContext.Provider value={contextData}>
            {props.children}
        </ControlsContext.Provider>
    )
}

export {ControlsContextProvider, ControlsContext}