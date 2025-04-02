"use client";
import React from "react";
import { FaSlack } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css";

const OtherMarketing = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-5">
      {/* Title & Subtitle - Fade Up */}
      <h5
        className="text-4xl text-blue-900 text-center font-bold"
        data-aos="fade-up"
      >
        Marketing Services
      </h5>
      <p
        className="italic text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Elevate Your Marketing Game: Unleashing the Power of Strategic Services
        for Lasting Success
      </p>

      {/* First Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-10">
        {/* Image for Small Screens */}
        <div
          className="lg:hidden flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/SEO-PIC-1.svg"
            alt="Cloud Booking"
          />
        </div>

        {/* Text Animation */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <h3 className=" font-bold text-2xl">A. Pay-Per-Click(PPC)</h3>

          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Pay-per-click (PPC) is an internet advertising model used to drive
            traffic to websites, in which an advertiser pays a publisher
            (typically a search engine, website owner, or a network of websites)
            when the ad is clicked.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Pay-per-click is usually associated with first-tier search engines
            (such as Google Ads, Amazon Advertising, and Microsoft Advertising
            formerly Bing Ads). With search engines, advertisers typically bid
            on keyword phrases relevant to their target market and pay when ads
            (text-based search ads or shopping ads that are a combination of
            images and text) are clicked.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            In contrast, content sites commonly charge a fixed price per click
            rather than use a bidding system. PPC display advertisements, also
            known as banner ads, are shown on web sites with related content
            that have agreed to show ads and are typically not pay-per-click
            advertising, but instead usually charge on a cost per thousand
            impressions (CPM).
          </p>
        </div>

        {/* Image for Large Screens */}
        <div
          className="lg:flex hidden items-center"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/SEO-PIC-1.svg"
            alt="Cloud Booking"
          />
        </div>
      </div>

      {/* Second Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://cloudbookingsolutions.com/img/content-marketing-1.svg"
            alt="Digital Marketing Services in Pune"
          />
        </div>
        {/* Text Animation */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Social networks such as Facebook, Instagram, LinkedIn, Reddit,
            Pinterest, TikTok, and Twitter have also adopted pay-per-click as
            one of their advertising models. The amount advertisers pay depends
            on the publisher and is usually driven by two major factors: the
            quality of the ad, and the maximum bid the advertiser is willing to
            pay per click measured against its competitors' bids.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            In general, the higher the quality of the ad, the lower the cost per
            click is charged and vice versa. However, websites can offer PPC
            ads. Websites that utilize PPC ads will display an advertisement
            when a query (keyword or phrase) matches an advertiser's keyword
            list that has been added in different ad groups, or when a content
            site displays relevant content.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Such advertisements are called sponsored links or sponsored ads, and
            appear adjacent to, above, or beneath organic results on search
            engine results pages (SERP), or anywhere a web developer chooses on
            a content site.{" "}
          </p>
        </div>
      </div>

      {/* Third Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-10">
        {/* Image for Small Screens */}
        <div
          className="lg:hidden flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/header_vector_v3-1.png"
            alt="Social Media Marketing Services"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <h3 className=" font-bold text-2xl">B. Content Marketing</h3>

          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            We are a content marketing agency in India with a team that creates
            an excellent blend of promotional, informational and engaging
            content.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Our team of 180+ professionals will deliver a content strategy that
            will keep you ahead of the competition with excellent content
            promotion services. We have built our reputation as the best content
            marketing company India through effective and impactful content
            promotion services.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            You can expect a variety of content promotion services like Blogs,
            Articles, Leadership Blogs, Website(writing from ground-up,
            revamping existing content, keyword blending, proofreading),
          </p>
        </div>

        {/* Image for Large Screens */}
        <div
          className="lg:flex hidden items-center"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/header_vector_v3-1.png"
            alt="Social Media Marketing Services"
          />
        </div>
      </div>

      {/* Fourth Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://cloudbookingsolutions.com/img/PngItem_5400435.png"
            alt="Digital Marketing Services in Pune"
          />
        </div>
        {/* Text Animation */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Online reputation management (ORM) - quora, reviews, Infographics,
            Scripts ( TVCs, Audio ), Case Study, White Paper, Brochure, Ebook,
            Product Description (Ecommerce)-Flipkart, Amazon, Snapdeal &
            Technical content with our content marketing services.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Whatever is your marketing objective to build trust, enhance
            visibility or brand recall, generate traffic to your website or
            create a strong digital presence, our team knows the type of content
            you will need to meet your objective.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            If you are looking for a wide range of content promotion services
            and content marketing services in Pune to unlock your company's
            organic growth potential you can safely trust us at the best content
            marketing agency in India.
          </p>
        </div>
      </div>

      {/* Fifth Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-10">
        {/* Image for Small Screens */}
        <div
          className="lg:hidden flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/Group-6440.svg"
            alt="Social Media Marketing Services"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <h3 className=" font-bold text-2xl">C. Video Production</h3>

          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Online video marketing services play a critical part in establishing
            the right brand vision of your business. Video marketing services
            are crucial for your brand in this fast-paced sensory overloading
            world. Video film making is one of the most engaging content formats
            your business can leverage to connect with its audience.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            A well-crafted video for social video marketing with the help of a
            video marketing agency conveys your brand message while seizing
            audience attention in the digitally-dominated era. Seeking video
            marketing services is the right step ahead.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            As a leading video marketing company, our highly experienced
            creative team takes your branding and campaign launches to a whole
            new level with our innovation-driven video marketing strategy.
          </p>
        </div>

        {/* Image for Large Screens */}
        <div
          className="lg:flex hidden items-center"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/Group-6440.svg"
            alt="Social Media Marketing Services"
          />
        </div>
      </div>

      {/* Sixth Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://cloudbookingsolutions.com/img/how-graphic-design-helps-business-1-1.svg"
            alt="Digital Marketing Services in Pune"
          />
        </div>
        {/* Text Animation */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Whether you are a startup, MSME or a well-established brand, our
            video marketing agency team has the experience to produce rich video
            content for businesses of every size.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Explainer videos, TV commercials, interactive videos, corporate
            films, motion graphics, animated videos, video shoots, Photoshoots
            are just a few services we have as a leading video marketing agency.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            And probably, our creative determination and innovative mindset are
            the reason why both our employees and clients love working with us
            over other video marketing agencies.
          </p>
        </div>
      </div>

      {/* Seventh Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image for Small Screens */}
        <div
          className="block lg:hidden mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://cloudbookingsolutions.com/img/digitalMarketing-vector.png"
            alt="Digital Marketing in Pune"
          />
        </div>

        {/* Features List */}
        <div className="mt-5 lg:mt-12">
          <p className=" text-xl">Other Marketing Servies</p>

          {/* Feature Items */}
          {[
            {
              icon: <FaSlack />,
              title: "Logo Designing",
              text: " Logo designing is the process of creating a unique symbol or design that represents a brand, organization, or individual.",
              delay: 400,
            },
            {
              icon: <FaHeart />,
              title: "Graphic Design",
              text: "Graphic design is an important tool for growing your business. ",
              delay: 500,
            },
            {
              icon: <FaWhatsapp />,
              title: "Whatsapp Marketing",
              text: "whatsapp marketing importants to grow business and to to do it WhatsApp marketing is a strategy that involves using WhatsApp to promote and sell products or services. ",
              delay: 600,
            },
            {
              icon: <IoIosMail />,
              title: "Email marketing",
              text: " Email marketing importance to growbusiness and how to do it Email marketing is a marketing strategy that involves sending promotional messages or newsletters to a group of subscribers via email.",
              delay: 700,
            },
          ].map((item, index) => (
            <div
              className="flex gap-4 mt-4 group p-3 rounded-lg transition-all duration-300"
              key={index}
              data-aos="fade-right"
              data-aos-delay={item.delay}
            >
              <div className="flex-shrink-0 flex justify-center items-center h-14 w-14 md:h-16 md:w-16 rounded-full border border-blue-500 transition-all duration-300 group-hover:bg-blue-500">
                {React.cloneElement(item.icon, {
                  className:
                    "h-7 w-7 md:h-9 md:w-9 text-blue-500 group-hover:text-white transition-all duration-300",
                })}
              </div>
              <div>
                <h5 className="font-bold text-black text-xl leading-8">
                  {item.title}
                </h5>
                <p className="font-semibold text-[14px] sm:text-[15px] text-black">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image for Large Screens */}
        <div
          className="hidden lg:flex justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img
            src="https://cloudbookingsolutions.com/img/digitalMarketing-vector.png"
            alt="Digital Marketing in Pune"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherMarketing;
