import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/Pages/LandingPage'
import MainLayout from './components/MainLayout'
import PrivacyPolicy from './components/Pages/PrivacyPolicy'
import Faqs from './components/Pages/Faqs'
import About from './components/Pages/About'



const App = () => {
  return (
   
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/privacy' element={<MainLayout><PrivacyPolicy/></MainLayout>} />
        <Route path='/Faqs' element={<MainLayout><Faqs/></MainLayout>} />
        <Route path='/About' element={<MainLayout><About/></MainLayout>} />
 
        
      

        
      </Routes>
    </div>
  )
}

export default App