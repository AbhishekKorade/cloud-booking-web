"use client";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaCompressArrowsAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WebDevlopement = () => {
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
       Website Development
      </h5>
      <p
        className="italic text-sm md:text-md text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
       Building Engaging Digital Experiences for the Web
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
            src="https://cloudbookingsolutions.com/img/hero-image-5.svg"
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
          A professional and efficient business or a project owner like you always looks for a top-rated website design and development company.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          Cloud Booking Software Solutions a leading website development company in Pune that can create purposeful, timely, powerful, result-focused and measurable digital experiences for your website.


          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          To enhance your business's competitiveness, efficiency, and profitability. Something you can see for yourself and measure as well! As a reputed professional website development company in Pune, Cloud Booking Solutions offers result-driven web development services that assure guaranteed ROI to your business. 
          </p>

          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          As a <span className=" font-bold">professional web development company in Pune </span>, we guarantee custom web development assistance in our service packages with <span className=" font-bold">uncompromised affordability </span>, and for <span className=" font-bold"> one year no service charge applicable  , 24/7 support , and annual website Maintenance contract.</span>
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
            src="https://cloudbookingsolutions.com/img/hero-image-5.svg"
            alt="Cloud Booking"
          />
        </div>
      </div>

      {/* Second Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-20">
        {/* Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://cloudbookingsolutions.com/img/g_feature-web-development-3.svg"
            alt="Cloud Booking"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
           
          Cloud Booking Software Solutions team of experienced web developers and designers works closely with clients to understand their unique needs, target audience, and brand identity. We combine creativity, technical expertise, and industry best practices to deliver websites that not only look visually appealing but also offer seamless navigation, responsive design, and optimal performance across different devices and browsers.
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          
          From concept to completion, we follow a systematic approach to website development. This includes thorough planning, wireframing, prototyping, and iterative design processes to ensure that the final product meets and exceeds client expectations. <span className=" font-bold">We utilize the latest technologies and frameworks, such as HTML5, CSS3, JavaScript, and CMS platforms </span>, to build websites that are <span className=" font-bold">scalable ,secure</span>, and <span className="font-bold">easy to manage</span>
          </p>

        </div>
      </div>

      {/* Third Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-20">
        {/* Image for Small Screens */}
        <div
          className="block lg:hidden mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://cloudbookingsolutions.com/img/WebsiteDevelopment.png"
            alt="About Us"
          />
        </div>

        {/* Features List */}
        <div className="mt-5 lg:mt-0">
        

          {/* Feature Items */}
          {[
            {
              icon: <FaCode />,
              title: "Static Websites",
              text: " These are basic websites that consist of fixed content and are primarily informational. Static websites are typically built using HTML and CSS and do not require a content management system (CMS) for updating content.",
              delay: 400,
            },
            {
              icon: <FaComputer />,
              title: "Dynamic Websites",
              text: " Dynamic websites are more interactive and allow for dynamic content that can be updated or customized based on user input or other variables. They often rely on server-side technologies such as PHP, Ruby on Rails, or Python to generate dynamic content.",
              delay: 500,
            },
            {
              icon: <TbWorld />,
              title: "E-commerce Websites",
              text: "E-commerce websites are specifically designed for online selling and buying of products or services. They include features such as product listings, shopping carts, payment gateways, and order management systems. Common platforms for e-commerce development include Magento, Shopify, WooCommerce, and custom-built solutions.",
              delay: 600,
            },
            {
              icon: <FaCompressArrowsAlt />,
              title: "Responsive Websites",
              text: "With the increasing use of mobile devices, responsive web development has become crucial. Responsive websites adapt and optimize their layout and design based on the user's device screen size, ensuring a seamless user experience across desktops, tablets, and mobile devices.",
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
            src="https://cloudbookingsolutions.com/img/WebsiteDevelopment.png"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevlopement;
