import React from "react"
import {createRoot} from "react-dom/client"

import App from "./App"
import "./App.css"
import { SharpFlatContextProvider } from "./context/sharpFlatContext"

const root = createRoot(document.getElementById("root"))
root.render(
    <SharpFlatContextProvider>
        <App />
    </SharpFlatContextProvider>
)