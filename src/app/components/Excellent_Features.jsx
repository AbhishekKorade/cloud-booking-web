"use client"; // Only needed for Next.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Excellent_Features = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const Features = [
        {
            id: 1,
            title: "Website Development",
            image: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
            content: "You may simply realise your brand idea with the help of our talented web design specialists at Cloud Booking. The layout of your website affects how potential clients perceive you. Also, we provide Annual website maintenance contracts."
        },
        {
            id: 2,
            title: "Digital Marketing",
            image: "https://www.youngurbanproject.com/wp-content/uploads/2024/06/scope-of-digital-marketing.jpg",
            content: "Cloud Booking team makes your digital presence impressive and makes Google reach faster. Our brilliant task force of digital experts carries out each project with perfection so that results are delivered before timelines. Reach out to us for social digital marketing services."
        },
        {
            id: 3,
            title: "Web Application",
            image: "https://3iology.com/dist/assets/img/webapplication.png",
            content: "Web development services are used to design, build, support, and evolve all types of web-based software. Our intuitive and fast websites, web portals, and other web solutions bring about digital transformation and enhance business workflows."
        },
        {
            id: 4,
            title: "E-commerce Solution",
            image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
            content: "The market is highly competitive, even though consumer demand for online shopping is remarkably strong now. Cloud Booking Solutions brings in technology expertise and a problem-oriented approach to drive positive and tangible changes across your business, resulting in cost savings and revenue growth."
        },
        {
            id: 5,
            title: "Telecalling Support",
            image: "https://plus.unsplash.com/premium_photo-1661299251279-117a49a32548?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsbCUyMGNlbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
            content: "Cloud Booking's Telecallers initiate telephonic contact with existing and prospective clients to generate sales. Given their reliance on spoken language, telecallers ought to display excellent verbal communication."
        },
        {
            id: 6,
            title: "Custom Software Development",
            image: "https://media.licdn.com/dms/image/v2/C5612AQF79epthg7Wbw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1649140977382?e=2147483647&v=beta&t=DBrzVde9tc93ouqBxm87XOMBKA6G6AM4l_SuUp2CGEQ",
            content: "With our devoted Custom Software Development team, your company can standardize and automate its processes to achieve a high level of efficiency in its operations."
        }
    ];

    return (
        <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-10 py-4 bg-blue-50">
            {/* Title & Subtitle - Fade Up */}
            <h5 
                className="text-4xl text-blue-900 text-center font-bold"
                data-aos="fade-up"
            >
                We Provide Excellent Features
            </h5>
            <p 
                className="italic text-center text-gray-600"
                data-aos="fade-up" 
                data-aos-delay="200"
            >
                Transforming Your Digital Landscape with Comprehensive IT Services
            </p>

            {/* Feature Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                {
                    Features.map((feature, i) => (
                        <div 
                            className='bg-white rounded-lg p-3 shadow-lg'
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 100} // Staggered delay for better effect
                        >
                            {/* Image with Zoom-In Effect */}
                            <div 
                                className='rounded-lg w-full h-52 overflow-hidden' 
                                data-aos="zoom-in"
                                data-aos-duration="800"
                            >
                                <img src={feature.image} alt={feature.title} className='w-full h-full object-cover rounded-lg border border-blue-900' />
                            </div>
                            
                            {/* Title - Fade Up */}
                            <h2 
                                className='text-center text-blue-500 hover:text-blue-900 cursor-pointer font-bold text-2xl mt-3'
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                {feature.title}
                            </h2>

                            {/* Content - Fade Up */}
                            <p className='text-md mt-2 text-gray-800' data-aos="fade-up" data-aos-delay="400">
                                {feature.content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Excellent_Features;
