// import React from 'react'
import { FaMarker } from 'react-icons/fa';
import Save from '../assets/Save.svg'
import { FaCircleCheck, FaHeartCircleCheck, FaMarkdown } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {

  return (
    <div className="flex flex-wrap mt-20 justify-between lg:px-14 px-7 bg-[purple-600]">
          <div className=' w-34 lg:px-12 gap-8'>
            
        <img src={Save} alt="" className='Keep' />

</div>
    <div className="lg:px-14 pt-12">
      
     <h3 className=""> PUT YOUR MONEY TO WORK </h3>
      <h1 className="text-3xl leading-normal mb-10">REACH YOUR DREAMS WITH  MINIMAL <br /> EFFORT  AND  MAXIMUM RESULTS </h1>
      <ul className="space-y-2 mb-8 lg:grid lg:grid-cols-2 font-bold flex flex-wrap items-center justify-between">
          <li className=" items-center">
            <div className='flex flex-row items-center text-purple-600 gap-3'>
            <FaCircleCheck/>   <span className=" flex mt- gap-2">  Long Term Vision </span> 
            </div>
          
            <p className='font-light'>if you can imagine it you can make it<br /> happen. Start saving for your goals today </p>
          </li>
          <li className=" items-center">
          <div className='flex flex-row items-center text-purple-600 gap-3'>
             <span className=" flex mb-4 gap-2  items-center">   <FaCircleCheck /> Safe Smart Not Hard </span> 
            </div>
          
            <p className='font-light'>We simply savings so you can focus on living.</p>
          </li>
        
          <li className=" items-center">
          <div className='flex flex-row items-center text-purple-600 gap-3'>
            <FaCircleCheck/>   <span className=" flex  "> Immediate Payout </span> 
            </div>
            <p  className='font-light '>24/7 Access to funds: Quick, <br /> Easy and Secure</p>
          </li>

          <li className=" items-center">
          <div className='flex flex-row items-center text-purple-600 gap-3'>
            <FaCircleCheck/>   <span className=" flex  "> Fiancial Clarity </span> 
            </div>
            <p className=' font-light'>Stay ontop of your finances: Check in regularly</p>
          </li>
        </ul>
        </div>

</div>
    
  );
};

export default Navbar