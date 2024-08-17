import { createContext, useState } from "react"

export const colorContext = createContext(null);

const ColorModeContext = ({children})=>{
    const [dark, setDark] = useState(false);

    return (<colorContext.Provider value={{dark,setDark}}>{children}</colorContext.Provider>)
}

export default ColorModeContext;