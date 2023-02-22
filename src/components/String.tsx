import React from "react"

import Fret from "./Fret"
import {nanoid} from "nanoid"
import { MAX_NUMBER_OF_NOTES, noteCodeLookup, flatToSharpConversion } from "../data/notes"

type Props = {
    pitch: string
    numberOfFrets: number
}

export default function String(props: Props){
    let pitchNote = props.pitch.slice(0,-1)
    let octave = parseInt(props.pitch.slice(-1))

    if (/\d/.test(pitchNote))
        console.error("String octave value is too high (>9)")
    
    //If the note is written as flat, convert to sharp
    if (/[b]/.test(pitchNote))
        pitchNote = flatToSharpConversion(pitchNote)

    let frets: {pitch: number, octave: number}[] = []
    let fretPitch: number = noteCodeLookup[pitchNote]
    for (var i=0; i<=props.numberOfFrets; i++){
        if (fretPitch > MAX_NUMBER_OF_NOTES){
            fretPitch = 1
            octave++
        }
        frets.push({pitch: fretPitch, octave: octave})
        fretPitch++
    }

    const fretElements = frets.map(({pitch, octave}, index) => (
        <Fret
            key={nanoid()}
            pitchCode={pitch}
            octave={octave}
            openFret={index===0}
        />
    ))


    return (
        <div className="string row flex-nowrap">
            {fretElements}
        </div>
    )
}