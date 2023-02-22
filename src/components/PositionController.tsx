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
            </div>
            {
                context.showAllPositions.value === false ?
                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-secondary">{"<"}</button>
                        <button type="button" className="btn btn-outline-secondary">{">"}</button>
                    </div> :
                    <></>
            }
        </div>
    )
}