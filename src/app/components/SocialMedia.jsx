"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com", bgColor: "bg-blue-600 hover:bg-blue-800" },
  { icon: <FaInstagram />, url: "https://instagram.com", bgColor: "bg-pink-500 hover:bg-pink-700" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com", bgColor: "bg-blue-700 hover:bg-blue-900" },
  { icon: <FaTwitter />, url: "https://twitter.com", bgColor: "bg-sky-500 hover:bg-sky-700" },
  { icon: <FaYoutube />, url: "https://youtube.com", bgColor: "bg-red-600 hover:bg-red-800" },
  { icon: <FaWhatsapp />, url: "https://wa.me/yourwhatsapplink", bgColor: "bg-green-500 hover:bg-green-700" },
  { icon: <FaPhoneAlt />, url: "tel:+918692805267", bgColor: "bg-blue-600 hover:bg-blue-800" }, // Changed Call Icon & BG Color
];

const SocialMediaIcons = () => {
  return (
   
    <div className="fixed right-1 bottom-2 flex flex-col space-y-3 z-50">
  {socialLinks.map((social, index) => (
    <a
      key={index}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 flex items-center justify-center text-white border border-white rounded-full shadow-md transition-all duration-300 transform hover:scale-110 hover:rotate-360 ${social.bgColor}`}
    >
      {social.icon}
    </a>
  ))}
</div>

  );
};

export default SocialMediaIcons;
