// import React from 'react'
import iphonemockup from "../assets/iphonemockup.png"
import googlePlayBadge from '../assets/google-play-badge.png';
import appStoreBadge from '../assets/app-store-badge.png';
import Bgpicture from '../assets/Newbg.jpg'; 
import { Fade, Zoom } from "react-reveal";
import Wheat from "./Wheat";
import Header from "./Header";
import ResponsiveNavBar from "./ResponsiveNabBar/ResponsiveNavBar";
// import { TypeAnimation } from "react-type-animation";

const Body = () =>{

  return (
    <>
   
    <section className="relative  text-white py-20 px-6 overflow-hidden bg-cover md:flex-1 hidden lg:block "
    style={{backgroundImage: `url(${Bgpicture})`}} >
          <div className=" absolute top-0 flex justify-between">
      <Header />

    </div>
    <div className="container mx-auto flex flex-wrap flex-col lg:flex-row items-center justify-between relative z-10">

      <div className="lg:w-1/2 text-center lg:text-left px-20 pb-40">
        <Fade up>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          {/* Save Now, <br /> Secure Tomorrow <TypeAnimation sequence={[
            'Outpace Inflation!!',
            1000,
            'hhhhhhhhhhh',
            1000
          ]}
          wrapper="span"
      speed={50}
      style={{ fontSize: '3rem', display: 'inline-block' }}
      repeat={Infinity}
           />  */}
          Save  and Earn, <br />  20% APY Of Your Investment <br />
        </h1>
        </Fade>
        <p className="text-lg mb-8  text-1xl ">
          Prospera empowers Nigerians to outpace inflation <br /> with high yield savings and investment solutions.
        </p>
        <div className="flex  flex-wrap justify-center lg:justify-start space-x-4">
          <img src={googlePlayBadge} alt="Google Play" className="h-12" />
          <img src={appStoreBadge} alt="App Store" className="h-12" />
        </div>
      </div>
     <Zoom out>
     <div className="w-full flex-1 flex-wrap gap-10 ml-44 pb-25 mt-20 ">
        <img src={iphonemockup} alt="Mobile App" className="w-72  " />
      </div>
     </Zoom>
    </div>
  </section>
   <div className="lg:hidden block bg-purple-600">
    <div>
      <ResponsiveNavBar/>
    </div>
    <Wheat/>
   </div>
  </>
);
};

export default Body;


