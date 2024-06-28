import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Banner from "./assets/images/Banner.png";

export default function NavDropDown() {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const isHomePage = () => location.pathname === "/";
  const isMenuPage = () => location.pathname === "/menu";

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {nav && <div className="fixed inset-0 bg-black opacity-80 z-20"></div>}
      <div className="absolute top-6 flex justify-center z-8 ">
        <img className="w-1/3 sm:w-1/6" src={Banner} alt="banner" />
      </div>
      <div className="fixed top-0 z-20 flex flex-col max-w-[100px] text-white bg-transparent text-xl ">
        <div onClick={handleNav} className="flex mt-3 ml-3 left-0">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <ul className={`flex flex-col ml-2 ${nav ? "block" : "hidden"}`}>
          <li key="landing" className="p-2 drop-shadow-lg">
            {isHomePage() ? (
              <LinkScroll
                to="landing"
                smooth={true}
                duration={500}
                onClick={handleNav}
                className="drop-shadow-lg"
              >
                Home
              </LinkScroll>
            ) : (
              <LinkRouter to="/" onClick={handleNav}>
                Home
              </LinkRouter>
            )}
          </li>
          {isHomePage() && (
            <>
              <li key="About" className="ml-2 p-2 text-sm drop-shadow-lg">
                <LinkScroll
                  to="aboutus"
                  smooth={true}
                  duration={500}
                  onClick={handleNav}
                >
                  About Us
                </LinkScroll>
              </li>
              <li key="FindUs" className="ml-2 p-2 text-sm drop-shadow-lg">
                <LinkScroll
                  to="findus"
                  smooth={true}
                  duration={500}
                  onClick={handleNav}
                >
                  Find Us
                </LinkScroll>
              </li>
            </>
          )}

          <li key="Menu" className="p-2 drop-shadow-lg">
            <LinkRouter to="/menu" onClick={handleNav}>
              Menu
            </LinkRouter>
          </li>

          {isMenuPage() && (
            <>
              <li key="mains" className="ml-2 p-2 text-sm drop-shadow-lg">
                <LinkScroll
                  to="mains"
                  smooth={true}
                  duration={500}
                  onClick={handleNav}
                >
                  Mains
                </LinkScroll>
              </li>
              <li key="sides" className="ml-2 p-2 text-sm drop-shadow-lg">
                <LinkScroll
                  to="sides"
                  smooth={true}
                  duration={500}
                  onClick={handleNav}
                >
                  Side Dishes
                </LinkScroll>
              </li>
            </>
          )}

          <li key="Events" className="p-2 drop-shadow-lg">
            <LinkRouter to="/events" onClick={handleNav}>
              Events
            </LinkRouter>
          </li>

          <li key="Gallery" className="p-2 drop-shadow-lg">
            <LinkRouter to="/gallery" onClick={handleNav}>
              Gallery
            </LinkRouter>
          </li>

          <li key="enquire" className="p-2 drop-shadow-lg">
            <LinkRouter to="/enquire" onClick={handleNav}>
              Enquire
            </LinkRouter>
          </li>
        </ul>
      </div>
    </>
  );
}
