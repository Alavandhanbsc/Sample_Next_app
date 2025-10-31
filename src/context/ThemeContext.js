"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

//export context
export const useTheme = ()=>useContext(ThemeContext)
export const ThemeProvider = ({children})=>{
const[theme,setTheme]=useState(()=>{
    if (typeof window!=="undefined"){
        return localStorage.getItem("theme")||"light"
    }
    return "light"
})

//toggle theme 
const toggleTheme = ()=>{
    setTheme((prev)=>(prev==="light"?"dark":"light"))
}


//save localstorage when theme is change
useEffect(()=>{
localStorage.setItem("theme",theme)
document.documentElement.className = theme;
},[theme])


return(
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}} >
        <div className={theme==="dark"?"dark":""}>
            {children}
        </div>
    </ThemeContext.Provider>
    </>
)
}

