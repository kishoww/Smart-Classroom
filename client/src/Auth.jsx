import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login.jsx'

const Auth = () => {
  return (
    <main className='bg-black/90 h-screen w-full flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </main>
  )
}

export default Auth
