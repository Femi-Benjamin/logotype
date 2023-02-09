import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Features from './Pages/Features'
import Pricing from './Pages/Pricing'
import AboutUs from './Pages/AboutUs'
import Help from './Pages/Help'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import HomeBar from './NavBar/HomeBar'


const App = () => {
  return (

    <BrowserRouter>
      <HomeBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/help' element={<Help />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
