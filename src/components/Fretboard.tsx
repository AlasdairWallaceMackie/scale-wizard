import React from "react"

import { ControlsContext } from "../context/controlsContext"
import { getPitchObject } from "../data/notes"
import String from "./String"
import FretMarkers from "./FretMarkers"
import PositionRange from "./PositionRange"

export default function Fretboard(){
    const context = React.useContext(ControlsContext)
    
    let notesPerString: number
    switch (context.currentScale.value.intervals.length){
        case 5: notesPerString = 2; break;
        default: notesPerString = 3
    }

    let positionPitches = structuredClone(context.currentPositionPitches.value)
    const tuningNotesFlipped = structuredClone(context.currentTuning.value.notes).reverse()

    const stringElements = tuningNotesFlipped.map((note, index) => {
        const pitch = getPitchObject(note)
        return (
            <String
                key={index}
                pitch={pitch}
                numberOfFrets={context.numberOfFrets.value}
                positionPitches={positionPitches.splice(0, notesPerString)}
            />
        )
    }).reverse()



    return (
        <div id="fretboard" className="container">
            {stringElements}
            <FretMarkers numberOfFrets={context.numberOfFrets.value}/>

            <PositionRange />
        </div>
    )
}