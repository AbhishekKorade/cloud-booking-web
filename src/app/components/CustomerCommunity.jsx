"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const customers = [
  { id: 1, img: "https://cloudbookingsolutions.com/img/clients/12.jpg" },
  { id: 2, img: "https://cloudbookingsolutions.com/img/clients/2.jpg" },
  { id: 3, img: "https://cloudbookingsolutions.com/img/clients/3.jpg" },
  { id: 4, img: "https://cloudbookingsolutions.com/img/clients/4.jpg" },
  { id: 5, img: "https://cloudbookingsolutions.com/img/clients/6.jpg" },
  { id: 6, img: "https://cloudbookingsolutions.com/img/clients/10.jpg" },
  { id: 7, img: "https://cloudbookingsolutions.com/img/clients/1.jpg" },
  { id: 8, img: "https://cloudbookingsolutions.com/img/clients/11.jpg" },
  { id: 9, img: "https://cloudbookingsolutions.com/img/clients/13.jpg" },
  { id: 10, img: "https://cloudbookingsolutions.com/img/clients/14.jpg" },
  { id: 11, img: "https://cloudbookingsolutions.com/img/clients/16.jpg" },
  { id: 12, img: "https://cloudbookingsolutions.com/img/clients/17.jpg" },
];

const CustomerCommunity = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-10 py-10 bg-blue-50">
      {/* Title & Subtitle - Fade Up */}
      <h5 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        Customer Community
      </h5>
      <p className="italic text-sm md:text-md text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
        Transforming ideas into Digital Success
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {customers.map((customer) => (
          <div 
            key={customer.id} 
            className="bg-white p-4 shadow-lg rounded-lg flex justify-center items-center transition-transform duration-300 transform " 
            data-aos="zoom-in"
          >
            <img src={customer.img} alt="Customer Logo" className="w-32 h-32 object-contain transition-transform duration-300 hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerCommunity;
