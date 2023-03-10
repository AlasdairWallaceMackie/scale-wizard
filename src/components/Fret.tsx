import React from "react"

import { ControlsContext } from "../context/controlsContext"
import { Pitch } from "../data/notes"

type Props = {
    pitch: Pitch,
    openFret: boolean
    inPosition: boolean,
}

export default function Fret(props: Props){
    const context = React.useContext(ControlsContext)

    const isOpenFret = props.openFret ? "open-fret" : ""

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
        <div className={`fret col user-select-none ${isOpenFret}`}>
            <div className="string-hr"></div>
            {
                (props.inPosition === true || context.showAllNotes.value === true) ?
                    <div className={`fret-info ${scaleMarkerColorClass}`}>
                        {
                            context.showNoteNames.value === true ?
                                <div className="note-name text-center">
                                    {noteNameVisible ? props.pitch.display(context.sharpOrFlat.value): <></>}
                                </div> :
                                <></>
                        }
                    </div> :
                    <div className="fret-info"></div>
            }
        </div>
    )
}

