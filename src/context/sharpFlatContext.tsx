import React, { MouseEventHandler } from "react"

import { SHARP_FLAT_DEFAULT } from "../data/settings"

interface ContextDefault {
    sharpOrFlat: string,
    toggleSharpFlat: MouseEventHandler
}

const defaultValue: ContextDefault = {
    sharpOrFlat: SHARP_FLAT_DEFAULT,
    toggleSharpFlat: () => {}
}

const SharpFlatContext = React.createContext(defaultValue)

function SharpFlatContextProvider(props: any){
    const [sharpOrFlat, setSharpOrFlat] = React.useState<"sharp"|"flat">(SHARP_FLAT_DEFAULT)

    function toggleSharpFlat(){
        setSharpOrFlat(prevState => prevState === "sharp" ? "flat" : "sharp")
    }

    return (
        <SharpFlatContext.Provider value={{sharpOrFlat, toggleSharpFlat}}>
            {props.children}
        </SharpFlatContext.Provider>
    )
}

export {SharpFlatContextProvider, SharpFlatContext}