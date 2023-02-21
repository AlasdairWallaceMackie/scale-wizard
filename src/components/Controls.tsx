import React from "react"

import { ControlsContext } from "../context/controlsContext"
import tunings from "../data/tunings"
import scales from "../data/scales"
import { noteLookup } from "../data/notes"

export default function Controls(){
    const context = React.useContext(ControlsContext)



    const tuningOptionElements = tunings.map((tuning, index) => (
        <option key={index} value={index}>{tuning.name}</option>
    ))
    const keyOptionElements = Object.keys(noteLookup).map((key: string, index) => (
        <option key={index} value={key}>{noteLookup[parseInt(key)]}</option>
    ))
    const scaleOptionElements = scales.map((scale, index) => (
        <option key={index} value={index}>{scale.name}</option>
    ))



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
                        defaultValue={context.currentScale.value.name}
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
                    onChange={context.currentTuning.handler}
                >
                    {tuningOptionElements}
                </select>
            </label>

            <br />

            <input type="button" onClick={context.sharpOrFlat.handler} value="♯/♭" className="btn btn-secondary" />
        </form>
    )
}