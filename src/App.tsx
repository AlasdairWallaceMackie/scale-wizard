import React from "react"

import RotatePhoneOverlay from "./components/RotatePhoneOverlay"
import Header from "./components/Header"
import Fretboard from "./components/Fretboard"
import Controls from "./components/Controls"
import Footer from "./components/Footer"

export default function App(){
    return(
        <>
            <RotatePhoneOverlay />

            <main className="p-3">
                <Header />
                <Fretboard />
                <hr />
                <Controls />
            </main>

            <Footer />
        </>
    )
}