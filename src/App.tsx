import React from "react"

import Fretboard from "./components/Fretboard"

export default function App(){
    const [numberOfFrets, setNumberOfFrets] = React.useState(24)

    return(
        <main className="p-3">
            <h1 className="text-center">Scale Wizard</h1>
            <Fretboard numberOfFrets={numberOfFrets}/>
        </main>
    )
}