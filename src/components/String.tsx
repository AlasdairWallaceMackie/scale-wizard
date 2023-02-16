import React from "react"

import Fret from "./Fret" //Change this to 'Fret'

import { noteLookup } from "../data/data"

type Props = {
    pitch: number
}

export default function String(props: Props){
    return (
        <div className="string">
            <strong>{noteLookup[props.pitch]}</strong>
            <Fret />
            <Fret />
            <Fret />
            <Fret />
            <Fret />
            <Fret />
            <Fret />
            <Fret />
            <Fret />
        </div>
    )
}