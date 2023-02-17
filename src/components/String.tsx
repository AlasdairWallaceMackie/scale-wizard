import React from "react"

import Fret from "./Fret" //Change this to 'Fret'

import { MAX_NUMBER_OF_NOTES, noteLookup } from "../data/notes"

type Props = {
    pitch: number
    numberOfFrets: number
}

export default function String(props: Props){
    
    let frets: number[] = []
    let newValue: number = 0
    for (var i=1; i<=props.numberOfFrets; i++){
        newValue = props.pitch + i
        while (newValue > MAX_NUMBER_OF_NOTES)
            newValue -= MAX_NUMBER_OF_NOTES
        frets.push(newValue)
    }
    const fretElements = frets.map(fret => (
        <Fret pitch={fret}/>
    ))


    return (
        <div className="string">
            <strong>{noteLookup[props.pitch]} |</strong>
            {fretElements}
        </div>
    )
}