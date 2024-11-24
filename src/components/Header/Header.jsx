import React from "react"
import { useContext } from "react"
import { levelContext } from "../LevelContext"
 const Header=({children})=>{

  let level=useContext(levelContext)
  console.log("level", level)
    switch(level){
      case 1:
        return <h1>{children}</h1>
      case 2:
        return <h2>{children}</h2>
      case 3:
          return <h3>{children}</h3>;
      case 4:
          return <h4>{children}</h4>;
      case 5:
          return <h5>{children}</h5>;
      case 6:
          return <h6>{children}</h6>;
      default:
          throw Error('Unknown level: ' + level);
    }
  
}

export default Header;