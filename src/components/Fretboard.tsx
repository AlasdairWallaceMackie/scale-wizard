import React from "react"

import { ControlsContext } from "../context/controlsContext"
import String from "./String"
import FretMarkers from "./FretMarkers"

export default function Fretboard(){
    const context = React.useContext(ControlsContext)

    const stringElements = context.currentTuning.value.notes.map((note, index) => (
        <String key={index} pitch={note} numberOfFrets={context.numberOfFrets.value}/>
    ))

    // TODO: Implement scale positionings

    return (
        <div id="fretboard" className="container">
            {stringElements}
            <FretMarkers numberOfFrets={context.numberOfFrets.value}/>
        </div>
    )
}