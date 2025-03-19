import React from 'react'
import { Routes, Route } from "react-router-dom";
import Fans from './pages/Dashboard/Fans.jsx'
import Lights from './pages/Dashboard/Lights.jsx'
import Curtains from './pages/Dashboard/Curtains.jsx'
import Security from './pages/Dashboard/Security.jsx'
import Attendence from './pages/Dashboard/Attendence.jsx'
import Sidebar from './components/Sidebar.jsx';


const Dashboard = () => {
  return (
    <main>
      <Sidebar />
      <section className="p-4 mt-14 sm:ml-64">
        <Routes>
          <Route path='/fans' element={<Fans />} />
          <Route path='/lights' element={<Lights />} />
          <Route path='/curtains' element={<Curtains />} />
          <Route path='/security' element={<Security />} />
          <Route path='/attendence' element={<Attendence />} />
        </Routes>
      </section>
    </main>
  )
}

export default Dashboard
