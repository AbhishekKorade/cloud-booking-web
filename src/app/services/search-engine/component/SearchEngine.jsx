"use client";
import React from "react";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const SearchEngine = () => {
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
      Search Engine optimization
      </h5>
      <p
        className="italic text-sm md:text-md text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Elevate Your Online Visibility: Unleash the Power of Search Engine Optimization for Maximum Reach and Impact
      </p>

      {/* First Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-10">
        {/* Image for Small Screens */}
        <div
          className="lg:hidden flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/seo-company.svg"
            alt="Cloud Booking"
          />
        </div>

        {/* Text Animation */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
         
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          <span className=" font-bold">SEO stands for Search Engine Optimization </span>, which is the practice of optimizing a website to improve its visibility and ranking in search engine results pages. SEO involves optimizing the website's content, structure, and other technical aspects to make it more appealing to search engines and increase its chances of ranking higher in search results.

          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          
          SEO is important for improving your business because it can help you <span className="font-bold">attract more organic traffic to your website, generate leads, and increase sales </span>. Here are some specific ways that SEO can benefit your business:
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          <span className=" font-bold">Increases website traffic: </span>By optimizing your website for search engines, you can attract more organic traffic to your website. This can increase your brand visibility and help you reach more potential customers.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          Generates leads: By attracting more organic traffic to your website, you can also generate more leads. SEO can help you attract people who are actively searching for products or services similar to yours, making them more likely to convert into customers.
          </p>
        </div>

        {/* Image for Large Screens */}
        <div
          className="lg:flex hidden items-center"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/seo-company.svg"
            alt="Cloud Booking"
          />
        </div>
      </div>

      {/* Second Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://cloudbookingsolutions.com/img/rethinkdigital-website-seo.svg"
            alt="Cloud Booking"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          
          Improves brand awareness: By ranking higher in search engine results pages, your brand can become more visible to potential customers. This can increase brand awareness and help you establish your brand as an authority in your industry.
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          Provides a competitive edge: SEO can help you stand out from the competition by making your website more visible and accessible to potential customers. This can help you attract more customers and increase your market share.

          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          Overall, SEO is an essential part of digital marketing that can help businesses of all sizes improve their online presence and reach more customers. By investing in SEO, businesses can increase their website traffic, generate leads, and improve their bottom line.
          </p>
        </div>
      </div>

      {/* Third Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image for Small Screens */}
        <div
          className="block lg:hidden mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://cloudbookingsolutions.com/img/post-116.png"
            alt="About Us"
          />
        </div>

        {/* Features List */}
        <div className="mt-5 lg:mt-12">
        

          {/* Feature Items */}
          {[
            {
              icon: <FaPen />,
              title: "On-page SEO",
              text: " On-page SEO focuses on optimizing individual web pages to rank higher in search engine results pages and drive organic traffic. It includes optimizing content, titles, meta descriptions, header tags, internal linking, and other on-page elements to make them more search engine friendly.",
              delay: 400,
            },
            {
              icon: <FaCheck />,
              title: "Off-page SEO",
              text: " Off-page SEO refers to the activities that are done outside of your website to improve its search engine ranking. This includes building high-quality backlinks from other reputable websites, social media marketing, influencer marketing, and other forms of online marketing.",
              delay: 500,
            },
            {
              icon: <FaStar />,
              title: "Technical SEO",
              text: "Technical SEO refers to the technical aspects of website optimization that affect search engine ranking. It includes website speed optimization, mobile responsiveness, website security, crawlability, and other technical factors that affect website performance and user experience.",
              delay: 600,
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
            src="https://cloudbookingsolutions.com/img/post-116.png"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
