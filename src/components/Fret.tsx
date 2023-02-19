import React from "react"

import { noteLookup } from "../data/notes"

type Props = {
    pitchCode: number,
    octave: number,
}

export default function Fret(props: Props){
    const pitchName = noteLookup[props.pitchCode]

    return(
        <p>{pitchName}{props.octave}{pitchName.length < 2 ? <span>&nbsp;</span> : <></>}|</p>
    )
}