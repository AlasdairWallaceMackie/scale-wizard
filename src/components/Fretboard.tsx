import React from "react"

import String from "./String"
import FretMarkers from "./FretMarkers"

import { Tuning } from "../d"

type Props = {
    numberOfFrets: number
    tuning: Tuning
}

export default function Fretboard(props: Props){
    const stringElements = props.tuning.notes.map((note, index) => (
        <String key={index} pitch={note}/>
    ))

    return (
        <div id="fretboard" className="container">
            {stringElements}
            <FretMarkers numberOfFrets={props.numberOfFrets}/>
        </div>
    )
}