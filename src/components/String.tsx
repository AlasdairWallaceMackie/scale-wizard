import React from "react"

import Fret from "./Fret"
import {nanoid} from "nanoid"
import { Pitch } from "../data/notes"

type Props = {
    pitch: Pitch
    numberOfFrets: number
    positionPitches: Pitch[]
}

export default function String(props: Props){
    let frets: Pitch[] = []
    let currentPitch: Pitch = props.pitch.clone()
    for (var i=0; i<=props.numberOfFrets; i++){
        frets.push(currentPitch.clone())
        currentPitch.increment()
    }

    function isInPosition(pitch: Pitch): boolean{
        let matchFound = false
        props.positionPitches.forEach(positionPitch => {
            if (pitch.note === positionPitch.note && pitch.octave === positionPitch.octave)
                matchFound = true
        })
        return matchFound
    }




    const fretElements = frets.map((pitch, index) => (
        <Fret
            key={nanoid()}
            pitch={pitch}
            openFret={index===0}
            inPosition={isInPosition(pitch)}
        />
    ))

    return (
        <div className="string row flex-nowrap">
            {fretElements}
        </div>
    )
}