import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 flex flex-col h-24 max-w-[1240px] mx-auto my-16 px-4 py-4 text-white bg-transparent text-xl">
      <div onClick={handleNav} className="flex m-10">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={`flex flex-col ${nav ? "block" : "hidden"}`}>
        <li key="Home" className="p-2">
          Home
        </li>
        <li key="About" className="p-2">
          About
        </li>
        <li key="FindUs" className="p-2">
          FindUs
        </li>
        <li key="Events" className="p-2">
          Events
        </li>
        <li key="Contact" className="p-2">
          Contact
        </li>
      </ul>
    </div>
  );
}
