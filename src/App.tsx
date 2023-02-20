import React from "react"

import Header from "./components/Header"
import Fretboard from "./components/Fretboard"

export default function App(){
    const [numberOfFrets, setNumberOfFrets] = React.useState(24)

    return(
        <main className="p-3">
            <Header />
            <Fretboard numberOfFrets={numberOfFrets}/>
        </main>
    )
}