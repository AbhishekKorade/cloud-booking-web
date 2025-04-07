"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Telecalling = () => {
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
        Telecalling Support
      </h5>
      <p
        className="italic text-sm md:text-md text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Connecting Customers, Amplifying Results: Telecalling Support at Its
        Finest
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
            src="https://cloudbookingsolutions.com/img/2182513.webp"
            alt="Cloud Booking"
          />
        </div>
        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <h3 className="text-xl lg:text-2xl font-bold">
            Chat Support And Complete Call Centre Solutions
          </h3>
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            With our outstanding chat support services and complete call center
            solutions, you can increase your lead conversion. Our professional
            agents use their knowledge to provide one-on-one engagement with
            your potential clients and answer their questions, therefore
            creating trust.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Being one of the finest and perhaps most{" "}
            <span className=" font-bold"> telecalling service providers </span>,
            we will surely help you achieve your objectives through our
            comprehensive package of{" "}
            <span className=" font-bold">call center solutions </span>.
            Moreover, through our team of customer behaviour specialists, we
            will provide you with unrivalled{" "}
            <span className="font-bold">chat support services</span> and ,{" "}
            <span className=" font-bold"> call centre solutions </span>in India.
          </p>
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Furthermore, because they are designed with the most recent
            technology, the software we utilise for data input of call
            information and recording purposes are simple to use and browse.
            With years of experience as the leading{" "}
            <span className="font-bold">voice call service provider</span> and{" "}
            <span className="font-bold">call center service provider</span> in
            India, our skilled teams understand precisely what you want.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Telecalling;
