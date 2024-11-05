// import React from 'react'
import googlePlayBadge from '../assets/google-play-badge.png';
import appStoreBadge from '../assets/applelogo.jpg';
import powerrangers from '../assets/powerrangers.png';
import { FaCircleCheck } from 'react-icons/fa6';
import Wheat from './Wheat';

const Hero = () => {

  return (
    

<div className="flex flex-wrap mt-20 justify-between mb-8 mr-5 px-12">
         
    <div className=" px-14 pt-10 space-x-2">
      
     <p className=" text-1xl ml-2 ">Secure Your Finances </p>
      <h1 className="text-4xl text-purple-600 font-bold leading-normal mb-10 mt-4">FIANCIAL PEACE OF  <br /> MIND GUARANTEED. </h1>
      <ul className="space-y-2 mb-8 grid grid-cols-2 font-bold text-right">
          <li className=" items-center text-center">
            <span className="text-black flex mb-8 pt-2"> <FaCircleCheck /> Risk Fee Payment </span> 
          </li>
          <li className=" items-center">
            <span className="text-black flex gap-8 mb-8  pt-2"> <FaCircleCheck />  Data Safety</span>
          </li>
          <li className=" items-center">
            <span className="text-black flex gap-8 mb-8 space-y-2 pt-2"> <FaCircleCheck /> Continous Monitoring</span>
          </li>
          <li className=" items-center">
            <span className=" text-black flex gap-8 mb-8 space-y-2 pl-3 pt-2"> <FaCircleCheck /> Dual-Step Verification</span> 
            
          </li>
        </ul>
        <div className="flex  flex-wrap justify-center lg:justify-start space-x-4 gap-6">
          <img src={googlePlayBadge} alt="Google Play" className="h-12" />
          <img src={appStoreBadge} alt="App Store" className="h-12" />
        </div>
        </div>
        <div className=' w-34 px-12 gap-8'>
        <img src={powerrangers} alt="" className='Keep' />
        
</div>

    
</div>


  );
};

export default Hero




