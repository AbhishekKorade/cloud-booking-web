"use client";
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const usefulLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/projects-industries/projects" },
    { name: "Industries", path: "/projects-industries/industries" },
    { name: "Cloud Learning", path: "/career-solution/cloud-learning" },
    { name: "Career", path: "/career-solution/career" },
    { name: "Blogs", path: "/career-solution/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaTwitter size={20} />, url: "https://twitter.com/software166852" },
    { icon: <FaFacebookF size={20} />, url: "https://www.facebook.com/people/Cloud-Booking-Software-Solutions-Pune/100075879862225/" },
    { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/cloudbookingsolutions/" },
    { icon: <FaYoutube size={20} />, url: "https://www.youtube.com/@cloudbookingsolutions5853/featured" },
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/cloud-booking-software-solutions-25422a234/" },
  ];

  return (
    <footer className="bg-blue-800 text-white py-10 mt-5">
      <div className=" mx-auto px-4 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center lg:text-left">
          
          {/* Left Section - Company Info */}
          <div>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className=" flex justify-center items-center w-full">
              <img src="https://cloudbookingsolutions.com/img/logo1.png" alt="Logo" className="h-24 w-44 object-contain" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-semibold uppercase leading-tight text-white">
                Cloud Booking Software Solutions
              </h4>
            </div>
            <p className="mt-3 text-white text-[15px] md:text-[16px] leading-relaxed">
              Cloud Booking Software Solutions is a provider of IT consulting and software development services.
              We specialize in web development, digital marketing, and customized solutions tailored to business needs.
            </p>
          </div>

          {/* Middle Section - Useful Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold uppercase text-white">Useful Links</h4>
            <ul className="mt-3 space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-white hover:text-gray-300 text-[15px] md:text-[16px]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h4 className="text-lg md:text-xl font-bold uppercase text-white">Contact Us</h4>
            <p className="mt-3 text-white text-[15px] md:text-[16px] leading-relaxed">
              Gate No: 02, D4 Building, Sakal Nagar, Aundh, Pune - 411007
            </p>
            <p className="text-white font-bold mt-2 text-[15px] md:text-[16px]">
              Phone 1: <span className="font-normal">+91 8692805267</span>
            </p>
            <p className="text-white font-bold text-[15px] md:text-[16px]">
              Phone 2: <span className="font-normal">+91 9860302372</span>
            </p>
            <p className="text-white font-bold text-[15px] md:text-[16px]">
              Email: <span className="font-normal">cloudbookingsolutions@gmail.com</span>
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 bg-white p-3 rounded-full transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-10 border-t border-blue-600 pt-6 text-[15px] md:text-[16px] text-white">
          <p>
            &copy; <span className="font-bold">Cloud Booking Software Solutions</span>. All Rights Reserved.
          </p>
          <p>Designed by Cloud Booking Software Solutions & Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
