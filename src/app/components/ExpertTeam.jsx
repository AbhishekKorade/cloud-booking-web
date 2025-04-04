"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
    { id: 1, name: "Shweta Kute", role: "Chief Executive Officer(CEO)", img: "https://cloudbookingsolutions.com/img/ceo.jpg" },
    { id: 2, name: "Priya Deshmukh", role: "Chief Technology Officer(CTO)", img: "https://cloudbookingsolutions.com/img/priya.jpg" },
    { id: 3, name: "Yogesh Chitte", role: "Chief Operating Officer(COO)", img: "https://cloudbookingsolutions.com/img/chitte.jpeg" },
    { id: 4, name: "Anup Dawale", role: "Project Manager", img: "https://cloudbookingsolutions.com/img/anup.jpg" },
    { id: 5, name: "", role: "", img: "https://cloudbookingsolutions.com/img/s.jpg" },
    { id: 6, name: "Bhagvan Varade", role: "Sales Manager", img: "https://cloudbookingsolutions.com/img/bagvan.jpeg" },
    { id: 7, name: "Pragati Khachane", role: "Digital Marketer", img: "https://cloudbookingsolutions.com/img/pragati.jpg" },
    { id: 8, name: "Rutuja Jadhav", role: "Sr.Frontend Developer", img: "https://cloudbookingsolutions.com/img/rutuja.jpg" },
    { id: 9, name: "", role: "", img: "https://cloudbookingsolutions.com/img/4.jpeg" },
    { id: 10, name: "Sakshi Nighute", role: "Jr.Full Stack Developer", img: "https://cloudbookingsolutions.com/img/sakshi.jpg" },
    { id: 11, name: "Priyanka Gaware", role: "Sr.Full Stack Developer", img: "https://cloudbookingsolutions.com/img/Priyanka%20.jpg" },
    { id: 12, name: "Kamlesh Khomane", role: "Jr.Full Stack Developer", img: "https://cloudbookingsolutions.com/img/kk.png" },
    { id: 13, name: "", role: "", img: "https://cloudbookingsolutions.com/img/akash%20copy.jpg" },
    { id: 14, name: "Sapna Gapat", role: "Full Stack Developer", img: "https://cloudbookingsolutions.com/img/gapat.jpg" },
    { id: 15, name: "Gitanjali Chavan", role: "Business Dev Executive(BDE)", img: "https://cloudbookingsolutions.com/img/gitanjali%20-%20Copy.jpg" },
    { id: 16, name: "Pournima Gavhale", role: "Sales Executive", img: "https://cloudbookingsolutions.com/img/pornima.jpg" },
    { id: 17, name: "", role: "", img: "https://cloudbookingsolutions.com/img/vaibhav.jpeg" },
    { id: 18, name: "Supriya Salve", role: "Help Desk", img: "https://cloudbookingsolutions.com/img/supriya11.jpg" },
  ];
  

const ExpertTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-5 ">
      {/* Title & Subtitle - Fade Up */}
      <h5 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        Expert Team
      </h5>
      <p className="italic text-sm md:text-md text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
        Driving Innovation Together
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

export default ExpertTeam;
