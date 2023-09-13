const DemandAppBanner = () => {
    return ( 
        <div className=' bg-gradient-to-b from-purple-400 to-purple-700 mt-6 w-full flex justify-center'>
        <div className='py-12 px-4  w-full max-w-6xl flex flex-col lg:flex-row  items-center gap-y-8'>
          <div className='flex flex-col'>
            <h3 className='text-white font-semibold text-2xl'>Make your on demand app</h3>
            <h3 className='text-white font-semibold text-2xl'>The next success story</h3>
          </div>
          <div className='lg:ml-auto'>
          <button className=" rounded-lg px-4 py-3 overflow-hidden relative group cursor-pointer font-semibold text-lg bg-gr  ">
              <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-white transition duration-[700ms] group-hover:text-black ease">Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
     );
}
 
export default DemandAppBanner;