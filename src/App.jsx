// import React from 'react'
// import 'App.css'
import Header from './components/Header'
import Body from './components/Body'
import Middle from './components/Middle'
import Hero from './components/Hero'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import GetProsper from './components/GetProsper'
import Footer from './components/Footer'
import Wheat from './components/Wheat'
import Calculator from './components/Calculator'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/Pages/LandingPage'
import MainLayout from './components/MainLayout'
import PrivacyPolicy from './components/Pages/PrivacyPolicy'
import Faqs from './components/Pages/Faqs'
import About from './components/Pages/About'
import ChatModal from './components/chatmodal'


const App = () => {
  return (
   
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/privacy' element={<MainLayout><PrivacyPolicy/></MainLayout>} />
        <Route path='/Faqs' element={<MainLayout><Faqs/></MainLayout>} />
        <Route path='/About' element={<MainLayout><About/></MainLayout>} />
        <Route path='/chat-modal' element={<MainLayout><ChatModal/></MainLayout>} />
        
      

        
      </Routes>
    </div>
  )
}

export default App