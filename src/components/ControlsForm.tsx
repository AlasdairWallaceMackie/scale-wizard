import React from "react"

import { ControlsContext } from "../context/controlsContext"
import tunings from "../data/tunings"
import scales from "../data/scales"
import { noteLookup, noteDisplay } from "../data/notes"

export default function ControlsForm(){
    const context = React.useContext(ControlsContext)



    const keyOptionElements = Object.keys(noteLookup).map((key: string, index) => (
        <option key={index} value={key}>
            {noteDisplay(parseInt(key), context.sharpOrFlat.value)}
        </option>
    ))
    
    let defaultScaleValue: number = 0
    const scaleOptionElements = scales.map((scale, index) => {
        if (scale.name === context.currentScale.value.name)
            defaultScaleValue = index
        return <option key={index} value={index}>{scale.name}</option>
    })

    let defaultTuningValue: number = 0
    const tuningOptionElements = tunings.map((tuning, index) => {
        if (tuning.name === context.currentTuning.value.name)
            defaultTuningValue = index
        return <option key={index} value={index}>{tuning.name}</option>
    })




    return (
        <form id="controls--form" className="d-flex justify-content-evenly">
            <div>
                <div className="d-flex">
                    <div id="controls--form--key" className="form-floating me-2">
                        <select
                            id="key-select"
                            className="form-select"
                            defaultValue={context.currentKey.value}
                            onChange={context.currentKey.handler}
                        >
                            {keyOptionElements}
                        </select>
                        <label htmlFor="key-select" className="form-label">Key</label>
                    </div>
                    <div className="form-floating">
                        <select 
                            id="scale-select" 
                            className="form-select" 
                            defaultValue={defaultScaleValue}
                            onChange={context.currentScale.handler}
                        >
                            {scaleOptionElements}
                        </select>
                        <label htmlFor="scale-select" className="form-label">Scale</label>
                    </div>
                </div>
                <div className="form-floating mt-2">
                    <select
                        id="tuning-select"
                        className="form-select"
                        defaultValue={defaultTuningValue}
                        onChange={context.currentTuning.handler}
                    >
                        {tuningOptionElements}
                    </select>
                    <label htmlFor="tuning-select" className="form-label">Tuning</label>
                </div>
            </div>

            <div className="ms-3 fs-2">
                <div className="form-check form-switch mb-4">
                    <input
                        id="all-notes-checkbox"
                        className="form-check-input"
                        type="checkbox"
                        checked={context.showAllNotes.value}
                        onChange={context.showAllNotes.handler}
                    />
                    <label htmlFor="all-notes-checkbox" className="form-check-label user-select-none">
                        Show All Notes
                    </label>
                </div>
                
                <div>
                    <div className="form-check form-switch mt-1 me-3">
                        <input
                            id="show-note-names-checkbox"
                            className="form-check-input"
                            type="checkbox"
                            checked={context.showNoteNames.value}
                            onChange={context.showNoteNames.handler}
                        />
                        <label htmlFor="show-note-names-checkbox" className="form-check-label user-select-none">
                            Show Note Names
                        </label>
                    </div>
    
                    {
                        context.showNoteNames.value === true ? 
                            <div className="d-flex justify-content-center">
                                ♯
                                <div className="form-check form-switch mx-1">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        onChange={context.sharpOrFlat.handler}
                                        checked={context.sharpOrFlat.value === "flat"}
                                    />
                                </div>
                                ♭
                            </div>
                        : <></>
                    }
                </div>
            </div>
        </form>
    )
}