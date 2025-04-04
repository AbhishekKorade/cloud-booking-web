"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

const jobListings = [
  {
    id: 1,
    title: "Telecaller",
    description:
      "As a telecaller, your job role revolves around making outgoing phone calls to potential or existing customers on behalf of a company or organization. The primary objective is to promote products, services, or gather information. The specific responsibilities of a telecaller may vary depending on the company's industry and the nature of the calls, but some common aspects of the job include:",
    responsibilities: [
      "Customer Service",
      "Professionalism",
      "Compliance",
      "Sales and Lead Generation",
      "Data Entry and Documentation",
      "Handling Objections",
    ],
  },
  {
    id: 2,
    title: "Marketing Executive",
    description:
      "Marketing executives are responsible for planning, executing, and monitoring marketing campaigns and strategies to promote products, services, or the brand itself. Their role involves a wide range of activities to attract and retain customers and drive business growth. The specific responsibilities of a Marketing Executive may vary based on the company's size, industry, and marketing objectives, but some common tasks include:",
    responsibilities: [
      "Market Research",
      "Digital Marketing",
      "Lead Generation",
      "Content Creation",
      "Customer Relationship Management (CRM)",
      "Competitor Analysis",
      "Public Relations (PR)",
    ],
  },
  {
    id: 3,
    title: "Sales Manager",
    description:
      "The role of a Sales Manager is essential for driving revenue and achieving sales targets within a company or organization. Sales Managers are responsible for overseeing and leading a team of sales representatives or executives to ensure the successful implementation of sales strategies. Their primary focus is on increasing sales, building strong customer relationships, and maximizing profits. The specific responsibilities of a Sales Manager may vary depending on the company's industry, size, and structure, but some common tasks and duties include:",
    responsibilities: [
      "Setting Sales Targets",
      "Sales Forecasting",
      "Negotiation",
      "Monitoring Sales Performance",
      "Sales Meetings and Reporting",
      "Sales Performance Analysis",
    ],
  },
  {
    id: 4,
    title: "Fullstack Developer",
    description:
      "The role of a Fullstack Developer is to work on both the front-end and back-end of web applications or software projects. Fullstack Developers are proficient in a combination of programming languages, frameworks, and technologies that allow them to handle various aspects of development. They play a crucial role in designing, building, and maintaining web applications to ensure they function seamlessly from end to end. The specific responsibilities of a Fullstack Developer may vary depending on the company's needs and the project requirements, but some common tasks and skills associated with this role include:",
    responsibilities: [
      "Front-end Development",
      "Back-end Development",
      "Testing and Debugging",
      "Security",
      "Continuous Learning",
      "Problem-Solving",
    ],
  },
  {
    id: 5,
    title: "Front-end Development",
    description:
      "The role of a Front-end Developer is to create the user interface and user experience (UI/UX) of web applications or websites. Front-end developers focus on the visual aspects and interactive elements that users interact with directly. They use a combination of programming languages, frameworks, and tools to build responsive, attractive, and user-friendly interfaces. The specific responsibilities of a Front-end Developer may vary depending on the company's requirements and the complexity of the projects, but some common tasks and skills associated with this role include:",
    responsibilities: [
      "Web Development",
      "UI/UX Design Implementation",
      "Responsive Design",
      "Performance Optimization",
      "Continuous Learning",
      "Performance Monitoring",
    ],
  },
  {
    id: 6,
    title: "Back-end Developer",
    description:
      "The role of a Back-end Developer is to build and maintain the server-side logic and databases that power web applications or software systems. Unlike front-end developers who focus on the user interface and user experience, back-end developers work behind the scenes to handle data processing, server management, and application functionality. They are responsible for creating the foundation that enables the front-end to communicate with the server, store and retrieve data, and perform complex operations. The specific responsibilities of a Back-end Developer may vary depending on the company's needs and the complexity of the projects, but some common tasks and skills associated with this role include:",
    responsibilities: [
      "Server-side Development",
      "Database Management",
      "Server Deployment",
      "Testing and Debugging",
      "Security Compliance",
      "Monitoring and Logging",
    ],
  },
  {
    id: 7,
    title: "Internship",
    description:
      "An internship job role typically refers to a temporary position within an organization where students or recent graduates gain practical work experience in a specific field or industry. Internships serve as a valuable opportunity for individuals to apply their theoretical knowledge in a real-world work setting and develop essential skills that will be beneficial for their future careers. The specific responsibilities and tasks of an internship job role can vary widely depending on the company, industry, and the intern's area of focus. However, some common aspects of an internship job role include:",
    responsibilities: [
      "Learning and Training",
      "Assisting with Projects",
      "Learning Company Culture",
      "Skill Development",
      "Attending Meetings and Training Sessions",
      "Completing Assignments",
    ],
  },
];

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-8 px-6 md:px-12 lg:px-16">
      {/* Title & Subtitle */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-900" data-aos="fade-up">
          Join Our Team
        </h2>
        <p className="italic text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="200">
          Find the perfect role to grow your career.
        </p>
      </div>

      {/* Job Listings */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobListings.map((job, index) => (
          <div
            key={job.id}
            className="bg-gray-50 border border-gray-200 shadow-lg rounded-xl p-4 transition-all transform hover:-translate-y-2 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Job Title */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-900">{job.title}</h3>
              <button className="bg-blue-600 text-sm text-white px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                Apply Now <FaArrowRight />
              </button>
            </div>

            {/* Job Description */}
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">{job.description}</p>

            {/* Responsibilities */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-800">Key Skills:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {job.responsibilities.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-200 text-blue-900 text-xs px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
