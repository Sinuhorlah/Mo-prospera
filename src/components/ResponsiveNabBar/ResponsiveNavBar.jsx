import React from 'react'
import  White from '../../assets/Whiteprospera.png';

const ResponsiveNavBar = () => {
  return (
    <div className='bg-purple-600 h-[70px] w-[100%] flex justify-between px-4 py-4 flex-row'>
<div>
    <img src= {White} alt='Graph'className='w-32 h-auto' />
</div>

<div>
<button className="bg-white text-black  py-2 px-6 rounded-md shadow-md hover:bg-purple-600 transition duration-300">
      Get Started
    </button>
</div>

    </div>
  )
}

export default ResponsiveNavBar;