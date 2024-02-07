import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function NavDropDown() {
  const [nav, setNav] = useState(false);
  const [contact, setContact] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleContact = () => {
    setContact(!contact);
  };

  return (
    <div className="fixed top-0 z-9 flex flex-col  max-w-[100px]  text-white bg-transparent text-xl">
      <div onClick={handleNav} className="flex mt-3 ml-3 left-0">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={`flex flex-col ml-2 ${nav ? "block" : "hidden"}`}>
        <li key="Home" className="p-2">
          Home
        </li>
        <li key="About" className="p-2">
          About
        </li>
        <li key="Menu" className="p-2">
          Menu
        </li>
        <li key="FindUs" className="p-2">
          Find Us
        </li>
        <li key="Contact" className="p-2">
          Contact
        </li>
      </ul>
    </div>
  );
}
