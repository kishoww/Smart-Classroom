import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Home from '../components/Pages/Home.jsx'

const App = () => {
  return (
    <main className='h-screen w-full bg-black/90'>

      <Header />
      <Home />
      <Footer />

    </main>
  )
}

export default App
