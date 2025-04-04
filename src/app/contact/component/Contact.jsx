import React from "react";

const Contact = () => {
  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 lg:mt-5 bg-blue-50 pt-4" >
    {/* Title & Subtitle - Fade Up */}
    <h5
      className="text-4xl text-blue-900 text-center font-bold mb-5"
      data-aos="fade-up"
    >
    Contact Us
    </h5>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Google Map */}
        <div className="w-full h-64 md:h-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.600881765166!2d73.81716861489315!3d18.5469296873937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf75393ff42b%3A0x9b632a700c7e5f6c!2sCloud%20Booking%20Software%20Solutions%20Pune!5e0!3m2!1sen!2sin!4v1686053791462!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-3 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
