import React from "react"

import Header from "./components/Header"
import Fretboard from "./components/Fretboard"
import Controls from "./components/Controls"

import tunings from "./data/tunings"

export default function App(){
    const [numberOfFrets, setNumberOfFrets] = React.useState(24)
    const [currentTuning, setCurrentTuning] = React.useState(tunings[0])

    return(
        <main className="p-3">
            <Header />
            <Fretboard
                numberOfFrets={numberOfFrets}
                tuning={currentTuning}
            />
            <Controls 
                setCurrentTuning={setCurrentTuning}
            />
        </main>
    )
}