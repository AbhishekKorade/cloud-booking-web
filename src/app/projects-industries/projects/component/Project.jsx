"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
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
    { id: 9, name: "Chetak Tours & Travels", link: "", image: "https://chetaktoursandtravels.in/", image: "https://cloudbookingsolutions.com/img/project/new/chetak.jpg" },
    { id: 10, name: "Anushka Caterers", link: "https://digi-cloud-menu.click/anushkacaterers/", image: "https://cloudbookingsolutions.com/img/project/new/anushka.jpg" },
    { id: 11, name: "Aryan Photography", link: "https://digi-cloud-menu.click/Aryan%20Photography/", image: "https://cloudbookingsolutions.com/img/project/new/aryan.jpg" },
    { id: 12, name: "Barbe Que ", link: "https://barbequepune.com/", image: "https://cloudbookingsolutions.com/img/project/new/barbeque.jpg" },
    { id: 13, name: "Chhatrpati Caterers", link: "https://chhatrapaticaterers.in/", image: "https://cloudbookingsolutions.com/img/project/new/chhtrapati.jpg" },
    { id: 14, name: "Ekveera Caterers", link: "https://ekveeracaterers.com/", image: "https://cloudbookingsolutions.com/img/project/new/ekveera.jpg" },
    { id: 15, name: "Garg Polymers", link: "https://gargpolymers.com/", image: "https://cloudbookingsolutions.com/img/project/new/gargpoly.jpg" },
    { id: 16, name: "GS Furniture", link: "https://gsfurniturespune.in/", image: "https://cloudbookingsolutions.com/img/project/new/gsf.jpg" },
    { id: 17, name: "Kanhaiya Caterers", link: "https://digi-cloud-menu.click/kanhaiyacaterers/", image: "https://cloudbookingsolutions.com/img/project/new/kanhaiya.jpg" },
    { id: 18, name: "Karushna Photography", link: "https://digi-cloud-menu.click/Krushna%20Bharti%20Photography/", image: "https://cloudbookingsolutions.com/img/project/new/krushna.jpg" },
    { id: 19, name: "Kulswamini Caterers", link: "https://digi-cloud-menu.click/kulswaminicaterer/", image: "https://cloudbookingsolutions.com/img/project/new/kulswamini.jpg" },
    { id: 20, name: "Lab-Serv", link: "https://www.labserv.com.au/", image: "https://cloudbookingsolutions.com/img/project/new/labserv.jpg" },
    { id: 21, name: "Lab-Serv India", link: "https://www.labservindia.com/cgi-sys/suspendedpage.cgi", image: "https://cloudbookingsolutions.com/img/project/new/labservindia.jpg" },
    { id: 22, name: "Mahajan-Abndhu Caterers", link: "https://digi-cloud-menu.click/MahajanBandhuCatering/", image: "https://cloudbookingsolutions.com/img/project/new/mahajan.jpg" },
    { id: 23, name: "Mahalakshmi Caterers", link: "https://digi-cloud-menu.click/MahalaxmiCaterers/", image: "https://cloudbookingsolutions.com/img/project/new/mahalaxmi.jpg" },
    { id: 24, name: "Mahesh Pest-Control", link: "https://maheshpestcontrol.in/", image: "https://cloudbookingsolutions.com/img/project/new/maheshpest.jpg" },
    { id: 25, name: "Mangl-Murti Events", link: "https://digi-cloud-menu.click/mangalmurtievent/", image: "https://cloudbookingsolutions.com/img/project/new/mangl.jpg" },
    { id: 26, name: "Mauli Events", link: "https://digi-cloud-menu.click/maulievent/", image: "https://cloudbookingsolutions.com/img/project/new/mauli.jpg" },
    { id: 27, name: "Mithi-Mithas", link: "https://mithimithas.online/", image: "https://cloudbookingsolutions.com/img/project/new/mithi.jpg" },
    { id: 28, name: "New Shibhakt Caterers", link: "https://digi-cloud-menu.click/newshivbhakt/", image: "https://cloudbookingsolutions.com/img/project/new/newshivbhakt.jpg" },
    { id: 29, name: "Nutritionist", link: "https://priyankachavan.com/", image: "https://cloudbookingsolutions.com/img/project/new/priyanka.jpg" },
    { id: 30, name: "Raj Tours & Travels ", link: "https://www.rajtoursandtravelscarrental.in/", image: "https://cloudbookingsolutions.com/img/project/new/raj.jpg" },
    { id: 31, name: "Saee Developers", link: "https://saeedevloper.online/", image: "https://cloudbookingsolutions.com/img/project/new/saeedevlop.jpg" },
    { id: 32, name: "Sai-Malhar Caterers", link: "https://saimalharcaterers.com/", image: "https://cloudbookingsolutions.com/img/project/new/saimalhar.jpg" },
    { id: 33, name: "Sairaj Caterers", link: "https://sairajcaterers.com/", image: "https://cloudbookingsolutions.com/img/project/new/sairaj.jpg" },
    { id: 34, name: "Sai-shraddha Caterers", link: "https://saishraddhacaterers.in/", image: "https://cloudbookingsolutions.com/img/project/new/saishraddha.jpg" },
    { id: 35, name: "Sai-siddhi Caterers", link: "https://saisiddhicaterers.com/", image: "https://cloudbookingsolutions.com/img/project/new/saisiddhi.jpg" },
    { id: 36, name: "Sandip Caterer", link: "https://sandipcaterer.com/", image: "https://cloudbookingsolutions.com/img/project/new/sandip.jpg" },
    { id: 37, name: "Shiv-Shambho Caterers", link: "https://digi-cloud-menu.click/Shivshambho%20caterers/", image: "https://cloudbookingsolutions.com/img/project/new/shivshambho.jpg" },
    { id: 38, name: "Shiv-Tej Caterers", link: "https://digi-cloud-menu.click/shivtej/", image: "https://cloudbookingsolutions.com/img/project/new/shivtej.jpg" },
    { id: 39, name: "Shree Caterers", link: "https://digi-cloud-menu.click/shreecaterers/", image: "https://cloudbookingsolutions.com/img/project/new/shreecat.jpg" },
    { id: 40, name: "Shree Classes", link: "https://shreeclasses.online/", image: "https://cloudbookingsolutions.com/img/project/new/shreeclass.jpg" },
    { id: 41, name: "Shree-Nath Caterers", link: "https://shreenathcaterers.com/", image: "https://cloudbookingsolutions.com/img/project/new/shreenath.jpg" },
    { id: 42, name: "Shree Travels", link: "https://shreetravels.in/", image: "https://cloudbookingsolutions.com/img/project/new/shreetravels.jpg" },
    { id: 43, name: "Shree-Sai Travels", link: "https://shrisaitravels.com/", image: "https://cloudbookingsolutions.com/img/project/new/shrisaitravels.jpg" },
    { id: 44, name: "Shubham Caterers", link: "https://digi-cloud-menu.click/shubham%20caterers/", image: "https://cloudbookingsolutions.com/img/project/new/shubham.jpg" },
    { id: 45, name: "Swami-Samarth Caterers", link: "https://digi-cloud-menu.click/Swami_Samarth_Caterers/", image: "https://cloudbookingsolutions.com/img/project/new/swami.jpg" },
    { id: 46, name: "Swaraj Caterers", link: "https://digi-cloud-menu.click/SwarajCaterers/", image: "https://cloudbookingsolutions.com/img/project/new/swaraj.jpg" },
    { id: 47, name: "Interior Designer", link: "https://theiida.com/", image: "https://cloudbookingsolutions.com/img/project/new/theiida.jpg" },
    { id: 48, name: "Vinod caterers", link: "https://digi-cloud-menu.click/VinodCeaters/", image: "https://cloudbookingsolutions.com/img/project/new/vinod.jpg" },
  ];

  return (
    <div className="mt-4 mx-4 md:mx-8 lg:mx-12">
      <h4 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
      Our Distinctive
      </h4>
      <p className="italic text-sm md:text-md text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
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

export default Project;
