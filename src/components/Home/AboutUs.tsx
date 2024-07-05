import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "./AboutUsPhotos";

const AboutUs: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const defaultText =
    "Authentic Mexican flavours. Welsh ingredients. Cooked over fire.";

  const texts: string[] = [
    "Bespoke catering, we work closely with our couples to make their vision a reality. Mexican wedding catering prepared with care to make your day memorable.",
    "Bringing years of experience in the festival circuit, from small independent festivals to national events, we've got the tacos covered.",
    "Kitchen Takeovers, one-off events and long-term residencies. Authentic Mexican Street Food brought to you.",
    "Tailored menus for private or corporate events. Fresh ingredients, real Mexican flavours, cooked with flames.",
  ];

  const [currentText, setCurrentText] = useState<string>(defaultText);
  const [currentImages, setCurrentImages] = useState<string[]>(images[1]);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setCurrentText(texts[index]);
    setCurrentImages(images[index]);
    setSelectedButton(index);
  };

  const formatTextWithLineBreaks = (text: string): string => {
    return text.split(". ").join(".<br />");
  };

  return (
    <div className="flex flex-col items-center justify-evenly">
      <motion.div
        className="flex flex-row justify-evenly items-center w-screen"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
        ref={ref}
      >
        <div className="scrolling-wrapper overflow-hidden h-44 w-screen">
          <div className="scrolling-content gap-2">
            {currentImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="about us images"
                className="h-auto border-2 border-white rounded-3xl"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div
        id="aboutus"
        className="flex flex-col h-[400px] w-full bg-black items-center border-b-2 border-b-white"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2 }}
          ref={ref}
          className="mt-[-25px] mb-[-25px] z-1 flex flex-row justify-evenly items-center lg:w-[90%] sm:w-[50%] h-2/3 bg-transparent text-white"
        >
          <h1
            className="text-xl sm:w-[90%] lg:w-[70%] text-center text-wrap"
            dangerouslySetInnerHTML={{
              __html: formatTextWithLineBreaks(currentText),
            }}
          ></h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2 }}
          ref={ref}
          className="z-1 flex flex-row justify-center items-start mb-5 sm:w-[70%] lg:w-[50%] bg-transparent text-white"
        >
          <button
            className={`max-max-w-[210px] min-w-[190px] h-[32px] ml-3 border rounded-xl ${
              selectedButton === 0
                ? "text-orange border-orange"
                : "hover:text-orange hover:border-orange"
            }`}
            onClick={() => handleClick(0)}
          >
            WEDDINGS
          </button>
          <button
            className={` max-w-[220px] min-w-[190px] h-[32px] ml-3 border rounded-xl sm:text-lg ${
              selectedButton === 1
                ? "text-orange border-orange"
                : "hover:text-orange hover:border-orange"
            }`}
            onClick={() => handleClick(1)}
          >
            FESTIVALS
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2 }}
          ref={ref}
          className="z-1 flex flex-row justify-center items-start sm:w-[70%] lg:w-[50%] bg-transparent text-white"
        >
          <button
            className={`max-w-[220px] min-w-[190px] h-[32px] ml-3 border rounded-xl sm:text-lg ${
              selectedButton === 2
                ? "text-orange border-orange"
                : "hover:text-orange hover:border-orange"
            }`}
            onClick={() => handleClick(2)}
          >
            POP-UPS
          </button>
          <button
            className={`max-w-[220px] min-w-[190px] h-[32px] ml-3 border rounded-xl sm:text-lg ${
              selectedButton === 3
                ? "text-orange border-orange"
                : "hover:text-orange hover:border-orange"
            }`}
            onClick={() => handleClick(3)}
          >
            PRIVATE EVENTS
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
