"use client";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const BusinessProfile = () => {
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
       Google My Business Profile
      </h5>
      <p
        className="italic text-sm md:text-md text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
       Boost Your Local Presence: Unleash the Power of Google My Business for Your Business Success
      </p>

      {/* First Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-20">
        {/* Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://cloudbookingsolutions.com/img/online-stock-management-consultant-2885231-2399509.png"
            alt="Cloud Booking"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
           
         
          Google My Business is a free tool provided by Google that allows businesses to manage their online presence across various Google platforms.
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          
          
          With Google My Business, businesses can manage important information about their business, such as their address, phone number, hours of operation, website URL, and more. They can also create posts, upload photos and videos, and respond to customer reviews.
            
          </p>
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
           
         
          Having a Google My Business listing can help businesses increase their visibility in local search results, build trust and credibility with potential customers through customer reviews, and provide important information to customers who are searching for their products or services.
           </p>
        </div>
      </div>

      {/* Second Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-20">
        {/* Image for Small Screens */}
        <div
          className="block lg:hidden mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://cloudbookingsolutions.com/img/gmb-local-seo.svg"
            alt="About Us"
          />
        </div>

        {/* Features List */}
        <div className="mt-5 lg:mt-0">
        

          {/* Feature Items */}
          {[
            {
              icon: <FaMagnifyingGlass />,
              title: "Increased Visibility",
              text: " A well-optimized Google My Business profile increases your chances of appearing in local search results, making it easier for potential customers to find your business.",
              delay: 400,
            },
            {
              icon: <FaCheck />,
              title: "Business Information Management",
              text: "  You have full control over your business information, ensuring it is accurate, consistent, and easily accessible to customers.",
              delay: 500,
            },
            {
              icon: <FaStar />,
              title: "Customer Reviews and Ratings",
              text: "Customers can leave reviews and ratings on your Google My Business profile, providing valuable feedback and social proof to potential customers.",
              delay: 600,
            },
            {
              icon: <FaPlay />,
              title: "Photos and Videos",
              text: "You can showcase your business through high-quality images and videos, giving customers a visual representation of your products, services, and location.",
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
            src="https://cloudbookingsolutions.com/img/gmb-local-seo.svg"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
