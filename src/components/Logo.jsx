// import React from 'react'
import Central from '../assets/Cbn.svg';
import Success from '../assets/certified.svg';
import Certified from '../assets/certifiedd.svg';

const Logo = () => {
  return (
    <div className=' mb-6 grid grid-cols-3 px-20 '>
        <div className='flex flex-wrap gap-4'>
        <img src={Central} alt="cbn" className="h-24" />
        <p className='pt-12 font-medium'>CBN Licensed</p>
        </div>

        <div className='flex flex-wrap'>
        <img src={Success} alt="certified" className="w-24" />
        <p className='pt-12 pl-7'> ISD / IEC 27001:2024</p>
        </div>

        <div className='flex flex-wrap '>
        <img src={Certified} alt="certifiedd" className="h-24" />
        <p className='pt-12 pl-7'>ISO 22301:2024</p>
        </div>
    </div>
  );
};

export default Logo