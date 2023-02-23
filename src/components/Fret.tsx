import React from "react"

import { ControlsContext } from "../context/controlsContext"
import { Pitch, noteDisplay } from "../data/notes"
import { DEFAULT } from "../data/settings"

type Props = {
    pitch: Pitch,
    openFret: boolean
    inPosition: boolean,
}

export default function Fret(props: Props){
    const context = React.useContext(ControlsContext)

    const pitchName = 
        noteDisplay(props.pitch.note, context.sharpOrFlat.value) + 
            (DEFAULT.SHOW_OCTAVE_NUMBERS === true ? 
                props.pitch.octave.toString()
                : ""
            )
    const dynamicClassName = props.openFret ? "open-fret" : ""

    let scaleMarkerColorClass = ""
    let noteNameVisible = true
    if (props.pitch.note === context.currentKey.value )
        scaleMarkerColorClass = "bg-danger"
    else if (context.currentScaleDegrees.value.includes(props.pitch.note))
        scaleMarkerColorClass = "bg-info"
    else {
        scaleMarkerColorClass = "bg-transparent"
        noteNameVisible = false
    }




    return(
        <div className={`fret col p-0 user-select-none ${dynamicClassName}`}>
            <div className="string-hr"></div>
            {
                (props.inPosition === true || context.showAllPositions.value === true) ?
                <div className={`scale-marker ${scaleMarkerColorClass}`}>
                    {
                        context.showNoteNames.value === true ?
                            <div className="note-name text-center">
                                {noteNameVisible ? pitchName: <></>}
                            </div> :
                            <></>
                    }
                </div> :
                <></>
                }
        </div>
    )
}