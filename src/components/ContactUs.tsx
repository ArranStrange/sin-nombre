import { useState } from "react";
import { MdMessage } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

export default function ContactUsDropdown() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="fixed top-0 right-0 z-20">
      <div className="relative">
        {dropdown && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-95 z-40 flex justify-center items-center">
            <div className="flex flex-row justify-center item-center h-screen">
              <fieldset className="flex flex-col justify-center text-center item-center">
                <label id="name" className="text-white mr-8 ">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="text-center m-3 w-[250px] p-3 text-white  bg-black bg-transparent border border-white-500 rounded-[10px]"
                />
                <label id="name" className="text-white">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-center m-3 w-[250px] p-3 text-white bg-transparent border border-white-500 rounded-[10px]"
                />
                <label id="name" className="text-white">
                  Telephone Number:
                </label>
                <input
                  type="tel"
                  id="tel"
                  className="text-center m-3 w-[250px] p-3 text-white bg-transparent border border-white-500 rounded-[10px]"
                />
                <label id="details" className="text-white">
                  Message:
                </label>
                <input
                  type="text"
                  id="details"
                  className="text-center m-3 w-[250px] h-[200px] p-3 text-white bg-black bg-transparent border border-white-500 rounded-[10px]"
                />
                <button className="text-center mx-auto m-1 p-2 w-[100px] text-black bg-white bg-transparent border border-white-500 rounded-[10px]">
                  Submit
                </button>
              </fieldset>
            </div>
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
