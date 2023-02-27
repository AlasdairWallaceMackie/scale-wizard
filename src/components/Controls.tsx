import React from "react"

import { ControlsContext } from "../context/controlsContext"
import tunings from "../data/tunings"
import scales from "../data/scales"
import { noteLookup, noteDisplay } from "../data/notes"
import PositionController from "./PositionController"

export default function Controls(){
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
        <form>
            <div className="d-flex">
                <label htmlFor="key-select" className="form-label">
                    Key
                    <select
                        id="key-select"
                        className="form-select"
                        defaultValue={context.currentKey.value}
                        onChange={context.currentKey.handler}
                    >
                        {keyOptionElements}
                    </select>
                </label>
                <label htmlFor="scale-select" className="form-label">
                    Scale
                    <select 
                        id="scale-select" 
                        className="form-select" 
                        defaultValue={defaultScaleValue}
                        onChange={context.currentScale.handler}
                    >
                        {scaleOptionElements}
                    </select>
                </label>
            </div>

            <label htmlFor="tuning-select" className="form-label">
                Tuning
                <select
                    id="tuning-select"
                    className="form-select"
                    defaultValue={defaultTuningValue}
                    onChange={context.currentTuning.handler}
                >
                    {tuningOptionElements}
                </select>
            </label>

            <br />

            <input type="button" onClick={context.sharpOrFlat.handler} value="♯/♭" className="btn btn-secondary" />

            <div className="form-check">
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
            
            <PositionController />
        </form>
    )
}