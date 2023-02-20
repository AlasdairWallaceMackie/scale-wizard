import React from "react"

import String from "./String"
import tunings from "../data/tunings"

export default function Fretboard(){
    const [currentTuning, setCurrentTuning] = React.useState(tunings[0])
    const stringElements = currentTuning.notes.map((note, index) => (
        <String key={index} pitch={note}/>
    ))

    return (
        <div id="fretboard" className="container">
            {stringElements}
        </div>
    )
}