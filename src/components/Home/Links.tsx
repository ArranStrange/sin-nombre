import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as LinkRouter } from "react-router-dom";

const Links: React.FC = () => {
  const [nav, setNav] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
        ref={ref}
        id="Links"
        className="z-1  flex flex-col justify-center align-start h-[250px] w-full bg-transparent"
      >
        <div className="z-1 mt-[-100px] flex flex-row justify-center items-end mb-5  bg-transparent text-white">
          <LinkRouter to="/menu" onClick={handleNav}>
            <button className="max-max-w-[210px] min-w-[190px] ml-3 border rounded-xl sm:text-lg hover:text-orange hover:border-orange">
              MENU
            </button>
          </LinkRouter>
          <LinkRouter to="/events" onClick={handleNav}>
            <button className="max-w-[220px] min-w-[190px] ml-3 border rounded-xl sm:text-lg hover:text-orange hover:border-orange">
              EVENTS
            </button>
          </LinkRouter>
        </div>
        <div className="z-1 flex flex-row justify-center items-start  bg-transparent text-white">
          <LinkRouter to="/gallery" onClick={handleNav}>
            <button className="max-w-[220px] min-w-[190px] ml-3 border rounded-xl sm:text-lg hover:text-orange hover:border-orange">
              GALLERY
            </button>
          </LinkRouter>
          <LinkRouter to="/enquire" onClick={handleNav}>
            <button className="max-w-[220px] min-w-[190px] ml-3 border rounded-xl sm:text-lg hover:text-orange hover:border-orange">
              ENQUIRE
            </button>
          </LinkRouter>
        </div>
      </motion.div>
    </>
  );
};

export default Links;
