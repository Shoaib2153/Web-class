

import React,{useState} from "react"
import Home from "./components/Home"
import { themecolor } from "./components/Themecolor"
import { useContext } from "react"


  
export const App=()=>{
  const [theme, settheme]=useState("dark")
  const [changeColor, setChangeColor]=useState(false)
    return(
    <div>
  {

<themecolor.Provider value={{
  bgcolor:theme,
  textcolor:"white"
}}>
    <Home/>
    </themecolor.Provider>
    
  }
  <div>
      <label>Select Theme</label>
       {
        theme==="dark" ?  (
          <div style={{display:"flex", justifyContent:"end", marginRight:"20px"}}>
          <svg onClick={()=>{
            settheme("light")
          }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-toggle2-off" viewBox="0 0 16 16">
      <path d="M9 11c.628-.836 1-1.874 1-3a4.98 4.98 0 0 0-1-3h4a3 3 0 1 1 0 6z"/>
      <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10"/>
    </svg>
    </div>
        ):(
          <div style={{display:"flex", justifyContent:"end", marginRight:"20px"}}>
           <svg onClick={()=>{
            settheme("dark")
          }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-toggle2-on" viewBox="0 0 16 16">
  <path d="M7 5H3a3 3 0 0 0 0 6h4a5 5 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416q.235-.537.584-1"/>
  <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0"/>
</svg>
    </div>
        )
       }
    </div>
    </div>
    )
}
