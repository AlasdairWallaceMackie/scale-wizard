import React from "react"

import { noteLookup } from "../data/notes"

type Props = {
    pitch: number
}

export default function Fret(props: Props){
    const pitchName = noteLookup[props.pitch]

    return(
        <p>|{pitchName}{pitchName.length < 2 ? <span>&nbsp;</span> : <></>}</p>
    )
}