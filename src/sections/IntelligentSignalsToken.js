const IntelligentSignalsToken = () => {
  return (
    <div
      className="flex flex-col items-center bg-cover rounded w-full min-h-screen"
      style={{ backgroundImage: "url('/img/b1.jpg')" }}
    > 
      {/* <h1 className='font-semibold leading-snug text-center text-3xl md:text-[42px] text-gray-100 w-8/12 pt-10'>Intelligent Signals Token (INSIG) is the driving force behind an Artificial Intelligence (AI) based Visual Signaling (VST) system.</h1> */}

      <h1 className="  font-semibold pb-8   leading-snug text-center text-3xl md:text-[42px] text-gray-100 w-8/12 pt-10   ">
        <span className="text-orange-400 mr-3">Intelligent Signals Token</span>
        (INSIG) is the driving force behind an{" "}
        <span className="text-red-500">Artificial Intelligence (AI)</span> based
        Visual Signaling (VST) system.{" "}
      </h1>

      <img
        className="pt-4 w-auto h-auto"
        src="/img/mainimg.png"
        alt="mainimg"
      />
    </div>
  );
};

export default IntelligentSignalsToken;
