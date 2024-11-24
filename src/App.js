

import React,{useState} from "react"
import Home from "./components/Home"
import { themecolor } from "./components/Themecolor"


  
export const App=()=>{
  const [theme, settheme]=useState("dark")
  const [changeColor, setChangeColor]=useState(false)
  const handleChange=(e)=>{
    const {value}=e.target
    settheme(value)
  }
  console.log("theme", theme)
    return(
    <>
    <div>
      <label>Select Theme</label>
      <input type="text" onBlur={handleChange}/>
      <button onClick={()=>{
        setChangeColor(true)
      }}>Change color</button>
    </div>
  {

<themecolor.Provider value={changeColor ? theme:"dark"}>
    <Home/>
    </themecolor.Provider>
    
  }
    </>
    )
}
