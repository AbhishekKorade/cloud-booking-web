import React from "react";
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaPhp } from "react-icons/fa";

const TechnologicalResources = () => {
  return (
    <div className="mt-4 mx-4 md:mx-8 lg:mx-12 lg:mt-5">
      <h5 className="text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        Technological Resources
      </h5>
      <p className="italic text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
        Innovate with Confidence: Harnessing Cutting-Edge Technology for Next-Level Solutions!
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center mt-10">
        
        {/* HTML 5 */}
        <div className="relative flex flex-col items-center" data-aos="fade-down" data-aos-delay="100">
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-600"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-blue-400/50 bg-gradient-to-b from-blue-500 to-blue-600"></div>
          </div>
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-blue-500 to-blue-600">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl"><FaHtml5 /></div>
              <h2 className="mt-2 text-lg font-semibold text-center">HTML 5</h2>
            </div>
            <div className="h-20 relative w-full bg-gradient-to-b from-blue-500 to-blue-600">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-blue-600 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* CSS 3 */}
        <div className="relative flex flex-col items-center" data-aos="fade-down" data-aos-delay="200">
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-600"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-blue-300/50 bg-gradient-to-b from-blue-400 to-blue-500"></div>
          </div>
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-blue-400 to-blue-500">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl"><FaCss3 /></div>
              <h2 className="mt-2 text-lg font-semibold text-center">CSS 3</h2>
            </div>
            <div className="h-20 relative w-full bg-gradient-to-b from-blue-400 to-blue-500">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-blue-500 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* JavaScript */}
        <div className="relative flex flex-col items-center" data-aos="fade-down" data-aos-delay="300">
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-600"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-yellow-400/50 bg-gradient-to-b from-yellow-300 to-yellow-400"></div>
          </div>
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-yellow-300 to-yellow-400">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl"><FaJs /></div>
              <h2 className="mt-2 text-lg font-semibold text-center">JavaScript</h2>
            </div>
            <div className="h-20 relative w-full bg-gradient-to-b from-yellow-300 to-yellow-400">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-yellow-400 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* Bootstrap */}
        <div className="relative flex flex-col items-center" data-aos="fade-down" data-aos-delay="400">
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-600"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-orange-400/50 bg-gradient-to-b from-orange-300 to-orange-400"></div>
          </div>
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-orange-300 to-orange-400">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl"><FaBootstrap /></div>
              <h2 className="mt-2 text-lg font-semibold text-center">Bootstrap</h2>
            </div>
            <div className="h-20 relative w-full bg-gradient-to-b from-orange-300 to-orange-400">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-orange-400 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* PHP */}
        <div className="relative flex flex-col items-center" data-aos="fade-down" data-aos-delay="500">
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-600"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-yellow-500/50 bg-gradient-to-b from-yellow-400 to-yellow-500"></div>
          </div>
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-yellow-400 to-yellow-500">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl"><FaPhp /></div>
              <h2 className="mt-2 text-lg font-semibold text-center">PHP</h2>
            </div>
            <div className="h-20 relative w-full bg-gradient-to-b from-yellow-400 to-yellow-500">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechnologicalResources;
