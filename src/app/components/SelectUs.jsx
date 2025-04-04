"use client"; // Only needed for Next.js

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { FaGem, FaRegObjectGroup } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

const SelectUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-10 px-4 md:px-8 lg:px-12 bg-blue-50 py-5">
      {/* Section Title */}
      <h4 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        The Reasons to Select Us
      </h4>
      <p className="italic text-sm md:text-md text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
        Choose Us for Reliable IT Solutions, Exceptional Expertise, and Client-Centric Approach
      </p>

      {/* Mission, Vision, Goal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {[
          { title: "Our Mission", text: "Our mission is to aid our clients in bestowing a professional front to the marketplace. If you break down to furnish a professional image, you may fail to obtain the level of business and thus the level of triumph that needs to be accomplished.", icon: <FaGem /> },
          { title: "Our Vision", text: "We aim to guide our clients with professionalism and focus to offer at most satisfaction. Making our clients feel comfortable at every point of the project, we take pride in our product result.", icon: <IoLanguageSharp /> },
          { title: "Our Goal", text: "CLOUD BOOKING SOLUTIONS is a provider of IT-consulting and software development services. Having started as a small AI product company, we switched to IT services and have since helped non-IT organizations improve business performance.", icon: <FaRegObjectGroup /> }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-blue-800 text-white p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="text-4xl lg:text-5xl flex justify-center items-center">{item.icon}</div>
            <h5 className="text-xl lg:text-2xl font-bold mt-4">{item.title}</h5>
            <p className="mt-3 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Stats Section with Running Count */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white bg-blue-900 rounded-lg py-10 mt-8">
        {[
          { number: 1344, label: "Clients" },
          { number: 2050, label: "Projects" },
          { number: 1364, label: "Hours of Support" },
          { number: 20, label: "Hard Workers" }
        ].map((stat, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <CountUp start={0} end={stat.number} duration={3} separator="," />
            </h2>
            <p className="text-md lg:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectUs;
