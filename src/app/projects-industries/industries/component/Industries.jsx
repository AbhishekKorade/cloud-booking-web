import React from "react";

const industriesData = [
  {
    id: 1,
    title: "Education",
    description:
      "We bring innovation to education by creating engaging materials and intuitive e-learning solutions. Empowering educators and learners alike.",
    image: "https://thumbs.dreamstime.com/b/education-technology-e-learning-online-training-webinar-seminar-knowledge-business-personal-development-education-technology-e-138022989.jpg",
  },
  {
    id: 2,
    title: "Helthcare",
    description:
      "We support the healthcare and pharma industry with innovative solutions that enhance patient care and streamline processes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78gMWiPnO2fblpSckQzHSfG3LRPQrkvMe0w&s",
  },
  {
    id: 3,
    title: "Financial",
    description:
      "We empower the banking and financial sector with cutting-edge solutions that enhance efficiency, security, and customer engagement.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjz_QR0Rf6r3nCAHCyvk4h-Lcr4ynKWfBoA&s",
  },
  {
    id: 4,
    title: "Real Estate",
    description:
      "We elevate the real estate industry with tailored solutions that showcase properties and drive engagement.",
    image: "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2020/07/Technologyrealestate.jpg",
  },
  {
    id: 5,
    title: "Agriculture",
    description:
      "We support the agriculture industry with innovative solutions that enhance productivity and sustainability. From smart technologies to streamlined processes.",
    image: "https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/agri2.jpeg",
  },
  {
    id: 6,
    title: "Manufacture",
    description:
      "We drive innovation in the manufacturing and industrial sectors with cutting-edge solutions that enhance efficiency and productivity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s",
  },
  {
    id: 7,
    title: "Transportation",
    description:
      "We drive efficiency in transportation and logistics with tailored solutions that streamline operations and optimize workflows.",
    image: "https://media.istockphoto.com/id/1409387561/photo/transport-and-logistic-concept-manager-and-engineer-checking-and-control-logistic-network.jpg?s=612x612&w=0&k=20&c=A8UsutrsjMElYparCpwmTjKnQp8pw3R8wpxQX1VgKfc=",
  },
  {
    id: 8,
    title: "Retail",
    description:
      "We serve the FMCG and retail industries by delivering creative, data-driven solutions that enhance brand visibility and customer engagement.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknxp1AsC0gyNd7noPAA3AhO85RZfj2MJbJg&s",
  },
  {
    id: 9,
    title: "Interior",
    description:
      "We specialize in creating inspiring and functional interior designs that transform spaces. From residential to commercial project.",
    image: "https://media.istockphoto.com/id/1465056864/photo/large-production-line-with-industrial-robot-arms-at-modern-bright-factory-solar-panels-are.jpg?s=612x612&w=0&k=20&c=yqclk4Li5opfMfpaoPua734of0ZaDv39NDT6C3goDC4=",
  },
];

const Industries = () => {
  return (
    <div className="mt-10 px-4 md:px-8 lg:px-12 py-5 bg-blue-50">
      {/* Heading */}
      <h4 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 text-center font-bold" data-aos="fade-up">
        Industries We Serve
      </h4>
      <p className="italic text-sm md:text-md text-center text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
        Powering Progress Across Industries: Our Expertise, Your Success
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3d lg:grid-cols-4 gap-6">
        {industriesData.map((industry) => (
          <div
            key={industry.id}
            className="p-2 rounded-lg bg-white shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Image (Zoom-In on Hover) */}
            <div className="w-full h-36 lg:h-40 flex justify-center items-center mb-4 overflow-hidden">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover border border-gray-300 rounded-lg transform scale-95 transition-transform duration-300 hover:scale-100"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-blue-500 hover:text-blue-900 mb-2">{industry.title}</h3>

            {/* Description */}
            <p className="text-blue-950 text-sm">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
