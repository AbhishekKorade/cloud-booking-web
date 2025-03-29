"use client";
import React from "react";
import { FaBagShopping, FaAward } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
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
        About Us
      </h5>
      <p
        className="italic text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Coding the Future, Empowering Innovation
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
            src="https://cloudbookingsolutions.com/img/about-extra-2.svg"
            alt="Cloud Booking"
          />
        </div>

        {/* Text Animation */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <h3 className="font-semibold italic text-blue-900 text-xl md:text-2xl lg:text-3xl mt-3 lg:mt-0">
            Welcome to Cloud Booking Software Solutions
          </h3>
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Cloud Booking Software Solutions a leading provider of comprehensive
            IT solutions designed to drive digital transformation and empower
            businesses to thrive in the modern era. With a strong focus on
            innovation, efficiency, and customer satisfaction, Cloud Booking
            Software Solutions deliver tailored technology solutions to meet the
            unique needs of our clients.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Cloud Booking Software Solutions, we understand that every
            organization has specific IT requirements, which is why Cloud
            Booking Software Solutions offer a wide range of services and
            expertise to cater to diverse industries and business sizes. Cloud
            Booking Software Solutions team of skilled professionals possesses
            deep knowledge and expertise in areas such as software development,
            cloud computing, cybersecurity, data analytics, infrastructure
            management, and more.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Cloud Booking Software Solutions are committed to delivering
            cutting-edge solutions that leverage the latest technologies and
            industry best practices. By staying ahead of emerging trends and
            advancements,Cloud Booking Software Solutions ensure that our
            clients benefit from the most innovative and effective IT solutions
            available. Our agile and collaborative approach allows us to adapt
            quickly to evolving business needs and deliver solutions that drive
            tangible results.
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
            src="https://cloudbookingsolutions.com/img/about-extra-2.svg"
            alt="Cloud Booking"
          />
        </div>
      </div>

      {/* Second Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-20">
        {/* Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://cloudbookingsolutions.com/img/about-us-new.svg"
            alt="Cloud Booking"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Customer satisfaction is at the core of everything we do. Cloud
            Booking Software Solutions prioritize building strong and
            long-lasting relationships with our clients, understanding their
            unique challenges, and providing personalized support throughout
            their technology journey.Cloud Booking Software Solutions team of
            dedicated professionals is available to offer guidance, assistance,
            and ongoing maintenance to ensure that our clients' IT systems
            operate seamlessly and efficiently.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            Cloud Booking Software Solutions take pride in our commitment to
            quality, reliability, and security. We adhere to stringent industry
            standards and best practices, employing robust security measures to
            protect our clients' data and systems. With our comprehensive IT
            solutions, businesses can streamline operations, enhance
            productivity, improve customer experiences, and gain a competitive
            edge in their respective industries.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] font-bold text-gray-800">
            Join us on this transformative technology journey and experience the
            power of our innovative IT solutions. Together, we can unlock the
            full potential of your organization and pave the way for success in
            the digital age.
          </p>
        </div>
      </div>

      {/* Third Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-20">
        {/* Image for Small Screens */}
        <div
          className="block lg:hidden mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://cloudbookingsolutions.com/img/milestone.jpg"
            alt="About Us"
          />
        </div>

        {/* Features List */}
        <div className="mt-5 lg:mt-12">
          <p
            className="font-bold text-[17px] md:text-lg text-black"
            data-aos="fade-right"
          >
            The Best IT Solutions with 4+ Years of Experience
          </p>

          {/* Feature Items */}
          {[
            {
              icon: <FaBagShopping />,
              title: "Fair Prices",
              text: "We will provide your services at Fair price",
              delay: 400,
            },
            {
              icon: <IoIosPeople />,
              title: "Professional Staff",
              text: "We have professional staff to complete your services",
              delay: 500,
            },
            {
              icon: <FaAward />,
              title: "Award Winning",
              text: "After we provide full services, we have received very good reviews from clients, which we feel is like a Award.",
              delay: 600,
            },
            {
              icon: <FiClock />,
              title: "24/7 Support",
              text: "We are available for you round the clock",
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
            src="https://cloudbookingsolutions.com/img/milestone.jpg"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
