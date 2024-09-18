import { createContext, useState } from "react";


export const GlobalContext=createContext();
export const Globalprovider=({children})=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    return(
<GlobalContext.Provider value={{username,setUsername,password,setPassword}}>
    {children}
</GlobalContext.Provider>
    )
}