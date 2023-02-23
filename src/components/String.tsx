import React from "react"

import Fret from "./Fret"
import {nanoid} from "nanoid"
import { Pitch } from "../data/notes"

type Props = {
    pitch: Pitch
    numberOfFrets: number
}

export default function String(props: Props){
    let frets: Pitch[] = []
    let currentPitch: Pitch = props.pitch
    for (var i=0; i<=props.numberOfFrets; i++){
        frets.push(currentPitch.clone())
        currentPitch.increment()
    }

    //TODO: Refactor to use Pitch class

    const fretElements = frets.map((pitch, index) => (
        <Fret
            key={nanoid()}
            pitch={pitch}
            openFret={index===0}
            inPosition={false}
        />
    ))


    return (
        <div className="string row flex-nowrap">
            {fretElements}
        </div>
    )
}