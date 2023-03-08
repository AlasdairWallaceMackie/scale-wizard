import React from "react"

const defaultValue = {width: window.innerWidth, height: window.innerHeight}
const WindowSizeContext = React.createContext(defaultValue)

function WindowSizeContextProvider(props: any){
    const [windowSize, setWindowSize] = React.useState(defaultValue)

    React.useEffect(() => {
        function watchSize(){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', watchSize)

        return () => window.removeEventListener('resize', watchSize)
    }, [])

    return (
        <WindowSizeContext.Provider value={windowSize}>
            {props.children}
        </WindowSizeContext.Provider>
    )
}

export {WindowSizeContextProvider, WindowSizeContext}