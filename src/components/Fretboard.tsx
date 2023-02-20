import React from "react"

import String from "./String"
import FretMarkers from "./FretMarkers"

import tunings from "../data/tunings"

type Props = {
    numberOfFrets: number
}

export default function Fretboard(props: Props){
    const [currentTuning, setCurrentTuning] = React.useState(tunings[0])
    const stringElements = currentTuning.notes.map((note, index) => (
        <String key={index} pitch={note}/>
    ))

    return (
        <div id="fretboard" className="container">
            {stringElements}
            <FretMarkers numberOfFrets={props.numberOfFrets}/>
        </div>
    )
}