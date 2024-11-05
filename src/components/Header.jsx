import React, { useEffect, useState } from 'react';
// import logo from "../assets/Whiteprospera.png"; 
import scrolledLogo from "../assets/Blackprospera.png"; 
import { Link } from 'react-router-dom';
import logo from "../assets/Allwhite.png"
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
   
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

 
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`flex items-center justify-between w-full fixed top-0 px-14 py-4  z-[99] left-0 transition-colors duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <ul className="flex space-x-4 gap-12 px-12 font-4xl font justify-between">
          <div className='w-full'>
         <Link to={'/'}>
         <img 
              src={isScrolled ? scrolledLogo : logo} 
              alt='Prospera Logo' 
              className="w-32 h-auto" 
            />
         </Link>
          </div>
        </ul>
        <div className="px-8 py-4">
          <button 
            className={`py-2 px-4 rounded transition-colors duration-300 ${
              isScrolled 
                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                : 'bg-white text-black hover:bg-purple-600 hover:text-white'
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;





