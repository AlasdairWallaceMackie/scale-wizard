import React from "react"

import { ControlsContext } from "../context/controlsContext"

export default function PositionRange(){
    const context = React.useContext(ControlsContext)

    return (
        <div className="d-flex align-items-center mt-4">
            <button
                type="button"
                className="btn btn-lg btn-secondary" 
                disabled={context.showAllNotes.value}
                onClick={() => context.currentPositionIndex.increment(-1)}
            >
                {"<"}
            </button>

            <input
                type="range"
                className="form-range mx-3"
                min={0}
                max={context.allPositions.value.length - 1}
                value={context.currentPositionIndex.value}
                onChange={context.currentPositionIndex.handler}
                disabled={context.showAllNotes.value}
            />

            <button
                type="button"
                className="btn btn-lg btn-secondary" 
                disabled={context.showAllNotes.value}
                onClick={() => context.currentPositionIndex.increment(1)}
            >
                {">"}
            </button>
        </div>
    )
}