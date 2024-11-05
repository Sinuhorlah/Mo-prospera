import React from 'react'
import Body from '../Body'
import Middle from '../Middle'
import Navbar from '../Navbar'
import Calculator from '../Calculator'
import GetProsper from '../GetProsper'
import Footer from '../Footer'
// import Header from '../Header'

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden '>
       
          <Body/>
          <Middle/>
        <Navbar />
        <Calculator/>
        <GetProsper/>
        <Footer/>
    </div>
  )
}

export default LandingPage