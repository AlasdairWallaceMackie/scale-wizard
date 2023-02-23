import React from "react"

import { ControlsContext } from "../context/controlsContext"
import { getPitchObject } from "../data/notes"
import String from "./String"
import FretMarkers from "./FretMarkers"

export default function Fretboard(){
    const context = React.useContext(ControlsContext)

    const stringElements = context.currentTuning.value.notes.map((note, index) => {
        const pitch = getPitchObject(note)
        return (
            <String key={index} pitch={pitch} numberOfFrets={context.numberOfFrets.value}/>
        )
    })

    // TODO: Implement scale positionings

    return (
        <div id="fretboard" className="container">
            {stringElements}
            <FretMarkers numberOfFrets={context.numberOfFrets.value}/>
        </div>
    )
}