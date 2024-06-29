import { useState } from "react";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { MdMessage, MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { SiGoogleforms } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagram,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactUsDropdown() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="fixed top-0 right-0 z-20  ">
      <div className="relativ ">
        {dropdown && (
          <div className="bg-black opacity-80 w-screen h-screen flex flex-col items-end pt-14 pr-4">
            <a
              href="https://www.facebook.com/SinNombreTaco/"
              onClick={handleDropdown}
            >
              <FaFacebookSquare
                size={40}
                style={{ zIndex: 60, color: "white" }}
              />
            </a>
            <a href="https://www.instagram.com/sinnombretaco/?hl=en">
              <FaInstagram
                size={40}
                style={{ zIndex: 60, color: "white", marginTop: "5px" }}
              />
            </a>
            <a href="https://twitter.com/sinnombretaco?lang=en">
              <RiTwitterXFill
                size={40}
                style={{ zIndex: 60, color: "white", marginTop: "5px" }}
              />
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B447710562967&app=facebook&entry_point=page_cta">
              <FaWhatsapp
                size={40}
                style={{
                  zIndex: 60,
                  color: "white",
                  marginTop: "5px",
                  boxShadow: "10px 10px 10px rgba(0, 0, 0, 0)",
                }}
              />
            </a>
            <a href="https://www.facebook.com/messages/t/109799927883360">
              <FaFacebookMessenger
                size={40}
                style={{ zIndex: 60, color: "white", marginTop: "5px" }}
              />
            </a>
            <a href="mailto:neilgrimble@gmail.com">
              <MdOutlineMailOutline
                size={45}
                style={{ zIndex: 60, color: "white", marginTop: "5px" }}
              />
            </a>
            <LinkRouter to="/enquire" onClick={handleDropdown}>
              <SiGoogleforms
                size={42}
                style={{ zIndex: 60, color: "white", marginTop: "5px" }}
              />
            </LinkRouter>
          </div>
        )}
        <div
          className="top-0 right-0 mt-3 mr-3 absolute z-50"
          onClick={handleDropdown}
        >
          {dropdown ? (
            <AiOutlineClose
              size={30}
              style={{ zIndex: 60, color: "white", marginRight: "10px" }}
            />
          ) : (
            <MdMessage
              size={35}
              style={{ zIndex: 60, color: "white", marginRight: "5px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
