"use client";
import { useEffect, useState } from "react";

const slidesData = {
  captions: [
    "SheCanCode Alumnus",
    "SheCanCancode Bootcamp",
    "Inspiration and Testimonies",
  ],
  video: {
    type: "video",
    src: "https://res.cloudinary.com/drfzbtbzi/video/upload/v1730670533/igire-video.mp4",
  },
};

export default function Slideshow() {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCaptionIndex((prevIndex) => (prevIndex + 1) % slidesData.captions.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Video Section */}
      <div
        className="relative overflow-hidden shadow-lg"
        style={{ aspectRatio: "16/9" }}
      >
        <video
          src={slidesData.video.src}
          className="object-cover w-full h-full"
          onMouseEnter={(e) => {
            e.target.pause();
            handleMouseEnter();
          }}
          onMouseLeave={(e) => {
            e.target.play();
            handleMouseLeave();
          }}
          autoPlay
          muted
          loop
        />
        {/* Caption Section */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-4">
          {slidesData.captions[captionIndex]}
        </div>
      </div>

      {/* Caption Indicators */}
      <div className="flex justify-center mt-4">
        {slidesData.captions.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 mx-1 rounded-full bg-gray-100 transition duration-300 ease-in-out ${
              index === captionIndex ? "bg-orange-500" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
