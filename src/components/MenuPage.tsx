import React from "react";
import BeefTaco from "./assets/images/Menu/Beef Taco.png";
import FishTaco from "./assets/images/Menu/FishTaco.png";
import PorkBellyTaco from "./assets/images/Menu/PorkBellyTaco.png";
import LoadedFries from "./assets/images/Menu/BeefLoadedFries.png";
import Nachos from "./assets/images/Menu/Nachos.png";
import PorkBellyBites from "./assets/images/Menu/PorkBellyBites.png";
import Scallops from "./assets/images/Menu/Scallop.png";
import Prawns from "./assets/images/Menu/Prawn.png";
import LoadedHalloumi from "./assets/images/Menu/Loaded Halloumi Fries.png";
import MenuBackground from "./assets/images/Menu Background.png";
import "../index.css";

export default function Menu() {
  return (
    <div
      id="Tacos"
      className="menu-container relative pt-14 overflow-x-scroll"
      style={{
        backgroundImage: `url(${MenuBackground})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-xl text-white text-center pb-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
        Tacos
      </h1>
      <div
        id="mains"
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <div
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
        </div>

        <div
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
        </div>

        <div
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
        </div>
      </div>

      {/* SIDES */}
      <h1 className="text-xl text-white text-center pb-2 pt-5 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
        Side Dishes
      </h1>
      <div
        id="sides"
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <div
          id="Loaded Fries"
          className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
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
            <h2 className="w-2/3 text-pretty drop-shadow-lg">
              Pulled Beef Loaded Fries. Served with Garlic Aioli, Spiced Ketchup
              & Chimichurri.
            </h2>
          </div>
        </div>

        <div
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
            <h2 className="w-2/3 text-pretty drop-shadow-lg">
              Fresh cooked tortillas, tomatillo salsa, guacamole, spiced paprika
              salt, nacho cheese sauce & pickled jalapeno
            </h2>
          </div>
        </div>

        <div
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
              Crispy Pork Belly Bites with Chipotle Honey and Smoked Paprika Dip
            </h2>
          </div>
        </div>

        <div
          id="Scallops"
          className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
        >
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
            BBQ Scallop in the Shell
          </h1>
          <img
            src={Scallops}
            alt="BBQ Scallop in the Shell"
            className="rounded-3xl overflow-hidden "
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
            <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
              BBQ Scallop Cooked Over coals with Chipotle, Marrow & Seasalt
              butter and a Pickled Fennel and Caper Slaw
            </h2>
          </div>
        </div>

        <div
          id="Prawns"
          className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
        >
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
            BBQ Prawns
          </h1>
          <img
            src={Prawns}
            alt="BBQ Prawn"
            className="rounded-3xl overflow-hidden "
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
            <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
              BBQ Scallop Cooked Over coals with Chipotle, Marrow & Seasalt
              butter and a Pickled Fennel and Caper Slaw
            </h2>
          </div>
        </div>

        <div
          id="Loaded Halloumi"
          className="menu-item relative group flex justify-center sm:w-1/4 md:w-1/5 lg:w-1/5"
        >
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
            Loaded Halloumi Fries
          </h1>
          <img
            src={LoadedHalloumi}
            alt="Loaded Halloumi"
            className="rounded-3xl overflow-hidden "
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-85 rounded-3xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl">
            <h2 className="w-2/3 text-pretty pt-2 drop-shadow-lg">
              Halloumi Fries with Guacamole, Chimichurri, Parmesan & Spiced
              Ketchup
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
