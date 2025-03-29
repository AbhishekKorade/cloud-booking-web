"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndustryPartner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 py-10 bg-blue-50">
      {/* Section Title */}
      <h4 className="text-4xl text-blue-900 text-center font-bold">
        Collaborative Industry Partner
      </h4>
      <p className="italic text-center text-gray-600 mt-2">
        Empowering a Future of Innovation and Efficiency Together
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-8 mx-5 lg:mx-32">
        {/* Card 1 */}
        <div
          className="bg-white h-80 rounded-lg shadow-md flex flex-col items-center p-5 text-center"
          data-aos="zoom-in"
        >
          <img
            src="https://cloudbookingsolutions.com/img/aadhar.png"
            alt="Aarogya Aadhar"
            className="w-72 h-72 object-contain"
          />
          <p className="mt-4 text-lg font-semibold text-gray-800">AAROGYA AADHAR</p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white h-80 rounded-lg shadow-md flex flex-col items-center p-5 text-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/dhan.png"
            alt="Aarogya Dhan"
            className="w-72 h-72 object-contain"
          />
          <p className="mt-4 text-lg font-semibold text-gray-800">AAROGYA DHAN</p>
        </div>
      </div>
    </div>
  );
};

export default IndustryPartner;
