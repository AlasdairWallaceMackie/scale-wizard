import React from "react"

import Fret from "./Fret" //Change this to 'Fret'

import { MAX_NUMBER_OF_NOTES, noteCodeLookup, flatToSharpConversion } from "../data/notes"

type Props = {
    pitch: string
    numberOfFrets: number
}

export default function String(props: Props){
    let pitchNote = props.pitch.slice(0,-1)
    let octave = parseInt(props.pitch.slice(-1))

    if (/\d/.test(pitchNote))
        console.error("String octave is too high of a value (>9)")
    if (/[b]/.test(pitchNote))
        pitchNote = flatToSharpConversion[pitchNote]

    let frets: {pitch: number, octave: number}[] = []
    let fretPitch: number = noteCodeLookup[pitchNote]
    for (var i=1; i<=props.numberOfFrets; i++){
        fretPitch++
        if (fretPitch > MAX_NUMBER_OF_NOTES){
            fretPitch = 1
            octave++
        }
        frets.push({pitch: fretPitch, octave: octave})
    }

    const fretElements = frets.map(({pitch, octave}) => (
        <Fret pitchCode={pitch} octave={octave}/>
    ))


    return (
        <div className="string">
            <strong>{pitchNote}|&nbsp;</strong>
            {fretElements}
        </div>
    )
}

String.defaultProps = {
    numberOfFrets: 24,
}