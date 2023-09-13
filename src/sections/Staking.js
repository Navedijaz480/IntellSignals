const Staking = () => {
    return ( 
        <>
        <div className='flex flex-col  justify-center items-center mt-20 lg:flex-row  w-full  max-w-6xl min-h-screen'>
        <div className=' w-3/4 pt-7  lg:w-1/2  lg:pl-10   flex flex-col gap-4 justify-center' >
          <h1 className='text-7xl text-white'> <span className='text-green-400 animate-pulse'>Staking</span></h1>
          <h2 className='text-4xl text-gr3'>Build the Future with Intell Signals</h2>
          <p className='text-gray-300 leading-7 '>
            We want to introduce the staking feature so people can earn more with their tokens. Staking is a way of supporting the security and stability of the network while also earning passive income.
            Staking in the context of cryptocurrencies refers to holding and locking up a certain amount of tokens in a cryptocurrency network to participate in the network's consensus mechanism and earn rewards.
            In the context of staking, crypto signals help traders determine which cryptocurrencies to stake and for how long. For example, a signal may indicate that a particular cryptocurrency will likely
            experience price appreciation over the next few months, making it a good candidate for staking.
          </p>
          <button className='mt-4 px-8 py-3 mr-auto font-semibold bg-sk text-white rounded-lg hover:translate-y-1 hover:bg-sk1 transition duration-300 ease-in-out '>Learn More</button>
        </div>
        <div className='w-2/3 flex justify-center lg:pl-6 lg:w-1/2 py-8  '>
          <img className="w-10/12 h-auto rounded-xl hover:scale-95 transition duration-300 ease-in-out" src="/img/u2.jpeg" alt='a'  />
        </div>
      </div>
       <div className='py-10 z-1 px-4 w-full max-w-6xl flex flex-col md:flex-row md:items-stretch items-center gap-x-12 gap-y-7'>
       <div className='flex flex-col shadow-lg shadow-gray-100  bg-gr1 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in'>
         <h3 className='text-gray-100 text-2xl font-semibold'>BYE BYE GPU MINING</h3>
         <p className='text-gray-300'>Mining Helium tokens with Hotspots is done via radio technology, not expensive or wasteful GPUs.</p>
       </div>
       <div className=' flex flex-col shadow-lg shadow-gray-100  bg-gr1 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in'>
         <h3 className='text-gray-100 text-2xl font-semibold'>Build Networks</h3>
         <p className='text-gray-300'>Hotspots work together to form a new global wireless network and undertake 'Proof-of-Coverage'.</p>
       </div>
       <div className='flex flex-col shadow-lg shadow-gray-100  bg-gr1 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in'>
         <h3 className='text-gray-100 text-2xl font-semibold'>Choose your Hardware</h3>
         <p className='text-gray-300'>Hotspots are built by a variety of vendors to suit your needs.</p>
       </div>
     </div>
     </>
     );
}
 
export default Staking;