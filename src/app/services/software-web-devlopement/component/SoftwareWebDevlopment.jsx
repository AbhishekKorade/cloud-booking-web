"use client";
import React from "react";
import { FaGears } from "react-icons/fa6"; 
import { FaMobile } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const SoftwareWebDevlopment = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-5">
      {/* Title & Subtitle - Fade Up */}
      <h5
        className="text-4xl text-blue-900 text-center font-bold"
        data-aos="fade-up"
      >
      Software & Web Application Development
      </h5>
      <p
        className="italic text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
       Transforming Ideas into Seamless Digital Solutions
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
            src="https://cloudbookingsolutions.com/img/Improve-an-Existing-Product-.svg"
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
         
          As one of India's reputed product development service companies and a well-known mobile application development company in Pune, we create applications and tools that are robust and scalable using the latest web technologies that are specifically tailored to your needs.
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          
         
        Due to our expertise as a mobile app development company in Pune, our developed apps are efficient, cost-effective, scalable and easily accessible. Our mobile app developers are proficient in creating models that fit your business perfectly.
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          We also possess experts in <span className=" font-bold">android software development and iPhone app development. </span> These factors make Cloud Booking Solutions a top mobile app development company in Pune .We Are Expert in <span className=" font-bold"> Customised Software Development</span>
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          The veteran experts of our product development and cloud application development services squad develop smooth and seamless applications that enable you to make informed business decisions through data-driven systems and enhance consumer engagement, thereby contributing to your company's growth.
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
            src="https://cloudbookingsolutions.com/img/Improve-an-Existing-Product-.svg"
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
            src="https://cloudbookingsolutions.com/img/pwa.svg"
            alt="Cloud Booking"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          
         
          Cloud Booking Software Solutions <span className=" font-bold">Software & Web App Development </span> standard and quality are what you would expect from some of the top app development companies. Our product design and development service team is seasoned in designing excellent digital web applications and mobile applications, making us an expert app development agency.
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
         
          You can expect the complete spectrum of application design, development & maintenance services from our experts. All this and our undisputed Software & Web App Development have resulted in enhancing our reputation as the best app development company in Pune.
            

          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          Our expertise is also a testament to our status as the premier iPhone app development company and equally proficient android app development company in Pune.
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
            src="https://cloudbookingsolutions.com/img/Build-a-New-Product2.svg"
            alt="About Us"
          />
        </div>

        {/* Features List */}
        <div className="mt-5 lg:mt-12">
        

          {/* Feature Items */}
          {[
            {
              icon: <FaGears />,
              title: "Custom Software Development",
              text: " Building tailor-made software solutions to meet specific business requirements.",
              delay: 400,
            },
            {
              icon: <FaMobile />,
              title: "Enterprise Application Development",
              text: " Designing and developing large-scale software solutions to automate and streamline business processes within organizations.",
              delay: 500,
            },
            {
              icon: <FaStar />,
              title: "CMS Development   ",
              text: " Building Content Management Systems (CMS) that allow users to create, manage, and publish digital content on websites.",
              delay: 600,
            },
            {
                icon: <FaMagic />,
                title: "ERP Development",
                text: "ERP Development refers to the process of designing, building, and implementing an Enterprise Resource Planning (ERP) system. An ERP system is a comprehensive software solution that integrates various business functions and processes within an organization.  ",
                delay: 700,
              },
              {
                icon: <FaUserCircle />,
                title: "CRM Development",
                text: "CRM Development refers to the process of designing, building, and implementing a Customer Relationship Management (CRM) system. A CRM system is a software solution that helps businesses manage interactions and relationships with their customers, track sales activities, and streamline customer-centric processes.",
                delay: 800,
              },
              {
                icon: <FaHandsHelping  />,
                title: "HRMS Development",
                text: "HRMS development refers to the process of designing, building, and implementing a Human Resource Management System (HRMS). An HRMS is a software solution that combines various HR functions and processes into a centralized system, streamlining HR operations and facilitating effective management of employee data, payroll, benefits, recruitment, performance evaluations, and more.",
                delay: 900,
              },
              {
                icon: <FaCloud  />,
                title: "Cloud Application Development",
                text: " Creating applications that leverage cloud technologies for scalability, reliability, and accessibility.",
                delay: 1000,
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
                <h5 className="font-bold text-black text-xl leading-8">
                  {item.title}
                </h5>
                <p className="font-semibold text-[14px] sm:text-[15px] text-black">
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
            src="https://cloudbookingsolutions.com/img/Build-a-New-Product2.svg"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareWebDevlopment;
