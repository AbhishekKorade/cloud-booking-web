"use client";
import React from "react";
import { FaRegSmile } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa";
import { AiOutlineBarcode } from "react-icons/ai";
import { FaRuler } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const DigitalMarketing = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-5">
      {/* Title & Subtitle - Fade Up */}
      <h5
        className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold"
        data-aos="fade-up"
      >
      Digital Marketing
      </h5>
      <p
        className="italic text-sm md:text-md text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
       Accelerate Your Online Success with Strategic Digital Marketing Solutions
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
            src="https://cloudbookingsolutions.com/img/dm.png"
            alt="Cloud Booking"
          />
        </div>

        {/* Text Animation */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
            <h3 className=" font-bold text-xl lg:text-2xl">A. Branding</h3>
         
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
       
          A branding and digital marketing agency can enable your company to shape an impressive perception with easy recall urging the audience to connect and engage with your brand. As a reputed branding agency in Pune, we always strive to reach the extra mile for powering up your brand value in the market.
             </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
           We are a creative branding agency with experience and expertise in combining various branding aspects <span className=" font-bold"> such as logo, design, mission statement, and theme to shape an impactful branding strategy </span> for our clients. Our brand management services include creating <span className=" font-bold">brand identity, brand guidelines, brand assets, brand architecture and brand collaterals</span>
             </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          Through powerful storytelling, awe-inspiring creativity and intelligent communication, we enable your brand to build an unforgettable place in the minds of your customers. Our highly innovative branding services in Pune establish brand reputation without compromising the key requirements of our targeted clients’ audience base.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          Generates leads: By attracting more organic traffic to your website, you can also generate more leads. SEO can help you attract people who are actively searching for products or services similar to yours, making them more likely to convert into customers.
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
            src="https://cloudbookingsolutions.com/img/dm.png"
            alt="Cloud Booking"
          />
        </div>
      </div>

      {/* Second Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-10 lg:mt-10">
        {/* Image for Small Screens */}
        <div
          className="lg:hidden flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <img
            src="https://cloudbookingsolutions.com/img/iconfinder-social-media-work-4341270_120574.png"
            alt="Social Media Marketing Services"
          />
        </div>

        {/* Text Animation */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
            <h3 className=" font-bold text-xl lg:text-2xl">B. Social Media Marketing</h3>
         
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
       
         
          As a leading social media marketing agency in India, we strive to build a solid competitive position for your online presence on <span className=" font-bold"> top social media platforms like Instagram, Facebook, Youtube and Linkedin </span>
            

          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          
         
      
          Through our <span className=" font-bold">experience as a leading social media marketing agency in pune </span>, we have developed a team of strategic-thinking digital marketing specialists that believe in empowering brands and assisting businesses in growing by using digital power.
            
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          When you join us for your digital social media marketing optimization, you will leverage the latest social media marketing services and next-gen tools like Brand24, Semrush, and Social Mention.
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
            src="https://cloudbookingsolutions.com/img/iconfinder-social-media-work-4341270_120574.png"
            alt="Social Media Marketing Services"
          />
        </div>
      </div>

      {/* Third Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://cloudbookingsolutions.com/img/Group-4658.svg"
            alt="Digital Marketing Services in Pune"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
        <span className=" font-bold"> Our young creative team is always brimming with ideas that lead to compelling strategies crafted to draw high engagement on multiple social media channels 
        </span> with the expertise of one of the finest social media marketing companies in india.
            
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
         
       Our experience as a performance-driven social media marketing agency in Pune of more than a decade enables you to create a community on various social platforms, strengthen the <span className=" font-bold">relationship with your target audience, maintain a high brand recall, and position yourself as a thought leader in the industry</span>

          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          With the expertise of a leading social media marketing company in Pune, we carry out extensive sentiment analysis to develop a social media plan that engages your audience with informative and engaging content through trending mediums and formats.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800 font-bold">
          We handle social media account also like Facebook, Instagram, YouTube with posts and reels,video
          </p>
        </div>
      </div>

      {/* Fourth Content Section */}
      <div className="grid lg:grid-cols-2 gap-5 mt-0 lg:mt-0">
        {/* Image for Small Screens */}
        <div
          className="block lg:hidden mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="	https://cloudbookingsolutions.com/img/Group-4731.svg"
            alt="Digital Marketing"
          />
        </div>

        {/* Features List */}
        <div className="mt-5 lg:mt-12">
        <p className=" text-lg lg:text-xl">Types of social media marketing that businesses can use to promote their products or services.</p>

          {/* Feature Items */}
          {[
            {
              icon: <FaRegSmile />,
              title: "Organic Social Media Marketing",
              text: " Organic social media marketing involves creating and sharing content on social media platforms without paying for advertising. This type of marketing focuses on building a following and engaging with followers through regular updates, community management, and customer service.",
              delay: 400,
            },
            {
              icon: <FaMoneyBill /> ,
              title: "Paid Social Media Advertising",
              text: "Paid social media advertising involves paying for ads to be shown to specific audiences on social media platforms. This type of marketing can include targeting options based on demographics, interests, behaviors, and other criteria to reach the right audience with the right message.",
              delay: 500,
            },
            {
              icon: <FaUser />,
              title: "Influencer Marketing",
              text: " Influencer marketing involves partnering with individuals who have a large social media following to promote a product or service. This type of marketing can help businesses reach new audiences and build trust through endorsements from credible influencers.",
              delay: 600,
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
                <h5 className="font-semibold md:font-bold text-black text-xl leading-8">
                  {item.title}
                </h5>
                <p className="font-medium text-[14px] sm:text-[15px] text-black">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
          <p className=" mt-3">Each type of social media marketing has its own unique features and benefits, allowing businesses to choose the type of marketing that best suits their goals and target audience.</p>
        </div>

        {/* Image for Large Screens */}
        <div
          className="hidden lg:flex justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img
            src="	https://cloudbookingsolutions.com/img/Group-4731.svg"
            alt="Dital Marketing"
          />
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
            src="https://cloudbookingsolutions.com/img/chamrundigital-google-ads-image.png"
            alt="Digital Marketing "
          />
        </div>

        {/* Text Animation */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
            <h3 className=" font-bold text-xl lg:text-2xl">C. Google Ads</h3>
         
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
       
        
          Google Ads is an online advertising platform developed by Google, where businesses can create and <span className=" font-bold">display advertisements to reach potential </span> customers who are actively searching for products or services related to their business.
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
       
          The way Google Ads works is that advertisers bid on <span className="font-bold">specific keywords or phrases </span>that are relevant to their business, and then create ads that will be displayed when someone searches for those keywords or phrases on Google. 
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          The ads can also be displayed on websites that have partnered with Google, such as YouTube or the Google Display Network.The importance of Google Ads in business lies in its ability to <span className="font-bold"> target potential customers </span> who are already interested in the products or services that the business offers.  
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
            src="https://cloudbookingsolutions.com/img/chamrundigital-google-ads-image.png"
            alt="Digital Marketing"
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
            src="https://cloudbookingsolutions.com/img/google-ads-codecl.png"
            alt="Digital MArketing in Pune"
          />
        </div>

        {/* Text */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
          By using relevant keywords and creating engaging ads, businesses can attract more qualified leads and potentially increase their sales and revenue.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
         
        Additionally, Google Ads offers various targeting options, such as <span className="font-bold"> geographic location, demographics, and interests, </span>allowing businesses to tailor their ads to specific audiences. This can help businesses reach the right people at the right time, increasing the chances of converting potential customers into actual customers.
            
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800 font-bold">
      
          Overall, Google Ads can be an effective way for businesses to reach a larger audience, increase brand awareness, and ultimately drive more sales and revenue.
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
            src="https://cloudbookingsolutions.com/img/Google-Ads-Banner-Image.png"
            alt="Digital Marketing in Pune"
          />
        </div>

        {/* Features List */}
        <div className="mt-5 lg:mt-12">
        <p className=" text-lg lg:text-xl">Google Ads can be important for a business in several ways</p>

          {/* Feature Items */}
          {[
            {
              icon: <FaChartLine />,
              title: "Increased visibility",
              text: " Google Ads can help increase a business's visibility by placing its ads in front of potential customers who are searching for relevant keywords or browsing websites that are relevant to the business.",
              delay: 400,
            },
            {
              icon: <FaBullseye /> ,
              title: "Targeted advertising",
              text: "Google Ads allows businesses to target their ads to specific geographic locations, demographics, and interests, ensuring that their ads are shown to the most relevant audience.",
              delay: 500,
            },
            {
              icon: <AiOutlineBarcode />,
              title: "Cost-effective",
              text: " Google Ads works on a pay-per-click (PPC) model, which means that businesses only pay when someone clicks on their ad. This can be a cost-effective way to reach a large audience.",
              delay: 600,
            },
            {
                icon: <FaRuler />,
                title: "Measurable results",
                text: " Google Ads provides detailed analytics and reporting, allowing businesses to track the performance of their ads and make data-driven decisions to improve their campaigns.",
                delay: 700,
              },
              {
                icon: <FaCheck />,
                title: "Flexibility",
                text: " Google Ads allows businesses to customize their campaigns to suit their specific goals and budget, making it a flexible advertising platform that can adapt to changing business needs.",
                delay: 800,
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
                <h5 className="font-semibold md:font-bold text-black text-xl leading-8">
                  {item.title}
                </h5>
                <p className="font-medium text-[14px] sm:text-[15px] text-black">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
          <p className=" mt-3">Overall, Google Ads can be an important tool for businesses looking to increase their visibility, attract more qualified leads, and drive more sales and revenue.</p>
        </div>

        {/* Image for Large Screens */}
        <div
          className="hidden lg:flex justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img
            src="https://cloudbookingsolutions.com/img/Google-Ads-Banner-Image.png"
            alt="Digital Marketing in Pune"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
