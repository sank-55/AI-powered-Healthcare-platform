import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home  from './pages/Home';
import Medicine from './pages/Medicine';
import About from './pages/About';
import Appointment from './pages/Appointment';
import NotFound from './pages/NotFound';
import Labtest from './pages/Labtest';
import Cart from './pages/Cart'
// import ChatApp from './pages/ChatApp'

import Navbar from './components/Navbar';

import Register from './contexts/Register';
import Log_in from './contexts/Log_in'
import SignUp from './contexts/Register';

import './App.css'
import Footer from './components/Footer';
import FAQ from './components/FAQ'
import ChatApp from './pages/ChatApp';
import HealthPredictor from './pages/DiseasePred';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/medicine' element={<Medicine/>} /> 
        <Route path='/appointment' element={<Appointment/>} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/labtest' element={<Labtest/>} /> 
        <Route path='/login' element={<Log_in/>} />
        <Route path='/reg' element={<SignUp/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/medbot' element={<ChatApp/>} />
        <Route path='/pred' element={<HealthPredictor/>} />
      </Routes>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
