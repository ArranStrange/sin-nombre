import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

export default function ContactUsDropdown() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="fixed top-0 right-0 z-50">
      <div className="relative">
        {dropdown && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black z-40 flex justify-center items-center">
            {/* FORM GOES HERE */}
            <div className="text-white">Your form content here</div>
          </div>
        )}
        <div
          className="top-0 right-0 mt-3 mr-3 absolute z-50"
          onClick={handleDropdown}
        >
          {dropdown ? (
            <AiOutlineClose size={30} style={{ zIndex: 60, color: "white" }} />
          ) : (
            <MdMessage size={35} style={{ zIndex: 60, color: "white" }} />
          )}
        </div>
      </div>
    </div>
  );
}
