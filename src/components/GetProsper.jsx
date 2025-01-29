import React from 'react'
import iphonemockup from "../assets/Mockups 1.png"
import googlePlayBadge from '../assets/google-play-badge.png';
import appStoreBadge from '../assets/app-store-badge.png';
import Bgpicture from '../assets/bg.png'; 

const GetProsper = () => {
  return (
    <div className='flex flex-wrap justify-between  items-center  bg-cover px-14'
    style={{backgroundImage: `url(${Bgpicture})`}}>
        <div className="lg:w-1/2 text-center lg:text-left pt-40 px-12">
        
        <h1 className="text-5xl font-bold mb-6 leading-tight">
        Get the Prospera <br />
        App Today!
        </h1>
        
        <p className="text-lg mb-8  text-1xl">
          Prospera empowers Nigerians to outpace inflation <br /> with high yield savings and investment solutions.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
          <img src={googlePlayBadge} alt="Google Play" className="h-12" />
          <img src={appStoreBadge} alt="App Store" className="h-12" />
        </div>
      </div>
      
     <div className="w-full flex-1 flex-wrap gap-10 ml-14 pt-12">
        <img src={iphonemockup} alt="Mobile App" className="w-96  " />
      </div>
     
    </div>
  )
}

export default GetProsper;