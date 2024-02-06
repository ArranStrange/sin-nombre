import React from "react";
import Logo from "./assets/images/Logo.png";
import LandingPageImage from "./assets/images/landing-no-text.png";

export default function Landing() {
  return (
    <div className="overflow-x-auto snap-x-mandatory h-screen">
      <div
        className="flex text-white justify-center items-center h-screen snap-start snap-align-start"
        style={{
          backgroundImage: `url(${LandingPageImage})`,
          backgroundSize: "cover",
        }}
      >
        <img
          src={Logo}
          className="pb-2 z-10 w-1/3 max-sm:w-1/3 max-lg:2/3"
          alt="Sin Nombre Logo"
        />
        {/* <h1 className="z-10 text-5xl items-center">Sin Nombre</h1> */}
      </div>
    </div>
  );
}
