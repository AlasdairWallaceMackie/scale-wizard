import React from "react"

import { WindowSizeContext } from "../context/windowSizeContext"
import { MIN_WINDOW_SIZE } from "../data/settings"

// This component will only display if the current windowWidth is smaller than MIN_WINDOW_SIZE.width
export default function RotatePhoneOverlay(){
    const windowWidth = React.useContext(WindowSizeContext).width

    return (
        <>
            {windowWidth < MIN_WINDOW_SIZE.width ? 
                <div id="rotate-phone-overlay">
                    <h1 className="overlay-text">Rotate<br/>Phone</h1>
                </div>
                : 
                <></>
            }
        </>
    )
}