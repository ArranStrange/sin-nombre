import React, { useState, useEffect, useRef } from "react";
import BigBanquet from "../assets/images/BigBanquet.png";
import ForestFeastival from "../assets/images/ForestFeastival.png";
import StickyFingers from "../assets/images/StickyFingers.png";
import RoyalWelshShow from "../assets/images/RoyalWelshShow.png";
import RhostioCoffee from "../assets/images/rhostio.png";
import IntoTheWild from "../assets/images/IntoTheWild.png";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FindUSCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images: string[] = [
    BigBanquet,
    IntoTheWild,
    ForestFeastival,
    StickyFingers,
    RoyalWelshShow,
    RhostioCoffee,
  ];
  const imageTexts: string[] = [
    "Street Food Circus",
    "Into The Wild",
    "Street Food Circus",
    "Sticky Fingers",
    "The Royal Welsh",
    "Rhostio",
  ];
  const imageTexts3: string[] = [
    "Caldicot Castle",
    "Sussex",
    "Merthyr Mawr",
    "Roath",
    "Llanelwedd",
    "Roath",
  ];
  const imageTexts2: string[] = [
    "Big Banquet",
    "Chiddinglye Estate",
    "Forest Feastival",
    "Cardiff",
    "Powys",
    "Cardiff",
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handlePrevious = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear interval before changing index
    }
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
    startInterval(); // Restart interval after changing index
  };

  const handleNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear interval before changing index
    }
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
    startInterval(); // Restart interval after changing index
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="findus"
      className="block h-screen text-white bg-black border-b-2 border-white overflow-hidden relative"
    >
      <div className="flex flex-row justify-center z-10 w-full absolute top-0">
        <HiArrowSmLeft onClick={handlePrevious} size={30} className="mt-2" />
        <HiArrowSmRight onClick={handleNext} size={30} className="mt-2" />
      </div>

      <div className="flex justify-center z-10 w-full absolute top-10 drop-shadow-lg">
        <h1>Where To Find Us</h1>
      </div>

      <div className="image-container absolute inset-0 flex justify-center items-center overflow-hidden">
        <img
          alt="slideshow"
          src={images[currentIndex]}
          className="object-cover h-full w-full drop-shadow-lg"
        />
      </div>
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-screen">
        <h2 className="text-white z-10 text-xl drop-shadow-lg">
          {imageTexts2[currentIndex]}
        </h2>
        <h1 className="text-white z-10 font-bold text-[30px] drop-shadow-lg">
          {imageTexts[currentIndex]}
        </h1>
        <h2 className="text-white z-10 text-xl drop-shadow-lg">
          {imageTexts3[currentIndex]}
        </h2>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
    </motion.div>
  );
};

export default FindUSCarousel;
