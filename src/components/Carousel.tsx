import React, { useState, useEffect } from "react";
import BigBanquet from "./assets/images/BigBanquet.png";
import ForestFeastival from "./assets/images/ForestFeastival.png";
import StickyFingers from "./assets/images/StickyFingers.png";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: string[] = [BigBanquet, ForestFeastival, StickyFingers];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 4000);
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once on component mount

  return (
    <div className="block justify-center items-center max-h-screen text-white bg-black">
      {/* SLIDESHOW */}
      <div className="top-0 max-h-screen">
        <h1 className="flex justify-center text-xl z-10 absolute w-full">
          Where To Find Us
        </h1>
        <img
          alt="slideshow"
          src={images[currentIndex]}
          className="max-w-1/2 sm:w-full max-h-screen"
        />
      </div>

      {/* BUTTONS */}
      {/* <div className="flex mt-4 bottom-0">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Carousel;
