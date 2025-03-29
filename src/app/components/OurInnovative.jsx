"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const OurInnovative = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    { id: 1, name: "SPMM", link: "https://spmmtalegaon.in/", image: "https://cloudbookingsolutions.com/img/project/new/spmm.jpg" },
    { id: 2, name: "Aarvi Event", link: "https://digi-cloud-menu.click/Aarvievent/", image: "https://cloudbookingsolutions.com/img/project/new/aarvievent.jpg" },
    { id: 3, name: "Sai-Malhar Caterers", link: "https://saimalharcaterers.com/", image: "https://cloudbookingsolutions.com/img/project/new/saimalhar.jpg" },
    { id: 4, name: "Rudra Estate", link: "https://www.rudraestate.in/", image: "https://cloudbookingsolutions.com/img/project/new/rudra.jpg" },
    { id: 5, name: "Square 7 Architects", link: "https://square7architects.com/", image: "https://cloudbookingsolutions.com/img/project/new/squarre7.jpg" },
    { id: 6, name: "Bansode Civil Engineer", link: "https://bansodecivilengineer.co.in/", image: "https://cloudbookingsolutions.com/img/project/new/bansode.jpg" },
    { id: 7, name: "JJ Event", link: "https://jjevent.co.in/", image: "https://cloudbookingsolutions.com/img/project/new/jjevent.jpg" },
    { id: 8, name: "APure Joy", link: "https://apurejoy.com/", image: "https://cloudbookingsolutions.com/img/project/new/apurejoy.jpg" },
    { id: 9, name: "Chetak Tours & Travels", link: "https://chetaktoursandtravels.in/", image: "https://cloudbookingsolutions.com/img/project/new/chetak.jpg" },
  ];

  return (
    <div className="mt-4 mx-4 md:mx-8 lg:mx-12">
      <h4 className="text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        Our Innovative
      </h4>
      <p className="italic text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
        Innovation Woven into Every Detail.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {projects.map((project, index) => (
          <a 
            key={project.id} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group rounded-lg overflow-hidden shadow-lg block"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Slight delay for each card
          >
            {/* Image */}
            <img src={project.image} alt={project.name} className="rounded-lg w-full h-full object-cover" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-3xl font-bold mb-2">{project.name}</h2>
              <div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center">
                <FaExternalLinkAlt className="text-white text-2xl" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurInnovative;
