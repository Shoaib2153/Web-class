import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from '../components/Home'
import Services from '../components/Service'
import Contact from '../components/Contact'

const ProjectRoutes = () => {
  return (
    <Router>
    <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/service" element={<Services/>}/> 
       <Route path="/contact" element={<Contact/>}/>
       

    </Routes>

  </Router>
  )
}

export default ProjectRoutes
