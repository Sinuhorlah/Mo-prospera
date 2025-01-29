// import React from 'react'
import iphonemockup from "../assets/iphonemockup.png"
import googlePlayBadge from '../assets/google-play-badge.png';
import appStoreBadge from '../assets/app-store-badge.png';


const Wheat = () => {

  return (
    
    <section className="relative  text-white py-20 px-6 overflow-hidden bg-cover md:flex-1 bg-purple-600 mt-12 "
>
    <div className="container mx-auto flex flex-wrap flex-col lg:flex-row items-center justify-between relative z-10">

      <div className="lg:w-1/2 text-center lg:text-left  ">
        
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Save Now, <br /> Secure Tomorrow <br /> Outpace Inflation!!
        </h1>
        
        <p className="text-lg mb-8  text-1xl ">
          Prospera empowers Nigerians to outpace inflation <br /> with high yield savings and investment solutions.
        </p>
      
            
     <div className=" flex-1 flex  gap-10 ml-12 pb-10 items-center justify-between flex-col">
        <img src={iphonemockup} alt="Mobile App" className="w-60  " />
      </div>
     
        <div className="flex  flex-wrap justify-center  lg:justify-start space-x-4">
          <img src={googlePlayBadge} alt="Google Play" className="h-12" />
          <img src={appStoreBadge} alt="App Store" className="h-12" />
        </div>
      </div>
    
     
    </div>
  </section>
  );
};

export default Wheat;