const FoundingPartners = () => {
    return ( 
    <div className='py-24  bg-white w-full flex flex-col items-center gap-10 '>
    <div className='px-4 w-11/12 flex flex-col items-center gap-5'>
      <h2 className='text-5xl font-bold text-black'>Founding Partners</h2>
      <h3 className='text-xl text-black'>We have put together a world className team of leadership , software engineers , AI experts , Trading professionals and financiers.</h3>
    </div>
    <div className='grid grid-cols-2 w-2/3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
      <div className='col-span-1'><img className="w-44 h-auto" src='/img/agulus.svg' alt='a'  />   </div>
      <div className='col-span-1'><img className="w-44 h-auto" src='/img/airly.svg' alt='a'  />   </div>
      <div className='col-span-1'><img className="w-44 h-auto" src='/img/nowi.svg' alt='a' />   </div>
      <div className='col-span-1'><img className="w-44 h-auto" src='/img/digitalmatter.svg' alt='a' />   </div>
      <div className='col-span-1'><img className="w-44 h-auto" src='/img/lonestar.svg' alt='a'  />   </div>
      <div className='col-span-1'><img className="w-44 h-auto" src='/img/open.svg' alt='a' />   </div>
      <div className='col-span-1'><img className="w-44 h-auto" src='/img/mydevices.svg' alt='a'  />   </div>
      <div className='col-span-1'><img className="w-44 h-auto" src='/img/careband.svg' alt='a'  />   </div>
      <div className='col-span-1'><img className="w-44 h-auto" src='/img/mimiq.svg' alt='a' />   </div>
    </div>
  </div> );
}
 
export default FoundingPartners;