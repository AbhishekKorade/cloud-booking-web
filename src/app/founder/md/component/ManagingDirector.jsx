"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ManagingDirector = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-10 mx-4 md:mx-8 lg:mx-12 relative">
      {/* Title & Subtitle */}
      <h4 className="text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        Meet Our Dynamic Managing Director
      </h4>
      <p className="italic text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
        Leading with Vision, Empowering with Purpose.
      </p>

      {/* Managing Director Section */}
      <div className="relative mt-10 flex flex-col lg:flex-row items-center gap-6">
        {/* MD Image */}
        <div className="w-full lg:w-1/3 flex justify-center" data-aos="fade-right">
          <img
            src="https://cloudbookingsolutions.com/img/md.jpg"
            alt="Managing Director"
            className="w-full h-auto xl:max-h-[450px] object-cover rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div
          className="w-full lg:w-2/3 bg-white p-6 text-gray-800 rounded-lg "
          data-aos="fade-left"
        >
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-blue-900">Priya Deshmukh</span> is the dynamic Managing Director of Cloud Booking Software Solutions, where she oversees the company's global operations and drives strategic initiatives. 
            <span className="font-bold"> With a robust background in software development and project management,</span> she has been instrumental in streamlining processes and enhancing productivity across the organization.
          </p>

          <p className="mt-3">
            She joined Cloud Booking Software Solutions <span className="font-bold">4 years ago</span> as a senior software engineer and quickly rose through the ranks due to 
            <span className="font-bold"> her exceptional technical acumen and leadership skills.</span> 
            As MD, she has <span className="font-bold"> spearheaded numerous successful projects,</span> including the launch of the company’s flagship product, which has revolutionized the way businesses manage their operations.
          </p>

          <p className="mt-3 font-bold">
            Her dedication to fostering a culture of innovation and collaboration has been pivotal in attracting top talent and maintaining a high-performance team.
          </p>

          <p className="mt-3">
            Her leadership has not only driven the company’s growth but also ensured the delivery of high-quality solutions to clients worldwide.
          </p>

          <p className="mt-3">
            She holds <span className="font-bold">a Bachelor's degree in Information Technology.</span> Outside of work, <span className="font-bold">she is passionate about advocating for women in tech.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagingDirector;
