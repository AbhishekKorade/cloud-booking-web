"use client"; // Only needed for Next.js

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaSchool,
  FaUserMd,
  FaLandmark,
  FaBuilding,
  FaTractor,
  FaIndustry,
  FaTruck,
  FaStore,
  FaChair,
  FaBed,
  FaBug,
} from "react-icons/fa";

const WeServe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-10 px-4 md:px-8 lg:px-12 mb-20">
      {/* Section Title */}
      <h4
        className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold"
        data-aos="fade-up"
      >
        Whom We Serve
      </h4>
      <p
        className="italic text-sm md:text-md text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Powering Success Across Industries
      </p>

      {/* Banner Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center mt-10">
        {/* Education */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          {/* Top Bar - Uses the Same Blue Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-500 to-gray-700"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-blue-400/50 bg-gradient-to-b from-blue-200 to-blue-600"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-blue-200 to-blue-700">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaSchool />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Education
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-blue-500 to-blue-700">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-blue-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* Health Care & Pharma */}

        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-500 to-gray-700"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-purple-400/50 bg-gradient-to-b from-purple-200 to-purple-600"></div>
          </div>

          {/* Main Card with the Same Gradient */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-purple-200 to-purple-700">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaUserMd />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Health Care & Pharma
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-purple-500 to-purple-700">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-purple-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* Banking & Financial */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-700"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-yellow-400/50 bg-gradient-to-b from-yellow-300 to-yellow-500"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-yellow-300 to-yellow-500">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaLandmark />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Banking & Financial
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-yellow-400 to-yellow-500">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* Real Estate */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-700"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-orange-400/50 bg-gradient-to-b from-orange-400 to-orange-600"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-orange-400 to-orange-600">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaBuilding />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Real Estate
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-orange-500 to-orange-600">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-orange-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* Agriculture Industry */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-500 to-gray-800"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-orange-400/50 bg-gradient-to-b from-orange-400 to-orange-600"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-orange-400 to-orange-600">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaTractor />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Agriculture Industry
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-orange-500 to-orange-600">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-orange-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* Manufacturing & Industrial */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-500 to-gray-800"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-yellow-400/50 bg-gradient-to-b from-yellow-400 to-yellow-500"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-yellow-400 to-yellow-500">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaIndustry />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Manufacturing & Industrial
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-yellow-500 to-yellow-500">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* Transportation & Logistics */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-700"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-emerald-500/50 bg-gradient-to-b from-emerald-400 to-emerald-600"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-emerald-400 to-emerald-600">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaTruck />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Transportation & Logistics
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-emerald-500 to-emerald-600">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-emerald-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* FMCG & Retail */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-700"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-teal-400/50 bg-gradient-to-b from-teal-300 to-teal-500"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-teal-300 to-teal-500">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaStore />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                FMCG & Retail
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-teal-400 to-teal-500">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-teal-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* Interior */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-700"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-amber-500/50 bg-gradient-to-b from-amber-400 to-amber-600"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-amber-400 to-amber-600">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaChair />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Interior
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-amber-500 to-amber-600">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-amber-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* Hotel & Restaurant */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-700"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-rose-500/50 bg-gradient-to-b from-rose-400 to-rose-600"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-rose-400 to-rose-600">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaBed />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Hotel & Restaurant
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-rose-500 to-rose-600">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-rose-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>

        {/* Pest Control */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          {/* Top Bar - Uses the Same Gradient */}
          <div className="relative flex items-center justify-center w-28 h-6">
            <div className="absolute w-52 z-10 h-4 bg-gradient-to-r from-gray-400 to-gray-700"></div>
            <div className="absolute w-40 h-7 z-20 shadow-md shadow-lime-500/50 bg-gradient-to-b from-lime-400 to-lime-600"></div>
          </div>

          {/* Main Card with the Same Gradient (Covers Everything) */}
          <div className="relative w-40 h-48 flex flex-col items-center justify-end text-white rounded-b-lg shadow-md bg-gradient-to-b from-lime-400 to-lime-600">
            <div className="flex flex-col items-center pb-6 mt-6">
              <div className="text-4xl text-white">
                <FaBug />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-center text-white">
                Pest Control
              </h2>
            </div>

            {/* Bottom Triangle - Uses the Same Gradient */}
            <div className="h-20 relative w-full bg-gradient-to-b from-lime-500 to-lime-600">
              <div className="w-40 h-0 border-l-[80px] border-r-[80px] border-t-[25px] border-t-lime-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeServe;
