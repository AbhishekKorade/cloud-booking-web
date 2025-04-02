"use client";
import React from "react";

const images = [
  [
    "w1.jpeg", "w2.jpeg", "w9.jpeg", "w10.jpeg", "w11.jpeg", "w12.jpeg",
    "5.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "24.jpg"
  ],
  [
    "w3.jpeg", "w4.jpeg", "w13.jpeg", "w14.jpeg", "w15.jpeg",
    "17.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "19.jpg", "18.jpg"
  ],
  [
    "w5.jpeg", "w6.jpeg", "w16.jpeg", "w17.jpeg", "w18.jpeg",
    "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "25.jpg"
  ],
  [
    "w7.jpeg", "w8.jpeg", "w19.jpeg", "w20.jpeg", "w21.jpeg", "w22.jpeg",
    "20.jpg", "21.jpg", "22.jpg", "23.jpg"
  ]
];

const EventCelebration = () => {
  return (
    <div className="mt-4 mx-4 md:mx-8 lg:mx-12">
      <h4 className="text-4xl text-blue-900 text-center font-bold">
        Event and Celebration
      </h4>
      <p className="italic text-center text-gray-600">
        Crafting Memories, Inspiring Joy: Bringing Your Events and Celebrations to Life, One Remarkable Experience at a Time
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {images.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            {column.map((img, imgIndex) => (
              <a key={imgIndex} href={`https://cloudbookingsolutions.com/img/event/${img}`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://cloudbookingsolutions.com/img/event/${img}`}
                  alt="Event"
                  className="w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCelebration;
