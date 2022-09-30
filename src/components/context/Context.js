import { Children, createContext, useState } from "react"

export const dataContext=createContext()
export default function Context({Children}){
    const[carttValue,setCarttValue]=useState(null)
    return(
        <>
        <dataContext.Provider value={{carttValue,setCarttValue}}>
            {Children}
        </dataContext.Provider>
        </>
    )
}