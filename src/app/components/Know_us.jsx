

"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBagShopping, FaAward } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FiClock } from "react-icons/fi";

const Know_us = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto px-4 overflow-hidden mt-2">
      <h4 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold">
        Get to Know Us
      </h4>
      <p className="italic text-sm md:text-md text-center text-gray-600">
        Driving Innovation and Empowering Businesses through Cutting-Edge IT
        Solutions
      </p>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Image for Small Screens */}
        <div
          className="block lg:hidden mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            className="max-w-full h-auto"
            src="https://cloudbookingsolutions.com/img/about-img.svg"
            alt="About Us"
          />
        </div>

        <div className="mt-5 lg:mt-12">
          <p className="font-semibold md:font-bold text-[17px] md:text-lg text-black" data-aos="fade-right">
            The best IT solution with 4 years of experience
          </p>

          {/* Features List */}
          {[
            {
              icon: <FaBagShopping />,
              title: "Fair Prices",
              text: "1. Value-Driven Costs 2. Flexible Plans for Every Need",
              delay: 400,
            },
            {
              icon: <IoIosPeople />,
              title: "Professional Staff",
              text: "We have professional staff to complete your services",
              delay: 500,
            },
            {
              icon: <FaAward />,
              title: "Award Winning",
              text: "After we provide full services, we have received very good reviews from clients, which we feel is like an Award",
              delay: 600,
            },
            {
              icon: <FiClock />,
              title: "24/7 Support",
              text: "We are available for you round the clock",
              delay: 700,
            },
          ].map((item, index) => (
            <div
              className="flex gap-4 mt-0 group p-3 rounded-lg transition-all duration-300 overflow-hidden"
              key={index}
              data-aos="fade-right"
              data-aos-delay={item.delay}
            >
              <div className="flex-shrink-0 flex justify-center items-center h-14 w-14 md:h-16 md:w-16 rounded-full border border-blue-500 transition-all duration-300 group-hover:bg-blue-500">
                {React.cloneElement(item.icon, {
                  className: "h-7 w-7 md:h-9 md:w-9 text-blue-500 group-hover:text-white transition-all duration-300",
                })}
              </div>
              <div>
                <h5 className="font-semibold md:font-bold text-black text-xl leading-8">
                  {item.title}
                </h5>
                <p className="font-medium text-[14px] sm:text-[15px] text-black">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image for Large Screens */}
        <div
          className="hidden lg:flex justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img
            className="max-w-full h-auto"
            src="https://cloudbookingsolutions.com/img/about-img.svg"
            alt="About Us"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-20">
        {/* Image Animation */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            className="max-w-full h-auto"
            src="https://cloudbookingsolutions.com/img/about-extra-1.svg"
            alt="Cloud Booking"
          />
        </div>

        {/* Text Animation */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <h3 className="font-semibold italic text-blue-900 text-2xl md:text-3xl lg:text-4xl mt-3 lg:mt-0">
            Cloud Booking Software Solutions
          </h3>
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-lg text-gray-800">
            We are a Leading Web Development and Digital Marketing Agency. Our Professional Expertise Comprises Skilled and Experienced Designers and Developers Flexible in Creating Solutions According to Demands.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-lg text-gray-800">
            We offer custom website development services including E-Commerce Website Development, Custom Web App Development, Content Management System, Mobile App Development, Mobile Responsive Website, Internet Marketing & Digital Marketing. Our Web Specialists are Committed to Providing The Best Products and Services To Clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Know_us;

