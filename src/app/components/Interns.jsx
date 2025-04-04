"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
    { id: 1, name: "", role: "", img: "https://cloudbookingsolutions.com/img/1.jpeg" },
    { id: 2, name: "Manasi wadekar", role: "Intern", img: "https://cloudbookingsolutions.com/img/2.jpeg" },
    { id: 3, name: "Pratiksha Arbuj", role: "Intern", img: "https://cloudbookingsolutions.com/img/3.jpeg" },
    { id: 4, name: "Aruna Kamble", role: "Intern", img: "https://cloudbookingsolutions.com/img/IMG_20230727_115109.jpg" },
   
  ];
  

const Interns = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-5 py-10 bg-blue-50">
      {/* Title & Subtitle - Fade Up */}
      <h5 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
      Intern's
      </h5>
      <p className="italic text-sm md:text-md text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
      Unlock Your Potential: Embrace the Journey as an Intern
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {teamMembers.map((member,i) => (
       <div className="relative group lg:h-60 lg:w-60 xl:w-72 xl:h-72 mx-auto" key={i}>
       {/* Team Member Image */}
       <img 
         src={member.img} 
         alt={member.name} 
         className="w-full h-full object-cover rounded-full border-6 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
         data-aos="zoom-in"
       />
     
       {/* Overlay with Name & Role */}
       <div className="absolute inset-0 w-full h-full rounded-full bg-blue-900/70 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
         <h4 className="text-white text-xl font-semibold text-center">{member.name}</h4>
         <p className="text-white text-sm text-center">{member.role}</p>
       </div>
     </div>
     
        ))}
      </div>
    </div>
  );
};

export default Interns;
