import React from "react"

import { WindowSizeContext } from "../context/windowSizeContext"
import ControlsForm from "./ControlsForm"
import { Gear as GearIcon } from "./icons"

import { MIN_WINDOW_SIZE } from "../data/settings"

export default function Controls(){
    const controlsFormElement = React.useMemo(() => <ControlsForm />, [])
    const windowHeight = React.useContext(WindowSizeContext).height
    const mobileView: boolean = windowHeight <= MIN_WINDOW_SIZE.height


    return (
        <div id="controls">
            {mobileView ? 
                <>
                    <button type="button" className="btn btn-lg btn-light" data-bs-toggle="modal" data-bs-target="#controlsModal">
                        <GearIcon />
                    </button>

                </>
                :
                <>{controlsFormElement}</>
            }

            {/* This modal should always be rendered, otherwise the screen could be locked if the window size is changed while the modal is active, requiring a page refresh */}
            <div className="modal fade shadow-lg" id="controlsModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Settings</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div className="modal-body">
                            {controlsFormElement}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}