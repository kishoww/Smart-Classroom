import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard.jsx';
import Auth from './Auth.jsx'
import Classroom from './Classroom.jsx';

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/*' element={<Auth />} />
          <Route path='/class/*' element={<Classroom />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
      </main>
    </Router>

  )
}

export default App
