import { useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import LandingPageImage from "../assets/images/landing-no-text-2.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Landing() {
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

  return (
    <div id="landing" className="overflow-x-auto snap-x-mandatory h-screen">
      <div
        className="flex text-white justify-center items-center h-screen snap-start snap-align-start "
        style={{
          backgroundImage: `url(${LandingPageImage})`,
          backgroundSize: "cover",
        }}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2 }}
          ref={ref}
          src={Logo}
          className="pb-2 z-10 w-1/4 max-sm:w-2/4 max-lg:2/4 "
          alt="Sin Nombre Logo"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
      </div>
    </div>
  );
}
