import React from "react"

import { SharpFlatContext } from "../context/sharpFlatContext"
import { Tuning } from "../d"
import tunings from "../data/tunings"

type Props = {
    setCurrentTuning: React.Dispatch<React.SetStateAction<Tuning>>,
}

export default function Controls(props: Props){
    const sharpFlatContext = React.useContext(SharpFlatContext)
    const tuningOptionElements = tunings.map((tuning, index) => (
        <option value={index}>{tuning.name}</option>
    ))

    function onChangeTuning(event: React.ChangeEvent<HTMLSelectElement>){
        const value: number = parseInt(event.currentTarget.value)
        props.setCurrentTuning(tunings[value])
    }

    return (
        <form>
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