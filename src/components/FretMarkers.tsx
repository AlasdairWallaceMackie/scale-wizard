import React from "react"

type Props = {
    numberOfFrets: number
}

export default function FretMarkers(props: Props){
    const dotElements = () => {
        let list = []
        
        for (var i=0; i<=props.numberOfFrets; i++){
            list.push(getDots(i))
        }

        return list.map(fret => (
            <div className="col text-center small">{fret}</div>
        ))
    }

    function getDots(fretNumber: number){
        if ([3,5,7,9,15,17,19,21].includes(fretNumber))
            return "●"
        if ([12,24].includes(fretNumber))
            return "● ●"
        return ""
    }


    return (
        <div id="fret-markers" className="row">
            {dotElements()}
        </div>
    )
}