import { FaWalking } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BsFillPersonFill, BsFillPeopleFill } from "react-icons/bs";

const WhyUseInsig = () => {
  return (
    <div
      className="flex flex-col mb-24 items-center px-4 bg-cover rounded w-full"
      style={{ backgroundImage: "url('/img/b2.jpg')" }}
    >
      <h1 className="pt-20  text-[44px] text-gray-100 font-semibold">
        Why use Intelligent{" "}
        <span className="text-blue-400 animate-pulse  ">Signals?</span>
      </h1>
      <h4 className="pt-4  text-gray-300 ">
        Trading in Crypto is not easy, and most traders lose money! Online
        educational resource Tradeciety (www.tradeciety.com){" "}
      </h4>
      <div className="p-10 w-full max-w-4xl flex flex-col md:flex-row md:items-start md:justify-center items-center gap-x-12 gap-y-7">

        <div className="flex flex-col w-3/4 md:w-1/3 gap-6">
          <BiWallet className="w-14 h-14 cursor-pointer text-blue-400 transform rotate-0 hover:rotate-180 transition-transform duration-300" />
          <h3 className="text-gray-100 text-2xl">
            95 % of traders in Crypto lose money
          </h3>
        </div>
        <div className="flex flex-col w-3/4 md:w-1/3 gap-6">
          <FaWalking className="w-14 h-14 cursor-pointer text-blue-400 transform rotate-0 hover:rotate-0 transition-transform duration-300" />
          <h4 className="text-gray-100 text-2xl font-semibold">
            80% of day traders quit in the first two years
          </h4>
        </div>
        <div className="flex flex-col w-3/4 md:w-1/3 gap-6">
          <BsCurrencyExchange className="w-14 h-14 cursor-pointer text-blue-400 transform rotate-0 hover:rotate-180 transition-transform duration-300" />
          <h4 className="text-gray-100 text-2xl font-semibold">
            Traders with a ten-year track record of losing continue to trade!
          </h4>
        </div>

      
        
      </div>
      <div className="p-10 w-full max-w-4xl flex flex-col md:flex-row md:items-start md:justify-center items-center gap-x-12 gap-y-7">
        <div className="flex flex-col items-center p-4 border-4 border-blue-400 rounded-2xl w-3/4 md:w-1/3 hover:scale-105 transition duration-200">
          <h2 className="text-5xl py-3 font-bold text-blue-400">2-5</h2>
          <p className="text-2xl font-bold text-blue-400">Crypto Signals</p>
          <p className="text-2xl font-bold text-blue-400">Per day</p>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-blue-400 rounded-2xl w-3/4 md:w-1/3 hover:scale-105 transition duration-200">
          <h2 className="text-5xl py-3 font-bold text-blue-400">82%</h2>
          <p className="text-2xl font-bold text-blue-400">Success</p>
          <p className="text-2xl font-bold text-blue-400">Rate</p>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-blue-400 rounded-2xl w-3/4 md:w-1/3 hover:scale-105 transition duration-200">
          <h2 className="text-5xl py-3 font-bold text-blue-400">50k+</h2>
          <p className="text-2xl font-bold text-blue-400">Telegram</p>
          <p className="text-2xl font-bold text-blue-400">Members</p>
        </div>
      </div>

      {/* OurGoal Banner */}
      <div className="flex flex-col w-4/5 items-center  relative -bottom-24">
        <h2 className="text-white text-4xl font-semibold py-4 ">Our Goals</h2>
        <div className="bg-gray-100 p-10 md:p-14  shadow-lg shadow-sky-400  rounded-xl flex flex-col md:flex-row md:items-start md:justify-center items-center gap-x-12 gap-y-7">
          <div className="flex w-4/5 md:w-1/3 gap-6">
            <BsFillPersonFill className="w-14 h-14 cursor-pointer text-blue-400 " />
            <div className="flex flex-col">
              <h3 className="text-black text-5xl font-semibold">25K</h3>
              <h4 className="text-gray-600">Active Subscriber in 1 Year</h4>
            </div>
          </div>
          <div className="flex  w-4/5 md:w-1/3 gap-6">
            <BsFillPeopleFill className="w-14 h-14 cursor-pointer text-blue-400 " />
            <div className="flex flex-col">
              <h3 className="text-black text-5xl font-semibold">100K</h3>
              <h4 className="text-gray-600">Active Subscriber in 3 Year</h4>
            </div>
          </div>
          <div className="flex  w-4/5 md:w-1/3 gap-6">
            <FaUsers className="w-14 h-14 cursor-pointer text-blue-400 " />
            <div className="flex flex-col ">
              <h3 className="text-black text-5xl font-semibold">500K</h3>
              <h4 className="text-gray-600">Active Subscriber in 5 Year</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUseInsig;
