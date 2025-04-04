const Home = () => {
  return (
    <div className="relative xl:h-screen w-[100%] overflow-hidden mt-16 lg:mt-8 font-sans">
      {/* Background Image */}
      <img 
        src="/bg-image.png" // Ensure the image is inside the public folder
        alt="Home Image" 
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */ }
      <div className="absolute top-1/2 left-0 lg:left-10 transform -translate-y-1/2 text-white">
        <h3 className="text-sm sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-semibold lg:font-extrabold p-2 lg:p-4 leading-tight italic drop-shadow-lg">
          <span className="text-white">Cloud Booking</span> <br /> 
          <span className="text-white">Software Solutions</span> <br />
          <span className="text-white">is a provider of</span> <br />
          <span className="text-amber-500 font-extrabold">
            IT-consulting and <br /> software development
          </span> <br /> 
          <span className="text-white">services</span>
        </h3>
        <div className="flex gap-3 lg:gap-5 ml-2 xl:ml-4">
          <button className="bg-blue-500 italic text-white text-xs lg:text-[16px] md:text-sm px-2 py-1 md:px-4 md:py-2 rounded-full">
            Our Services
          </button>
          <button className="bg-blue-500 italic text-white text-xs lg:text-[16px] md:text-sm px-2 py-1 md:px-4 md:py-2 rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
