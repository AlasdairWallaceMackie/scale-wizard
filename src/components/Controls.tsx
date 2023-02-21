import React from "react"

import { SharpFlatContext } from "../context/sharpFlatContext"
import { Tuning, Scale } from "../d"
import tunings from "../data/tunings"
import scales from "../data/scales"
import { noteLookup } from "../data/notes"

type Props = {
    setCurrentTuning: React.Dispatch<React.SetStateAction<Tuning>>,
    currentKey: number,
    setCurrentKey: React.Dispatch<React.SetStateAction<number>>,
    currentScale: Scale
    setCurrentScale: React.Dispatch<React.SetStateAction<Scale>>,
}

export default function Controls(props: Props){
    const sharpFlatContext = React.useContext(SharpFlatContext)
    const tuningOptionElements = tunings.map((tuning, index) => (
        <option value={index}>{tuning.name}</option>
    ))
    const keyOptionElements = Object.keys(noteLookup).map((key: string) => (
        <option value={key}>{noteLookup[parseInt(key)]}</option>
    ))
    const scaleOptionElements = scales.map((scale, index) => (
        <option value={index}>{scale.name}</option>
    ))

    function onChangeTuning(event: React.ChangeEvent<HTMLSelectElement>){
        const value: number = parseInt(event.currentTarget.value)
        props.setCurrentTuning(tunings[value])
    }

    function handleChangeKey(event: React.ChangeEvent<HTMLSelectElement>){
        const value: number = parseInt(event.currentTarget.value)
        props.setCurrentKey(value)
    }

    function handleChangeScale(event: React.ChangeEvent<HTMLSelectElement>){
        const value: number = parseInt(event.currentTarget.value)
        props.setCurrentScale(scales[value])
    }






    return (
        <form>
            <div className="d-flex">
                <label htmlFor="key-select" className="form-label">
                    Key
                    <select
                        id="key-select"
                        className="form-select"
                        defaultValue={props.currentKey}
                        onChange={handleChangeKey}
                    >
                        {keyOptionElements}
                    </select>
                </label>
                <label htmlFor="scale-select" className="form-label">
                    Scale
                    <select 
                        id="scale-select" 
                        className="form-select" 
                        defaultValue={props.currentScale.name}
                        onChange={handleChangeScale}
                    >
                        {scaleOptionElements}
                    </select>
                </label>
            </div>

            <label htmlFor="tuning-select" className="form-label">
                Tuning
                <select id="tuning-select" className="form-select" onChange={e => onChangeTuning(e)}>
                    {tuningOptionElements}
                </select>
            </label>

            <br />

            <input type="button" onClick={sharpFlatContext.toggleSharpFlat} value="♯/♭" className="btn btn-secondary" />
        </form>
    )
}