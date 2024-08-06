import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BeefTaco from "./assets/images/Menu/Beef Taco.png";
import FishTaco from "./assets/images/Menu/FishTaco.png";
import PorkBellyTaco from "./assets/images/Menu/PorkBellyTaco.png";
import LoadedFries from "./assets/images/Menu/BeefLoadedFries.png";
import Nachos from "./assets/images/Menu/Nachos.png";
import PorkBellyBites from "./assets/images/Menu/PorkBellyBites.png";
import Scallops from "./assets/images/Menu/Scallop.png";
import Prawns from "./assets/images/Menu/Prawn.png";
import LoadedHalloumi from "./assets/images/Menu/Loaded Halloumi Fries.png";
import PorkBellyBurrito from "./assets/images/Menu/pork burrito.png";
import BeefBurrito from "./assets/images/Menu/beef burrito.png";
import HalloumiTaco from "./assets/images/Menu/Halloumi Taco.png";
import BuffaloKingPrawns from "./assets/images/Menu/chiptole prawns.png";
import "../index.css";
import { Helmet } from "react-helmet-async";

export default function Menu() {
  const controls = useAnimation();

  // Refs and inView states for each menu item
  const [refBeefTaco, inViewBeefTaco] = useInView({ threshold: 0.3 });
  const [refFishTaco, inViewFishTaco] = useInView({ threshold: 0.3 });
  const [refPorkBellyTaco, inViewPorkBellyTaco] = useInView({ threshold: 0.3 });
  const [refLoadedFries, inViewLoadedFries] = useInView({ threshold: 0.3 });
  const [refNachos, inViewNachos] = useInView({ threshold: 0.3 });
  const [refPorkBellyBites, inViewPorkBellyBites] = useInView({
    threshold: 0.3,
  });
  const [refScallops, inViewScallops] = useInView({ threshold: 0.3 });
  const [refPrawns, inViewPrawns] = useInView({ threshold: 0.3 });
  const [refLoadedHalloumi, inViewLoadedHalloumi] = useInView({
    threshold: 0.3,
  });
  const [refPorkBellyBurrito, inViewPorkBellyBurrito] = useInView({
    threshold: 0.3,
  });
  const [refBeefBurrito, inViewBeefBurrito] = useInView({ threshold: 0.3 });
  const [refHalloumiTaco, inViewHalloumiTaco] = useInView({ threshold: 0.3 });
  const [refBuffaloKingPrawns, inViewBuffaloKingPrawns] = useInView({
    threshold: 0.3,
  });

  // useEffect to handle animations based on inView state for each item
  useEffect(() => {
    if (inViewBeefTaco) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewBeefTaco]);

  useEffect(() => {
    if (inViewFishTaco) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewFishTaco]);

  useEffect(() => {
    if (inViewPorkBellyTaco) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewPorkBellyTaco]);

  useEffect(() => {
    if (inViewLoadedFries) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewLoadedFries]);

  useEffect(() => {
    if (inViewNachos) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewNachos]);

  useEffect(() => {
    if (inViewPorkBellyBites) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewPorkBellyBites]);

  useEffect(() => {
    if (inViewScallops) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewScallops]);

  useEffect(() => {
    if (inViewPrawns) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewPrawns]);

  useEffect(() => {
    if (inViewLoadedHalloumi) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewLoadedHalloumi]);

  useEffect(() => {
    if (inViewPorkBellyBurrito) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewPorkBellyBurrito]);

  useEffect(() => {
    if (inViewBeefBurrito) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewBeefBurrito]);

  useEffect(() => {
    if (inViewHalloumiTaco) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewHalloumiTaco]);

  useEffect(() => {
    if (inViewBuffaloKingPrawns) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewBuffaloKingPrawns]);

  return (
    <>
      <Helmet>
        <title>Sin Nombre Menu</title>
        <meta
          name="description"
          content="Cardiff Based Mexican Street Food Menu Page, See Cardiffs Best Mexican Street Food Menu"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div
        id="mains"
        className=" flex flex-wrap justify-center items-center gap-4"
      >
        <h1 className="text-xl mt-[75px] text-white text-center pb-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
          Mains
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Beef Taco */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewBeefTaco ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refBeefTaco}
            id="Beef Taco"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Achiote Beef Taco
            </h1>
            <img
              src={BeefTaco}
              alt="Beef Taco"
              className="rounded-3xl overflow-hidden"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty drop-shadow-lg">
                Achiote marinated Pulled Beef Served with Roast Tomatillo Salsa,
                Chimichurri, Guacamole & Blue Corn Tortillas
              </h2>
            </div>
          </motion.div>

          {/* Fish Taco */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewFishTaco ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refFishTaco}
            id="Fish Taco"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Battered Sea Bass Taco
            </h1>
            <img
              src={FishTaco}
              alt="Sea Bass Taco"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty drop-shadow-lg">
                Smoked paprika Tempura Cornish sea bass, roast tomatillo salsa,
                guacamole, chimichurri & blue corn tortillas
              </h2>
            </div>
          </motion.div>

          {/* Pork Belly Taco */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewPorkBellyTaco ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refPorkBellyTaco}
            id="Pork Belly Taco"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Confit Pork Belly & Pickled Squid Taco
            </h1>
            <img
              src={PorkBellyTaco}
              alt="Pork Belly Taco"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                Confit Pork Belly with a chipotle honey glaze cooked over coal,
                pickled squid served with a caper Pico de gallo blue corn
                tortillas & salsa
              </h2>
            </div>
          </motion.div>

          {/* Halloumi Taco */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewHalloumiTaco ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refHalloumiTaco}
            id="Halloumi Taco"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Smoked Chiptole & Tomato Halloumi Taco
            </h1>
            <img
              src={HalloumiTaco}
              alt="Halloumi Taco"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                Smoked Chiptole & Tomato Marinaded Halloumi served with Roast
                Tomatillo Salsa, Chimichurri, Guacamole & Blue Corn Tortillas
              </h2>
            </div>
          </motion.div>

          {/* Pork Belly Burrito */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewPorkBellyBurrito ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refPorkBellyBurrito}
            id="Pork Belly Burrito"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Confit Pork Belly Burrito
            </h1>
            <img
              src={PorkBellyBurrito}
              alt="Pork Belly Burrito"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                Confit Pork Belly with a chipotle honey glaze cooked over coal,
                served with smoked paprika & coriander rice served in a flour
                tortilla, with salsa, pickles and lime
              </h2>
            </div>
          </motion.div>

          {/* Beef Burrito */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewBeefBurrito ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refBeefBurrito}
            id="Beef Burrito"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Achiote Beef Burrito
            </h1>
            <img
              src={BeefBurrito}
              alt="Beef Burrito"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                Spiced Pulled Beef, smoked Paprika & coriander rice served in a
                flour tortilla, with salsa, pickles & lime
              </h2>
            </div>
          </motion.div>
        </div>

        <h1 className="text-xl mt-[75px] text-white text-center pb-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
          Sides
        </h1>
        <div
          id="sides"
          className="flex flex-wrap justify-center items-center gap-4"
        >
          {/* Loaded Fries */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewLoadedFries ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refLoadedFries}
            id="Loaded Fries"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5 min-w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Achiote Beef Loaded Fries
            </h1>
            <img
              src={LoadedFries}
              alt="Beef Loaded Fries"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                Achiote marinated pulled beef, served with Garlic Aioli, Spiced
                Ketchup & Chimichurri Loaded on top of fries.
              </h2>
            </div>
          </motion.div>

          {/* Nachos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewNachos ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refNachos}
            id="Nachos"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Nachos
            </h1>
            <img
              src={Nachos}
              alt="Nachos"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                Fresh cooked tortillas, tomatillo salsa, guacamole, spiced
                paprika salt, nacho cheese sauce & pickled jalapeno
              </h2>
            </div>
          </motion.div>

          {/* Pork Belly Bites */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewPorkBellyBites ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refPorkBellyBites}
            id="Pork Belly Bites"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Crispy Pork Belly Bites
            </h1>
            <img
              src={PorkBellyBites}
              alt="Pork Belly Bites"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                Crispy Pork Belly Bites with Chipotle Honey and Smoked Paprika
                Dip
              </h2>
            </div>
          </motion.div>

          {/* Scallops */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewScallops ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refScallops}
            id="Scallops"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              BBQ Scallop in the Shell
            </h1>
            <img
              src={Scallops}
              alt="Scallop"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                BBQ Scallop Cooked Over coals with Chipotle, Marrow & Seasalt
                butter and a Pickled Fennel and Caper Slaw
              </h2>
            </div>
          </motion.div>

          {/* Prawns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewPrawns ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refPrawns}
            id="Prawns"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              BBQ Chiptole Prawns
            </h1>
            <img
              src={Prawns}
              alt="Prawns"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                BBQ Scallop Cooked Over coals with Chipotle, Marrow & Seasalt
                butter and a Pickled Fennel and Caper Slaw
              </h2>
            </div>
          </motion.div>

          {/* Loaded Halloumi */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewLoadedHalloumi ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refLoadedHalloumi}
            id="Loaded Halloumi"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Loaded Halloumi Fries
            </h1>
            <img
              src={LoadedHalloumi}
              alt="Halloumi Fries"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                Halloumi Fries with Guacamole, Chimichurri, Parmesan & Spiced
                Ketchup
              </h2>
            </div>
          </motion.div>

          {/* Buffalo King Prawns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inViewBuffaloKingPrawns ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={refBuffaloKingPrawns}
            id="Buffalo King Prawns"
            className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
          >
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
              Buffalo King Prawns
            </h1>
            <img
              src={BuffaloKingPrawns}
              alt="Buffalo King Prawns"
              className="rounded-3xl overflow-hidden "
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
              <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
                Buffalo King Prawns with a sweet potato and toasted seed Slaw
                and Salsa Macha dressing
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
