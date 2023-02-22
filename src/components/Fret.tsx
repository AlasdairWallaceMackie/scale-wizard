import React from "react"

import { ControlsContext } from "../context/controlsContext"
import { noteLookup, sharpToFlatConversion } from "../data/notes"

type Props = {
    pitchCode: number,
    octave: number,
    openFret: boolean
}

export default function Fret(props: Props){
    const context = React.useContext(ControlsContext)

    const pitchName = 
        context.sharpOrFlat.value === "sharp" ? 
        noteLookup[props.pitchCode] : 
        sharpToFlatConversion(noteLookup[props.pitchCode])
    
    const dynamicClassName = props.openFret ? "open-fret" : "" 

    const scaleMarkerColorClass = () => {
        if (props.pitchCode === context.currentKey.value )
            return "bg-danger"
        if (context.scaleDegrees.value.includes(props.pitchCode))
            return "bg-info"
        return "bg-transparent"
    }

    return(
        <div className={`fret col border py-0 pe-0 ps-1 user-select-none ${dynamicClassName}`}>
            <div className={`scale-marker ${scaleMarkerColorClass()}`}>
                {
                    context.showNoteNames.value === true ?
                        <div className="note-name">
                            {pitchName}{props.octave}
                        </div> :
                        <></>
                }
            </div>
        </div>
    )
}