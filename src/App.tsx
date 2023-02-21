import React from "react"

import Header from "./components/Header"
import Fretboard from "./components/Fretboard"
import Controls from "./components/Controls"

import { noteCodeLookup } from "./data/notes"
import tunings from "./data/tunings"
import scales from "./data/scales"
import { DEFAULT_KEY, DEFAULT_SCALE } from "./data/settings"

export default function App(){
    const [numberOfFrets, setNumberOfFrets] = React.useState(24)
    const [currentTuning, setCurrentTuning] = React.useState(tunings[0])
    const [currentKey, setCurrentKey] = React.useState(noteCodeLookup[DEFAULT_KEY])
    const [currentScale, setCurrentScale] = React.useState(scales[0])




    return(
        <main className="p-3">
            <Header />
            <Fretboard
                numberOfFrets={numberOfFrets}
                tuning={currentTuning}
            />
            <hr />
            <Controls 
                setCurrentTuning={setCurrentTuning}
                currentKey={currentKey}
                setCurrentKey={setCurrentKey}
                currentScale={currentScale}
                setCurrentScale={setCurrentScale}
            />
        </main>
    )
}