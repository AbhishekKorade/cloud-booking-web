"use client"; 
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  { id: 1, name: "Vaibhav Gaikwad", text: "I got Priya's contact number from Cloud Booking Software Solutions business profile. I consulted for business profile number update and website design. She consulted me very nicely and I finalised the deal and got website design in just 6 days that is very responsive and contact number updated in just 4 days.. I am looking forward for next service i.e. Digital Marketing. Highly recommend." },
  { id: 2, name: "Vinod Supekar", text: "I have created my business profile through Cloud Booking Software Solutions. One of the best service providers in Pune. Most recommended." },
  { id: 3, name: "Waarjurkar Classes", text: "I developed the website for my classes from Cloud Booking Software Solutions, and they really did their best. I am totally satisfied with their service. Thank you so much Cloud Booking Software Solutions and Team!" },
  { id: 4, name: "Sagar Pawar", text: "The best online service provider. I developed a website from Cloud Booking Software Solutions, and they made a very attractive and responsive website for my business." },
  { id: 5, name: "Ankush Chaudhari", text: "I made a business profile and there was no update on my Google profile. They made their work very fast and on priority basis. Now they are doing very professional work. Happy with their service, highly recommended." },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full lg:h-[400px] bg-blue-50 flex mt-5 py-5 flex-col justify-center">
      {/* Heading with AOS fade-up animation */}
      <h5 className="text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        Testimonials
      </h5>

      <div className="w-full h-full mt-6 px-4 md:px-8 lg:px-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 2 }, // Show 2 slides on large screens
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="w-full h-auto lg:h-[250px] flex flex-col items-center justify-center bg-white shadow-lg rounded-lg px-8 py-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="mt-3 text-gray-700 italic text-lg leading-relaxed">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
