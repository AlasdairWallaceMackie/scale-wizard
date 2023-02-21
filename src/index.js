import React from "react"
import {createRoot} from "react-dom/client"

import { ControlsContextProvider } from "./context/controlsContext"
import App from "./App"
import "./App.css"

const root = createRoot(document.getElementById("root"))
root.render(
    <ControlsContextProvider>
        <App />
    </ControlsContextProvider>
)