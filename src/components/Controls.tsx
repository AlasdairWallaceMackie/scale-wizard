import React from "react"

import ControlsForm from "./ControlsForm"
import { Gear as GearIcon } from "./icons"

export default function Controls(){
    const controlsFormElement = React.useMemo(() => <ControlsForm />, [])
    
    const [windowHeight, setWindowHeight] = React.useState<number>(window.innerHeight)
    const mobileView: boolean = windowHeight <= 450

    React.useEffect(() => {
        function watchHeight(){
            setWindowHeight(window.innerHeight)
        }
        window.addEventListener('resize', watchHeight)

        return () => window.removeEventListener('resize', watchHeight)
    }, [])




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