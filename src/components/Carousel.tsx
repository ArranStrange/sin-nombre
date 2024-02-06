import React, { useState, useEffect } from "react";
import BigBanquet from "./assets/images/BigBanquet.png";
import ForestFeastival from "./assets/images/ForestFeastival.png";
import StickyFingers from "./assets/images/StickyFingers.png";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images: string[] = [BigBanquet, ForestFeastival, StickyFingers];
  const imageTexts: string[] = [
    "Street Food Circus",
    "Street Food Circus",
    "Sticky Fingers",
  ];
  const imageTexts3: string[] = ["Caldicot Castle", "Merthyr Mawr", "Roath"];
  const imageTexts2: string[] = ["Big Banquet", "Forest Feastival", "Cardiff"];

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
    const imageRotation = setInterval(handleNext, 10000);
    return () => clearInterval(imageRotation);
  }, []);

  return (
    <div className="block h-screen text-white bg-black overflow-hidden relative">
      <div className="flex flex-row justify-center z-10 w-full absolute top-0">
        <HiArrowSmLeft onClick={handlePrevious} size={30} className="mt-2" />
        <HiArrowSmRight onClick={handleNext} size={30} className="mt-2" />
      </div>
      <div className="flex justify-center z-10 w-full absolute top-10">
        <h1>Where to Find Us</h1>
      </div>
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <img
          alt="slideshow"
          src={images[currentIndex]}
          className="object-cover h-full w-full"
        />
      </div>
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-screen">
        <h2 className="text-white z-10 text-xl">{imageTexts2[currentIndex]}</h2>
        <h1 className=" text-white z-10 font-bold text-[30px]">
          {imageTexts[currentIndex]}
        </h1>
        <h2 className="text-white z-10 text-xl">{imageTexts3[currentIndex]}</h2>
      </div>
    </div>
  );
};

export default Carousel;
