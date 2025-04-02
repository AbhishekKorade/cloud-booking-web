"use client";
import React from "react";
import YouTube from 'react-youtube';

const videos = [
  { id: '1', videoId: 'VxvhPayOzGA' }, // Replace with your video IDs
  { id: '2', videoId: 'cQWHB8hVpo0' },
  { id: '3', videoId: 'qPrF4rPgjHo' },
  { id: '4', videoId: 'zRtksRIP5Kc' },
  { id: '5', videoId: 'MaA5K_Q3Abg' },
  { id: '6', videoId: 'i7RVjW8-c1k' },
  { id: '7', videoId: '_hrKzNQ8Vpw' },
  { id: '8', videoId: 'XgkVKpMqb4w' },
];

const Video = () => {
  return (
    <div className="mt-4 mx-4 md:mx-8 lg:mx-12">
      <h4 className="text-4xl text-blue-900 text-center font-bold">
      Video Gallery
      </h4>
      <p className="italic text-center text-gray-600">
      Embrace the Power of Moving Pictures: Explore Our Video Gallery and Get Enchanted by Captivating Moments in Motion.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
        {videos.map((video) => (
          <div key={video.id} className="aspect-w-16 aspect-h-9">
            <YouTube videoId={video.videoId} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
