import React from "react"

import Header from "./components/Header"
import Fretboard from "./components/Fretboard"
import Controls from "./components/Controls"

export default function App(){
    return(
        <main className="p-3">
            <Header />
            <Fretboard />
            <hr />
            <Controls />
        </main>
    )
}