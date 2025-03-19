import React from 'react'
import { Routes, Route } from "react-router-dom";
import Fans from './pages/Dashboard/Fans.jsx'
import Lights from './pages/Dashboard/Lights.jsx'
import Curtains from './pages/Dashboard/Curtains.jsx'
import Security from './pages/Dashboard/Security.jsx'
import Attendence from './pages/Dashboard/Attendence.jsx'


const Dashboard = () => {
  return (
    <main>
      <Routes>
        <Route path='*' element={<Fans />} />
        <Route path='/lights' element={<Lights />} />
        <Route path='/curtains' element={<Curtains />} />
        <Route path='/security' element={<Security />} />
        <Route path='/attendence' element={<Attendence />} />
      </Routes>
    </main>
  )
}

export default Dashboard
