import React from "react"

import { ControlsContext } from "../context/controlsContext"

export default function PositionController(){
    const context = React.useContext(ControlsContext)

    return (
        <div id="position-controller" className="mt-3">
            <div className="form-check">
                <input
                    id="all-positions-checkbox"
                    className="form-check-input"
                    type="checkbox"
                    checked={context.showAllPositions.value}
                    onChange={context.showAllPositions.handler}
                />
                <label htmlFor="all-positions-checkbox" className="form-check-label user-select-none">
                    Show All Positions
                </label>
                <div className="btn-group ms-3">
                    <button
                        type="button"
                        className="btn btn-secondary" 
                        disabled={context.showAllPositions.value}
                        onClick={() => context.currentPositionPitches.handler(-1)}
                    >
                        {"<"}
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary" 
                        disabled={context.showAllPositions.value}
                        onClick={() => context.currentPositionPitches.handler(1)}
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    )
}