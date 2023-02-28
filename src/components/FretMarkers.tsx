import React from "react"

type Props = {
    numberOfFrets: number
}

export default function FretMarkers(props: Props){
    const dotElements = () => {
        let dotList = []
        
        for (var i=0; i<=props.numberOfFrets; i++){
            dotList.push(getDots(i))
        }

        return dotList.map((dots, index) => (
            <div
                key={index}
                className={`fret col text-center small user-select-none ${index === 0 ? "open-fret" : ""} border-white`}
            >
                {dots}
            </div>
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
        <div id="fret-markers" className="row flex-nowrap">
            {dotElements()}
        </div>
    )
}