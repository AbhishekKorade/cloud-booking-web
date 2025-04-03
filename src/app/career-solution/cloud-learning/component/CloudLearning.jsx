"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CloudLearning = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const languagescourses = [
    {
      title: "C/C++ Language",
      subtitle:"",
      description:
        "C and C++ programming languages, widely used in systems programming, software development, embedded systems, and game development. This course builds a strong foundation in C/C++ programming.",
    },
    {
      title: "Core & Adv. JAVA",
      subtitle:"",
      description:
        "Master both Core and Advanced Java concepts, essential for web development, enterprise applications, and mobile apps. This course provides hands-on experience to build Java-based solutions.",
    },
    {
      title: "HTML & CSS Language",
      subtitle:"",
      description:
        "Learn to build and style web pages using HTML & CSS. This course covers the fundamentals of front-end development, equipping students with design and layout techniques.",
    },
    {
      title: "SQL",
      subtitle:" (Structured Query Language)",
      description:
        "Understand database management with SQL. This course covers fundamental querying techniques, data manipulation, and database design, preparing you for real-world data handling.",
    },
  ];

  const courses = [
    {
      title: "MS Office Course",
      description:
        "As an MS Office course, Cloud Learning role is to provide comprehensive training on Microsoft Office applications, a suite of productivity tools widely used in various professional settings. Microsoft Office includes applications such as Word, Excel, PowerPoint, Outlook, and more. Our course aims to equip students with the necessary skills to effectively use these applications for various tasks, enhancing their productivity and efficiency.",
    },
    {
      title: "Typing Course",
      description:
        "As a typing course, Cloud Learning role is to help students improve their typing skills, speed, and accuracy on a computer keyboard. Typing is an essential skill in the digital age, and Our course aims to make students proficient in touch typing, where they can type without looking at the keyboard.",
    },
    {
      title: "Data Entry Operating Course",
      description:
        "As a Data Entry Operating course, Cloud Learning role is to train individuals in the essential skills and techniques required to efficiently and accurately enter data into computer systems and databases. Data entry operators play a crucial role in various industries, ensuring that information is correctly recorded and organized for further analysis and decision-making.",
    },
    {
      title: "Website Development",
      description:
        "As a Website Development course, Cloud Learning role is to equip students with the knowledge and skills necessary to build fully functional and interactive websites. Website development involves working with various programming languages, frameworks, and technologies to create websites that meet specific design and functionality requirements. Our course aims to provide students with a comprehensive understanding of both front-end and back-end web development, enabling them to create dynamic and user-friendly websites.",
    },
  ];

  const Technologies = [
    {
      title: "SAP  ",
      subtitle:"(Systems, Applications, and Products)",
      description:"As a SAP (Systems, Applications, and Products) course, Cloud Learning role is to provide students with a comprehensive understanding of SAP software and its applications in business and enterprise settings. SAP is a leading provider of business software solutions used by organizations to manage various aspects of their operations, such as finance, human resources, supply chain, customer relationship management (CRM), and more. Our course aims to equip students with the skills and knowledge needed to implement, configure, and work with SAP systems effectively.",
    },
    {
      title: "Software Testing Course",
      subtitle:"",
      description:
        "As a Software Testing course, Cloud learning role is to train students in the principles, techniques, and methodologies of software testing. Software testing is a critical phase in the software development lifecycle, ensuring that the software meets quality standards, functions as intended, and is free from defects. Our course aims to equip students with the skills necessary to identify and report issues in software products effectively.",
    },
    {
      title: "Full-Stack Development",
      subtitle:"",
      description:
        "As a full-stack development course, Cloud Learning role is to provide students with a comprehensive understanding of both front-end and back-end web development, enabling them to build complete web applications from start to finish. Full-stack development involves working with both the client-side (front-end) and server-side (back-end) technologies, and Our course aims to equip students with the skills to be versatile and proficient in the entire web development process.",
    },
    {
      title: "Data Science & Analytics Course",
      subtitle:"",
      description:
        "As a Data Science & Analytics course, Cloud Learning role is to provide students with the knowledge and skills necessary to work with data effectively, extract valuable insights, and make data-driven decisions. Data science and analytics have become integral parts of various industries, and Our course aims to equip students with the tools and techniques needed to succeed in this data-driven world.",
    },
  ];

  const SpecialCourses = [
    {
      title: "Animation Course ",
      description:"As an Animation course, Cloud Learning role is to provide students with a comprehensive understanding of animation principles, techniques, and tools used in the creation of various forms of animation, including 2D animation, 3D animation, and visual effects (VFX). Our course aims to nurture students' creativity and storytelling abilities while equipping them with the technical skills required to bring characters, objects, and scenes to life through animation.",
    },
    {
      title: "Web Designing Course",
      description:
        "As a Web Designing course, Cloud Learning role is to equip students with the knowledge and skills necessary to design visually appealing, user-friendly, and functional websites. Web design is a crucial aspect of creating engaging online experiences, and Our course aims to teach students the principles, tools, and techniques required to craft effective web designs.",
    },
    {
      title: "Graphic Designing Course",
      description:
        "As a Graphic Designing course, Cloud Learning role is to provide students with the knowledge and skills necessary to create visually captivating and impactful designs across various media. Graphic design is a crucial discipline in the fields of advertising, marketing, branding, and digital media, and Our course aims to nurture students' creativity while teaching them the technical aspects of design tools and principles.",
    },
    {
      title: "WordPress Website Course",
      description:
        "As a WordPress Website course, Cloud Learning role is to provide students with the knowledge and skills necessary to create, customize, and manage websites using the WordPress platform. WordPress is one of the most popular content management systems (CMS) globally, and Our course aims to empower students to build functional and visually appealing websites without the need for extensive coding knowledge.",
    },
  ];

  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-5">
      {/* Title & Subtitle with AOS Fade Animation */}
      <h5 className="text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        Cloud Learning
      </h5>
      <p className="italic text-center text-gray-600" data-aos="fade-up" data-aos-delay="200">
        Discover, Learn, Grow: Knowledge Unleashed
      </p>

      <h5 className="text-4xl text-blue-900 mt-8 text-center font-bold" data-aos="fade-up" data-aos-delay="400">
        Language's Course
      </h5>

      {/* Course Cards with Zoom Animation */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {languagescourses.map((course, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 
            rounded-xl shadow-lg border border-blue-300/50 transition-transform 
            transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 
            before:absolute before:-top-4 before:left-4 before:w-full before:h-full 
            before:bg-blue-500/10 before:rounded-xl"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <h3 className="text-3xl font-semibold mb-2">{course.title}</h3>
            <p className="text-xl opacity-90">{course.subtitle}</p>
            <p className="text-sm opacity-90">{course.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">
      <h5 className="text-4xl text-blue-900 mt-8 text-center font-bold" data-aos="fade-up" data-aos-delay="400">
      Course's
      </h5>

      {/* Course Cards with Zoom Animation */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 
            rounded-xl shadow-lg border border-blue-300/50 transition-transform 
            transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 
            before:absolute before:-top-4 before:left-4 before:w-full before:h-full 
            before:bg-blue-500/10 before:rounded-xl"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <h3 className="text-3xl font-semibold mb-2">{course.title}</h3>
            <p className="text-sm opacity-90">{course.description}</p>
          </div>
        ))}
      </div>
      </div>

      <div className="mt-5">
      <h5 className="text-4xl text-blue-900 mt-8 text-center font-bold" data-aos="fade-up" data-aos-delay="400">
      Technologies
      </h5>

      {/* Course Cards with Zoom Animation */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {Technologies.map((course, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 
            rounded-xl shadow-lg border border-blue-300/50 transition-transform 
            transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 
            before:absolute before:-top-4 before:left-4 before:w-full before:h-full 
            before:bg-blue-500/10 before:rounded-xl"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <h3 className="text-3xl font-semibold mb-2">{course.title}</h3>
            <p className="text-xl opacity-90">{course.subtitle}</p>
            <p className="text-sm opacity-90">{course.description}</p>
          </div>
        ))}
      </div>
      </div>

      <div className="mt-5">
      <h5 className="text-4xl text-blue-900 mt-8 text-center font-bold" data-aos="fade-up" data-aos-delay="400">
      Special Courses
      </h5>

      {/* Course Cards with Zoom Animation */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {SpecialCourses.map((course, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 
            rounded-xl shadow-lg border border-blue-300/50 transition-transform 
            transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 
            before:absolute before:-top-4 before:left-4 before:w-full before:h-full 
            before:bg-blue-500/10 before:rounded-xl"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <h3 className="text-3xl font-semibold mb-2">{course.title}</h3>
            <p className="text-sm opacity-90">{course.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default CloudLearning;
