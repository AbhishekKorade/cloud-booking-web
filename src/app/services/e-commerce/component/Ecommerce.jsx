"use client";
import React from "react";
import { FaGears } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Ecommerce = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-5">
      {/* Title & Subtitle - Fade Up */}
      <h5
        className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold"
        data-aos="fade-up"
      >
      E-commerce Services
      </h5>
      <p
        className="italic text-sm md:text-md text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
       Empowering Your Online Success with E-commerce Excellence
      </p>

    
      {/* First Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://cloudbookingsolutions.com/img/ecommerce-2.png"
            alt="Cloud Booking"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <p className="mt-5 lg:mt-14 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          
         
        
          E- Commerce development company Cloud Booking's years of industry experience makes us capable enough to handle various aspects related to your online business store, enabling you to reach out to the global audience.
            
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
         
          
       Cloud Booking Team create and implement end-to-end e-commerce solutions like <span className=" font-bold">E-commerce website , web app, android app, iphone app,software </span> that are integrated with your business website impeccably. We are committed for 100% client satisfaction
            
       </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          E-commerce development involves the creation, design, and implementation of online platforms that enable businesses to sell products or services over the internet. It encompasses various aspects, including website or application development, product management, secure payment processing, inventory management, and customer relationship management.
          </p>
        </div>
      </div>

      {/* Second Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image for Small Screens */}
        <div
          className="block lg:hidden mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://cloudbookingsolutions.com/img/ecommerce-1.png"
            alt="About Us"
          />
        </div>

        {/* Features List */}
        <div className="mt-5 lg:mt-12">
        

          {/* Feature Items */}
          {[
            {
              icon: <FaGears />,
              title: "Online Store Development",
              text: "  Creating fully functional online stores with features like product listings, shopping carts, secure payment gateways, and inventory management.",
              delay: 400,
            },
            {
              icon: <FaMobile  />,
              title: "Mobile Commerce (m-commerce) Development",
              text: " Developing mobile applications specifically designed for e-commerce, allowing customers to browse and make purchases through their smartphones or tablets.",
              delay: 500,
            },
            {
              icon: <FaUserCircle />,
              title: "B2C (Business-to-Consumer) E-commerce Development",
              text: " Building platforms that facilitate direct selling of products or services from businesses to individual consumers.",
              delay: 600,
            },
            {
                icon: <FaBusinessTime />,
                title: "B2B (Business-to-Business) E-commerce Development",
                text: "  Creating platforms that enable businesses to engage in online transactions, trade, and collaboration with other businesses.",
                delay: 700,
              },
             
          ].map((item, index) => (
            <div
              className="flex gap-4 mt-4 group p-3 rounded-lg transition-all duration-300"
              key={index}
              data-aos="fade-right"
              data-aos-delay={item.delay}
            >
              <div className="flex-shrink-0 flex justify-center items-center h-14 w-14 md:h-16 md:w-16 rounded-full border border-blue-500 transition-all duration-300 group-hover:bg-blue-500">
                {React.cloneElement(item.icon, {
                  className:
                    "h-7 w-7 md:h-9 md:w-9 text-blue-500 group-hover:text-white transition-all duration-300",
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
            src="https://cloudbookingsolutions.com/img/ecommerce-1.png"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
