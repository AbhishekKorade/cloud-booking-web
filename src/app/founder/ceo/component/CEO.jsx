"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CEO = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-10 mx-4 md:mx-8 lg:mx-12 relative">
      {/* Title & Subtitle */}
      <h4 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        Meet Our Visionary Leader
      </h4>
      <p className="italic text-sm md:text-md text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
        Guiding Us Toward a Brighter Tomorrow
      </p>

      {/* CEO Section */}
      <div className="relative mt-3 flex flex-col lg:flex-row items-center gap-0">
          {/* CEO Image */}
          <div className="w-full lg:w-1/2 flex lg:hidden justify-center" data-aos="fade-left">
          <img
            src="https://cloudbookingsolutions.com/img/ceo12.jpg"
            alt="CEO"
            className="w-full h-auto lg:h-[489px] object-cover rounded-tl-lg rounded-tr-lg shadow-lg"
          />
        </div>
        {/* Text Content */}
        <div
          className="w-full lg:w-1/2 bg-blue-900 bg-opacity-80 flex flex-col justify-center p-4 text-white lg:rounded-tl-lg rounded-br-lg lg:rounded-br-none rounded-bl-lg shadow-lg"
          data-aos="fade-right"
        >
          <p className="text-[17px] leading-relaxed">
            Shweta Kute is the driving force behind Cloud Booking Software Solutions, guiding the company as its CEO
            with unparalleled expertise and vision. Under her leadership, the company has become a leader in digital
            transformation, known for its innovative solutions and industry foresight.
          </p>
          <p className="mt-3 font-bold">With over 5 years of experience in the technology sector,</p>
          <p className="text-[17px] leading-relaxed">
            Shweta has a proven track record of driving growth and innovation. She has a unique ability to foresee
            industry trends and leverage emerging technologies to create groundbreaking solutions.
          </p>
          <p className="mt-3 font-bold">
            Her strategic vision and commitment to excellence have earned the company numerous accolades, including the
            prestigious Tech Excellence Award.
          </p>
          <p className="mt-3 font-bold">Shweta holds a BE in IT and is a sought-after speaker at industry conferences.</p>
          <p className="text-[17px] leading-relaxed">
            She is a respected thought leader, often sharing insights on digital transformation, leadership, and
            innovation.
          </p>
        </div>

        {/* CEO Image */}
        <div className="w-full lg:w-1/2 lg:flex justify-center hidden " data-aos="fade-left">
          <img
            src="https://cloudbookingsolutions.com/img/ceo12.jpg"
            alt="CEO"
            className="w-full h-auto lg:h-[489px] object-cover rounded-tr-lg rounded-br-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CEO;
