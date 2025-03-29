"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Link } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null); // Store timeout ID for closing dropdown

  // Function to open dropdown immediately
  const openDropdown = (index) => {
    if (timeoutId) clearTimeout(timeoutId); // Clear any existing timeout
    setDropdownOpen(index);
  };

  // Function to close dropdown after delay
  const closeDropdown = () => {
    const id = setTimeout(() => {
      setDropdownOpen(null);
    }, 500); // Delay before closing
    setTimeoutId(id);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 py-1 font-serif">
      <div className="mx-auto px-4 sm:px-6 lg:px-3 xl:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center" >
          <a href="/">
    <img
      src="https://cloudbookingsolutions.com/img/cloudlogo-removebg-preview.png"
      alt="Logo"
      className="h-16 w-auto cursor-pointer"
    />
  </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 lg:space-x-4 xl:space-x-6">
            {[
              { label: "Home", link: "/" },
              { label: "About", link: "/About" },
              {
                label: "Founder",
                link: "#",
                dropdown: [
                  { label: "CEO", link: "/Founder/ceo" },
                  { label: "MD", link: "/Founder/md" },
                ],
              },
              {
                label: "Projects & Industries",
                link: "#",
                dropdown: [
                  { label: "Projects", link: "/projects/it" },
                  { label: "Industries", link: "/projects/healthcare" },
                ],
              },
              {
                label: "Services",
                link: "#",
                dropdown: [
                  { label: "Website Devlopment", link: "/services/consulting" },
                  {
                    label: "Google My Business Profile Handling",
                    link: "/services/development",
                  },
                  {
                    label: "Search Engine optimization",
                    link: "/services/development",
                  },
                  {
                    label: "Software & Web Application Devlopment",
                    link: "/services/development",
                  },
                  {
                    label: "Ecommerce Services",
                    link: "/services/development",
                  },
                  { label: "Digital Marketing", link: "/services/development" },
                  {
                    label: "Telecalling Services",
                    link: "/services/development",
                  },
                  {
                    label: "Other Marketing Services",
                    link: "/services/development",
                  },
                ],
              },
              {
                label: "Life@Cloud",
                link: "#",
                dropdown: [
                  { label: "Photo Gallery", link: "/lifeatcloud/culture" },
                  { label: "Video Gallery", link: "/lifeatcloud/events" },
                  {
                    label: "Event And Celebration",
                    link: "/lifeatcloud/events",
                  },
                ],
              },
              {
                label: "Career Solutions",
                link: "#",
                dropdown: [
                  { label: "Cloud Learning", link: "/career/jobs" },
                  { label: "Blogs", link: "/career/internships" },
                  { label: "Career", link: "/career/internships" },
                ],
              },
              { label: "Contact Us", link: "/contact" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => openDropdown(index)} // Open dropdown
                onMouseLeave={closeDropdown} // Close dropdown after delay
              >
                <a
                  href={item.link}
                  className="text-blue-900 hover:text-blue-600 font-medium transition duration-300 flex items-center"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && dropdownOpen === index && (
                  <div className="absolute left-0 mt-4 w-auto min-w-40 max-w-xs bg-white shadow-lg rounded-md whitespace-nowrap">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.link}
                        className="block px-4 py-2 text-blue-900 hover:bg-blue-100"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}

          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-blue-200">
          <div className="px-4 py-2 space-y-2">
            {[
              { label: "Home", link: "/" },
              { label: "About", link: "/About" },
              {
                label: "Founder",
                link: "#",
                dropdown: [
                  { label: "CEO", link: "/Founder/ceo" },
                  { label: "MD", link: "/Founder/md" },
                ],
              },
              {
                label: "Projects & Industries",
                link: "#",
                dropdown: [
                  { label: "Projects", link: "/projects/it" },
                  { label: "Industries", link: "/projects/healthcare" },
                ],
              },
              {
                label: "Services",
                link: "#",
                dropdown: [
                  { label: "Website Devlopment", link: "/services/consulting" },
                  {
                    label: "Google My Business Profile Handling",
                    link: "/services/development",
                  },
                  {
                    label: "Search Engine optimization",
                    link: "/services/development",
                  },
                  {
                    label: "Software & Web Application Devlopment",
                    link: "/services/development",
                  },
                  {
                    label: "Ecommerce Services",
                    link: "/services/development",
                  },
                  { label: "Digital Marketing", link: "/services/development" },
                  {
                    label: "Telecalling Services",
                    link: "/services/development",
                  },
                  {
                    label: "Other Marketing Services",
                    link: "/services/development",
                  },
                ],
              },
              {
                label: "Life@Cloud",
                link: "#",
                dropdown: [
                  { label: "Photo Gallery", link: "/lifeatcloud/culture" },
                  { label: "Video Gallery", link: "/lifeatcloud/events" },
                  {
                    label: "Event And Celebration",
                    link: "/lifeatcloud/events",
                  },
                ],
              },
              {
                label: "Career Solutions",
                link: "#",
                dropdown: [
                  { label: "Cloud Learning", link: "/career/jobs" },
                  { label: "Blogs", link: "/career/internships" },
                  { label: "Career", link: "/career/internships" },
                ],
              },
              { label: "Contact Us", link: "/contact" },
            ].map((item, index) => (
              <div key={item.label}>
                <button
                  onClick={() => setDropdownOpen(index)}
                  className="flex justify-between w-full text-left text-blue-900 font-medium py-2"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={16} />}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && dropdownOpen === index && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.link}
                        className="block text-blue-900 hover:text-blue-600 py-1"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
