import React from 'react'
import { useContext } from 'react'
import { themecolor } from '../Themecolor'

const Index = () => {
    const theme=useContext(themecolor)
  return (
    <div>
      <button style={{backgroundColor:theme==="dark"?'darkgray':"white", color:theme==="dark"?"white":"black"}}>Submit form</button>
    </div>
  )
}

export default Index