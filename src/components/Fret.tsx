import React from "react"

import { ControlsContext } from "../context/controlsContext"
import { noteDisplay } from "../data/notes"

type Props = {
    pitchCode: number,
    octave: number,
    openFret: boolean
}

export default function Fret(props: Props){
    const context = React.useContext(ControlsContext)

    const pitchName = noteDisplay(props.pitchCode, context.sharpOrFlat.value)
    
    const dynamicClassName = props.openFret ? "open-fret" : ""

    let noteIsVisible = true
    let scaleMarkerColorClass = ""

    if (props.pitchCode === context.currentKey.value )
        scaleMarkerColorClass = "bg-danger"
    else if (context.scaleDegrees.value.includes(props.pitchCode))
        scaleMarkerColorClass = "bg-info"
    else {
        scaleMarkerColorClass = "bg-transparent"
        noteIsVisible = false
    }



    return(
        <div className={`fret col p-0 user-select-none ${dynamicClassName}`}>
            <div className="string-hr"></div>
            <div className={`scale-marker ${scaleMarkerColorClass}`}>
                {
                    context.showNoteNames.value === true ?
                        <div className="note-name text-center">
                            {noteIsVisible ? pitchName: <></>}
                        </div> :
                        <></>
                }
            </div>
        </div>
    )
}