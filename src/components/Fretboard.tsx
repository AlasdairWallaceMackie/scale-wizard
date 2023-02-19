import React from "react"

import String from "./String"
import { noteCodeLookup } from "../data/notes"
import tunings from "../data/tunings"

export default function Fretboard(){
    const [currentTuning, setCurrentTuning] = React.useState(tunings[0])
    const stringElements = currentTuning.notes.map((note, index) => (
        <String key={index} pitch={note}/>
    ))

    return (
        <div id="fretboard">
            {stringElements}
        </div>
    )
}