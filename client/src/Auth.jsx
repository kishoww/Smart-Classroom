import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Auth/Signup.jsx'
import Login from './pages/Auth/Login.jsx'

const Auth = () => {
  return (
    <main className='bg-black/90 h-screen w-full flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
      </Routes>
    </main>
  )
}

export default Auth
