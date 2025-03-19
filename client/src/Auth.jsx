import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Auth/Signup.jsx'
import Login from './pages/Auth/Login.jsx'

const Auth = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
      </Routes>
    </main>
  )
}

export default Auth
