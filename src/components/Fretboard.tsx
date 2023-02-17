import React from "react"

import String from "./String"
import { noteCodeLookup } from "../data/notes"

export default function Fretboard(){
    return (
        <div id="fretboard">
            <String pitch={noteCodeLookup['E']} numberOfFrets={24}/>
            <String pitch={noteCodeLookup['B']} numberOfFrets={24}/>
            <String pitch={noteCodeLookup['G']} numberOfFrets={24}/>
            <String pitch={noteCodeLookup['D']} numberOfFrets={24}/>
            <String pitch={noteCodeLookup['A']} numberOfFrets={24}/>
            <String pitch={noteCodeLookup['E']} numberOfFrets={24}/>
        </div>
    )
}