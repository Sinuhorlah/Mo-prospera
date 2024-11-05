import React from "react";
// import { FaSave } from "react-icons/fa";
import { Fade, Zoom } from "react-reveal";

const Middle = () => {
  return (
    <section className="bg-white py-12 px-14 md:flex-1 hidden lg:block ">
      <div className="text-center">
        <Fade up>
          <h1 className="text-purple-600 text-5xl mb-4 font-extrabold">
            Our Products{" "}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            {""}
            There is no way to beat inflaton our needs cut across multiple
            facets. Prospera provides a variety of saving products to help users
            choose how best they want to beat inflation, save and invest .{" "}
          </p>
        </Fade>
      </div>

      <div className="w-full ">
        <div className="lg:grid lg:grid-cols-4 lg:gap-6 px-12 flex flex-row flex-wrap items-center justify-center ">
          <div className="mb-2 flex:1 bg-white w-full h-[270px] shadow-md rounded-lg p-6 transition-all duration-75 ">
            <div className=" rounded-[100px] w-9 h-9 items-center justify-center flex flex-col bg-[#dcc8fa]">
               <img src="/src/assets/iconAccount.svg" className="w-5 h-5"/>
            </div>

            <h3 className="font-bold text-xl mb-2 text-[#690af8] ">Account</h3>
            <p className=" mb-4">
              <b>Personal Account:</b>features NUBAN Account nos
              <br />
              <b>Business Account:</b>Webpay,invoice link& schedule payment
            </p>
            <div className="h-5">

            </div>
            <a href="" className="text-[#6300F7]  ">
              view more
            </a>
          </div>
          <div className="mb-2 flex:1 bg-white w-full h-[270px] shadow-md rounded-lg p-6  transition-all duration-75">
            <div className=" rounded-[100px] w-9 h-9 items-center justify-center flex flex-col bg-[#ffdecc]">
            <img src="/src/assets/saving.png"/>
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#FF5C00] ">Savings</h3>
            <p className=" mb-4">
              <b>Flexi Save:</b>Save at your own pace with flexibility to
              withdraw when needed <br />
              <b>Locksave:</b>Look away funds for a fixed period with attractive
              intrest
            </p>

            <a href="" className="text-[#FF2D2D] ">
              view more
            </a>
          </div>

          <div className="mb-2 flex:1 bg-white w-full h-[270px] shadow-md rounded-lg p-6 transition-all duration-75">
            <div className=" rounded-[100px] w-9 h-9 items-center justify-center flex flex-col bg-[#fff4ef]">
            <img src="/src/assets/moneyIcon.svg" className="w-5 h-5"/>
            </div>

            <h3 className="font-bold text-xl mb-2 text-[#6300F7]">
              Wealth Vault
            </h3>
            <p className=" mb-4">
              <b>InvestEasy:</b>Fractional investment in stocks, ETFs and mutual
              funds
              <br />
              <b>GoldVault:</b>A good value locked savings account to hedge
              against inflation
            </p>
            <a href="" className="text-[#6e49a4] font-bold cursor-pointer">
              view more
            </a>
          </div>

          <div className="mb-2 flex:1 bg-white w-full h-[260px] shadow-md rounded-lg p-6 transition-all duration-75">
            <div className=" rounded-[100px] w-9 h-9 items-center justify-center flex flex-col">
              <img src="/src/assets/saving.png" />
            </div>

            <h3 className="font-bold text-xl mb-2 text-[#FF5C00]">
              Pay Utility
            </h3>
            <p className=" mb-7">
              <b>Recharge:</b>Airtime,Electricity & Internet Subscription <br />
              <b>Ticket and vouchers:</b>Buy Airline Tickets,Event Ticket Bus
              Ticket.
            </p>
            <a href="" className="text-[#FF2D2D] font-bold cursor-pointer">
              view more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Middle;
