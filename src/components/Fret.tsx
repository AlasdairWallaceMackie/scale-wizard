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
    
    const className = props.openFret ? "open-fret" : "" 

    return(
        <div className={`fret col border py-0 pe-0 ps-1 ${className}`}>
            {pitchName}{props.octave}
        </div>
    )
}