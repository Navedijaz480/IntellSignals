import {MdArrowOutward} from 'react-icons/md'
import NetworkBanner from '../banners/NetworkBanner';
import LatestNews from '../sections/LatestNews';
import IntelligentSignalsToken from '../sections/IntelligentSignalsToken';
import VideoSection from '../sections/VideoSection';
import DemandAppBanner from '../banners/DemandAppBanner';
import WhatAreInsig from '../sections/WhatAreInsig';
import WhyUseInsig from '../sections/WhyUseInsig';
import Staking from '../sections/Staking';
import Tokenomics from '../sections/Tokenomics';
import IntroductiontoAI from '../sections/IntroductiontoAI';
import IntelligentSignalEcosystem from '../sections/IntelligentSignalEcosystem';
// import Roadmap from '../sections/Roadmap';
import Plans from '../sections/Plans';
import FoundingPartners from '../sections/FoundingPartners';
import FAQ from '../sections/FAQ';
const Home = () => {
    return ( <>
        <div className='flex flex-col items-center mt-20 mb-4 lg:flex-row  w-full   min-h-screen'>
        <div className=' w-3/4 lg:w-1/2  lg:pl-32  bg-gr flex flex-col gap-4 justify-center items-center lg:items-stretch' >
          <div className='bg-gradient-to-r from-purple-700 to-pink-500 text-gray-100 py-1 pl-4  lg:w-full w-11/12 rounded-lg flex items-center hover:opacity-90 '>
            <h1 className=''> Artificial Intelligence drive token  used to access AI technology </h1>
            <MdArrowOutward className="w-8 h-8 py-1 cursor-pointer ml-auto  hover:text-blue-300" />
          </div>
          <h1 className=' text-6xl font-semibold'>
            <span className='text-orange-400'>INSIGNAL </span>
            <span className='text-red-500'>TOKEN.</span> </h1>
          <p className='text-3xl font-semibold text-gr3 '>Start Trading Now</p>
          <p className='text-xl text-gray-300'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <button className='mt-4 w-1/2 px-4 py-2 lg:mr-auto font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg hover:translate-y-1 hover:bg-sk1 transition duration-300 ease-in-out '>Start Now</button>
        </div>
        <div className='flex justify-center w-3/4 lg:w-1/2 pt-8 lg:pr-2 '>
          <img src="/img/hero.jpg" alt='a' className='w-3/4 h-auto rounded-xl hover:scale-95 transition duration-300 ease-in-out'  />
        </div>
      </div>

      <NetworkBanner />
      <LatestNews/>
      <IntelligentSignalsToken/>
      <VideoSection/>
      <DemandAppBanner/>
      <WhatAreInsig/>
      <WhyUseInsig/>
      <Staking/>
      {/* <Tokenomics/> */}
      <IntroductiontoAI/>
      <IntelligentSignalEcosystem/>
      {/* <Roadmap/> */}
      <Plans/>
      <FoundingPartners/>
      <FAQ/>


      </>
     );
}
 
export default Home;