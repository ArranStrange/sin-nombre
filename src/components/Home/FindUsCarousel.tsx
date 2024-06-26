import React, { useState, useEffect } from "react";
import BigBanquet from "../assets/images/BigBanquet.png";
import ForestFeastival from "../assets/images/ForestFeastival.png";
import StickyFingers from "../assets/images/StickyFingers.png";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

const FindUSCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images: string[] = [BigBanquet, ForestFeastival, StickyFingers];
  const imageTexts: string[] = [
    "Street Food Circus",
    "Street Food Circus",
    "Sticky Fingers",
  ];
  const imageTexts3: string[] = ["Caldicot Castle", "Merthyr Mawr", "Roath"];
  const imageTexts2: string[] = ["Big Banquet", "Forest Feastival", "Cardiff"];
  let interval: NodeJS.Timeout;

  useEffect(() => {
    startInterval();
    return () => clearInterval(interval);
  }, []);

  const startInterval = () => {
    interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
  };

  const handlePrevious = () => {
    clearInterval(interval); // Clear interval before changing index
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
    startInterval(); // Restart interval after changing index
  };

  const handleNext = () => {
    clearInterval(interval); // Clear interval before changing index
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
    startInterval(); // Restart interval after changing index
  };

  return (
    <div
      id="findus"
      className="block h-screen text-white bg-black overflow-hidden relative"
    >
      <div className="flex flex-row justify-center z-10 w-full absolute top-0">
        <HiArrowSmLeft onClick={handlePrevious} size={30} className="mt-2" />
        <HiArrowSmRight onClick={handleNext} size={30} className="mt-2" />
      </div>
      <div className="flex justify-center z-10 w-full absolute top-10 drop-shadow-lg">
        <h1>Where To Find Us</h1>
      </div>
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <img
          alt="slideshow"
          src={images[currentIndex]}
          className="object-cover h-full w-full drop-shadow-lg"
        />
      </div>
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-screen">
        <h2 className="text-white z-9 text-xl drop-shadow-lg">
          {imageTexts2[currentIndex]}
        </h2>
        <h1 className="text-white z-9 font-bold text-[30px] drop-shadow-lg">
          {imageTexts[currentIndex]}
        </h1>
        <h2 className="text-white z-9 text-xl drop-shadow-lg">
          {imageTexts3[currentIndex]}
        </h2>
      </div>
    </div>
  );
};

export default FindUSCarousel;
