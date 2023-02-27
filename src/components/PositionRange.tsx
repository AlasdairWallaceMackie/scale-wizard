import React from "react"

import { ControlsContext } from "../context/controlsContext"

export default function PositionRange(){
    const context = React.useContext(ControlsContext)

    return (
        <input
            type="range"
            className="form-range"
            min={0}
            max={context.allPositions.value.length - 1}
            value={context.currentPositionIndex.value}
            onChange={context.currentPositionIndex.handler}
            disabled={context.showAllNotes.value}
        />
    )
}