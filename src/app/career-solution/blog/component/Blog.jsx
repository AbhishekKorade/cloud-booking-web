"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const blogs = [
    {
      title: "Navigating Success: The Crucial Role of Project Deadlines",
      description:
        "Introduction:In the fast-paced world of business and technology, project management plays a pivotal role in achieving organizational goals.",
      image: "https://cloudbookingsolutions.com/img/istock-847156808.jpg",
    },
    {
      title: "Understanding Bounce Rate: Unveiling Its Significance in Web Analytics",
      description:
        "In the world of digital marketing and website analytics, there's a metric that holds immense importance in gauging the effectiveness of your online presence - the bounce rate.",
      image: "https://cloudbookingsolutions.com/img/improve-bounce-rate-feature-image.webp",
    },
    {
        title: "The Significance of Web Design for Business Success",
        description:
          "Introduction:In today's digital age, having a strong online presence is vital for businesses to thrive.",
        image: "https://cloudbookingsolutions.com/img/Significance.jpeg",
      },
      {
        title: "The Importance of a Website for All Businesses",
        description:
          "IntroductionIn today's digital age, having a strong online presence is crucial for businesses of all sizes....",
        image: "https://cloudbookingsolutions.com/img/Website.webp",
      },
      {
        title: "The Essential Needs For Digital Marketing In Today's Buisness Landscape",
        description:
          "In today's fast-paced and technology-driven world, businesses of all sizes are realizing the increasing importance of digital marketing. With the majority of consumers spending a significant amount of time online, leveraging digital channels to reach and engage with target audiences has become essential",
        image: "https://cloudbookingsolutions.com/img/Digital.webp",
      },
      {
        title: "The Power of Branding: Why It's Crucial for Your Business",
        description:
          "In today's competitive business landscape, branding has become more important than ever. It's no longer just about having a great product or service; it's about building a strong brand that resonates with your target audience.",
        image: "https://cloudbookingsolutions.com/img/brand.png",
      },
      {
        title: "All about Google Analytics: Unravelling the Power of Data-Driven Insights",
        description:
          "In today's digital age, understanding the behaviour of your website visitors is crucial for success.",
        image: "https://cloudbookingsolutions.com/img/GOOGLEANALYTICS.webp",
      },
      {
        title: "Significance of Target Audience Research in Content Marketing",
        description:
          "Target audience research is a critical and foundational aspect of content marketing. Understanding your target audience allows you to create and deliver content that resonates with them",
        image: "https://cloudbookingsolutions.com/img/Target.jpg",
      },
      {
        title: "Crafting a Lasting Impression: Branding Tips for Startups",
        description:
          "When launching a startup, making a memorable and impactful first impression is crucial for long-term success. An effective branding strategy plays a central role in creating that lasting impression on your target audience.",
        image: "https://cloudbookingsolutions.com/img/brandbuilding.jpg",
      },
      {
        title: "Gaining a Competitive Edge: Using Competitor Analysis to Elevate Your Marketing Strategy",
        description:
          "In today's cutthroat business environment, standing out from the competition is a challenge that every startup and business faces. A well-crafted marketing strategy is a powerful tool for success",
        image: "https://cloudbookingsolutions.com/img/2327526.jpg",
      },
  ];

  return (
    <div className="mt-4 pt-4 px-4 md:px-8 lg:px-12 lg:mt-5 bg-blue-50">
      {/* Title & Subtitle with AOS Fade Animation */}
      <h5
        className="text-4xl text-blue-900 text-center font-bold"
        data-aos="fade-up"
      >
        Our Blogs
      </h5>
      <p
        className="italic text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Fuel Your Mind, Ignite Your Imagination: Discover a World of Insights
        through Our Engaging Blog!
      </p>

      {/* Blog Cards */}
      <div className="mt-8 lg:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
