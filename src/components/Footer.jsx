import React from "react";
import logo from "../assets/justlogo.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () =>{
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-12 px-14">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          
          <img src={logo} alt="" className="w-16" />
        </div>
      
        <div className="flex  flex-wrap justify-center gap-12">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
         
          <div>      
            <p> Prospera empowers Nigerians to outpace inflation
            with high yield savings and investment solutions. </p> 
          </div>
      
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-purple-600">
              Products
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Accounts </a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Savings</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"> Wealth vault</a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200">Pay utility</a>
            </p>
          </div>
       
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-purple-600">
              Useful links
            </h6>
            <p className="mb-4">
              <Link to={'/About'}>
              <a className="text-neutral-600 dark:text-neutral-200">About</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link to={'/Faqs'}>
              <a className="text-neutral-600 dark:text-neutral-200">FaQs</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link to={'/privacy'}>
              <a className="text-neutral-600 dark:text-neutral-200">Privacy Policy</a>
              </Link>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200">Help</a>
            </p>
          </div>
          
          <div>
            <h6 className="mb-4 flex flex-wrap justify-center font-semibold uppercase md:justify-start text-purple-600">
              Contact
            </h6>
            {/* <p className="mb-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <FaMapLocation/>
              18, Afolabi Aina Street,
            </p> */}
            <p className="mb-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <FaEnvelope/>
            info@prosperaapp.com
            </p>
            <p className="mb-4 flex items-center justify-center gap-4 md:justify-start">
            <FaPhone/>
            +234 911 597 0119
            </p>
           
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 gap-4">
        <span>© 2024 Copyright:  </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
        >
          Prospera
        </a>
      </div>
    </footer>
  );
};

export default Footer;
