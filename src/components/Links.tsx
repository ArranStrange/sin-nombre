import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as LinkRouter, useLocation } from "react-router-dom";

const Links: React.FC = () => {
  const [nav, setNav] = useState(false);
  const controls = useAnimation();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isMenuPage = location.pathname === "/menu";
  const isGalleryPage = location.pathname === "/gallery";
  const isEventsPage = location.pathname === "/events";
  const isEnquirePage = location.pathname === "/enquire";

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
    <div className="mt-2 w-screen flex justify-center align-middle border-t-2 border-t-white ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
        ref={ref}
        id="Links"
        className="mt-6 pb-20 z-1 grid grid-cols-2 gap-4 justify-evenly items-end  mb-5 bg-transparent text-white"
      >
        {!isHomePage && (
          <LinkRouter to="/" onClick={handleNav}>
            <button className="max-w-[210px] min-w-[190px] ml-3 border rounded-xl sm:text-lg hover:text-orange hover:border-orange">
              HOME
            </button>
          </LinkRouter>
        )}
        {!isMenuPage && (
          <LinkRouter to="/menu" onClick={handleNav}>
            <button className="max-w-[210px] min-w-[190px] ml-3 border rounded-xl sm:text-lg hover:text-orange hover:border-orange">
              MENU
            </button>
          </LinkRouter>
        )}
        {!isEventsPage && (
          <LinkRouter to="/events" onClick={handleNav}>
            <button className="max-w-[220px] min-w-[190px] ml-3 border rounded-xl sm:text-lg hover:text-orange hover:border-orange">
              EVENTS
            </button>
          </LinkRouter>
        )}

        {!isGalleryPage && (
          <LinkRouter to="/gallery" onClick={handleNav}>
            <button className="max-w-[220px] min-w-[190px] ml-3 border rounded-xl sm:text-lg hover:text-orange hover:border-orange">
              GALLERY
            </button>
          </LinkRouter>
        )}
        {!isEnquirePage && (
          <LinkRouter to="/enquire" onClick={handleNav}>
            <button className="max-w-[220px] min-w-[190px] ml-3 border rounded-xl sm:text-lg hover:text-orange hover:border-orange">
              ENQUIRE
            </button>
          </LinkRouter>
        )}
      </motion.div>
    </div>
  );
};

export default Links;
