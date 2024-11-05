import React from 'react'
// import Header from './Header'
import Footer from './Footer'
import Header from './Pages/Header'

const MainLayout = ({ children}) => {
  return (
    <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default MainLayout