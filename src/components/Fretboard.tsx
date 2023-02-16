import React from "react"

import String from "./String"
// import Fret from "./Fret"
import { noteCodeLookup } from "../data/data"

export default function Fretboard(){
    return (
        <div id="fretboard">
            <String pitch={noteCodeLookup['E']}/>
            <String pitch={noteCodeLookup['B']}/>
            <String pitch={noteCodeLookup['G']}/>
            <String pitch={noteCodeLookup['D']}/>
            <String pitch={noteCodeLookup['A']}/>
            <String pitch={noteCodeLookup['E']}/>
        </div>
    )
}