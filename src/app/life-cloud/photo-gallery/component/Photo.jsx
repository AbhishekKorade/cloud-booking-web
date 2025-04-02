import React from "react";

const photos = [
  { id: 1, image: "https://cloudbookingsolutions.com/img/photo/1.jpg" },
  { id: 2, image: "https://cloudbookingsolutions.com/img/photo/2.jpg" },
  { id: 3, image: "https://cloudbookingsolutions.com/img/photo/3.jpg" },
  { id: 4, image: "https://cloudbookingsolutions.com/img/photo/4.jpg" },
  { id: 5, image: "https://cloudbookingsolutions.com/img/photo/5.jpg" },
  { id: 6, image: "https://cloudbookingsolutions.com/img/photo/6.jpg" },
  { id: 7, image: "https://cloudbookingsolutions.com/img/photo/7.jpg" },
  { id: 8, image: "https://cloudbookingsolutions.com/img/photo/8.jpg" },
  { id: 9, image: "https://cloudbookingsolutions.com/img/photo/9.jpg" },
  { id: 10, image: "https://cloudbookingsolutions.com/img/photo/10.jpg" },
  { id: 11, image: "https://cloudbookingsolutions.com/img/photo/11.jpg" },
  { id: 12, image: "https://cloudbookingsolutions.com/img/photo/12.jpg" },
  { id: 13, image: "https://cloudbookingsolutions.com/img/photo/13.jpg" },
  { id: 14, image: "https://cloudbookingsolutions.com/img/photo/14.jpg" },
  { id: 15, image: "https://cloudbookingsolutions.com/img/photo/15.jpg" },
  { id: 16, image: "https://cloudbookingsolutions.com/img/photo/16.jpg" },
  { id: 17, image: "https://cloudbookingsolutions.com/img/photo/17.jpg" },
  { id: 18, image: "https://cloudbookingsolutions.com/img/photo/18.jpg" },
  { id: 19, image: "https://cloudbookingsolutions.com/img/photo/19.jpg" },
  { id: 20, image: "https://cloudbookingsolutions.com/img/photo/20.jpg" },
  { id: 21, image: "https://cloudbookingsolutions.com/img/photo/21.jpg" },
  { id: 22, image: "https://cloudbookingsolutions.com/img/photo/22.jpg" },
  { id: 23, image: "https://cloudbookingsolutions.com/img/photo/23.jpg" },
  { id: 24, image: "https://cloudbookingsolutions.com/img/photo/24.jpg" },
  { id: 25, image: "https://cloudbookingsolutions.com/img/photo/p2.jpg" },
  { id: 26, image: "https://cloudbookingsolutions.com/img/photo/p3.jpg" },
  { id: 27, image: "https://cloudbookingsolutions.com/img/photo/p4.jpg" },
  { id: 28, image: "https://cloudbookingsolutions.com/img/photo/p5.jpg" },
  { id: 29, image: "https://cloudbookingsolutions.com/img/photo/p6.jpg" },
  { id: 30, image: "https://cloudbookingsolutions.com/img/photo/p7.jpg" },
  { id: 31, image: "https://cloudbookingsolutions.com/img/photo/p8.jpg" },
  { id: 32, image: "https://cloudbookingsolutions.com/img/photo/p9.jpg" },
  { id: 33, image: "https://cloudbookingsolutions.com/img/photo/p10.jpg" },
  { id: 34, image: "https://cloudbookingsolutions.com/img/photo/p11.jpg" },
  { id: 35, image: "https://cloudbookingsolutions.com/img/photo/p12.jpg" },
  { id: 36, image: "https://cloudbookingsolutions.com/img/photo/p13.jpg" },
  { id: 37, image: "https://cloudbookingsolutions.com/img/photo/p14.jpg" },
  { id: 38, image: "https://cloudbookingsolutions.com/img/photo/p15.jpg" },
  { id: 39, image: "https://cloudbookingsolutions.com/img/photo/p16.jpg" },
  { id: 40, image: "https://cloudbookingsolutions.com/img/photo/p17.jpg" },
  { id: 41, image: "https://cloudbookingsolutions.com/img/photo/p18.jpg" },
  { id: 42, image: "https://cloudbookingsolutions.com/img/photo/p19.jpg" },
  { id: 43, image: "https://cloudbookingsolutions.com/img/photo/p20.jpg" },
  { id: 44, image: "https://cloudbookingsolutions.com/img/photo/p21.jpg" },
  { id: 45, image: "https://cloudbookingsolutions.com/img/photo/p22.jpg" },
  { id: 46, image: "https://cloudbookingsolutions.com/img/photo/p23.jpg" },
  { id: 47, image: "https://cloudbookingsolutions.com/img/photo/p24.jpg" },
  { id: 48, image: "https://cloudbookingsolutions.com/img/photo/p25.jpg" },
];

const Photo = () => {
  return (
    <div className="mt-4 mx-4 md:mx-8 lg:mx-12">
      <h4 className="text-4xl text-blue-900 text-center font-bold">
        Photo Gallery
      </h4>
      <p className="italic text-center text-gray-600">
        A Captivating Tapestry of Visual Stories: Journey through Our Photo
        Gallery and Experience the Extraordinary
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.image}
            alt={`Photo ${photo.id}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Photo;
