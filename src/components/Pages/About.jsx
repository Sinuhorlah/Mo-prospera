import React, { useState } from "react";
import Logo from "../../assets/Binoular.png";
import Sandbox from "../../assets/pngegg.png";
import Question from "../../assets/Question.png";
import { FaCirclePlay, FaEyeDropper, FaEyeLowVision } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const About = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      toast.success("Thank You For Subscribing !");
    } else {
      toast.error("Please enter a valid email.");
    }
  };
  return (
    <>
      {/* Vision Section */}
      <div className=" m-28 flex flex-col justify-between mt-[-70px]">
        <div className="flex items-center flex-wrap justify-between w-full">
          <div className="flex items-center flex-row justify-between gap-[350px]">
            <div className=" flex  items-end">
              <img
                src={Logo}
                alt="Vision binoculars"
                className=" object-cover"
              />
            </div>

            <div className="w-1/2">
              <h2 className="text-purple-800 text-5xl font-extrabold flex items-center">
                {" "}
                <FaEyeLowVision className="mr-3" /> Our Vision
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Our mission is to simplify financial management while maximizing
                the potential for growth through accessible and responsible
                savings and investment solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between mt-[-100px] ">
          <div className="flex items-center gap-8 justify-between flex-row">
            <div className="w-1/2 p-20 ">
              <h2 className="text-purple-800 text-5xl font-extrabold flex items-center">
                {" "}
                <FaQuestion className="mr-3 font-extralight " /> Who we are
              </h2>
              <p className="mt-2 text-gray-600 text-lg">
                Prospera is a revolutionary digital savings and investment
                platform that empowers users to take control of their financial
                future. We offer a wide array of financial products tailored to
                meet the needs of individuals, businesses, and groups. Whether
                you're saving for a short-term goal, making long-term
                investments, or paying utilities, Prospera has everything you
                need in one place.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img
                src={Sandbox}
                alt="Vision binoculars"
                className="w-52 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[200px]  justify-between w-full mt-[50px]">
          <div className="">
            <img
              src={Question}
              alt="Ask me"
              className="w-full h- object-cover"
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-purple-800 text-5xl font-extrabold flex items-center">
              Why Prospera
            </h2>
            <p className="mt-2 text-gray-600 text-lg ">
              At Prospera, we believe that financial inclusion and education are
              key to building sustainable wealth. Our app is designed to be
              user-friendly, offering flexibility, security, and a variety of
              tools to help you save and invest with confidence. With
              competitive interest rates, fractional investment opportunities,
              and community-driven features, Prospera provides users with a
              robust platform to achieve their financial dreams.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-purple-100 py-8 mt-10">
          <div className="max-w-4xl mx-auto text-center px-6 py-12">
            <h2 className="text-2xl text-purple-800 font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest news and exclusive offers from
              Prospera. Join our mailing list to never miss out on financial
              tips and updates.
            </p>
            <div className="flex justify-center">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 shadow-lg rounded-lg max-w-md w-full"
              >
                <input
                  type="email"
                  className="w-full sm:w-auto flex-grow p-3 border border-purple-500 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md transform hover:scale-105"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default About;
