import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-col min-h-screen items-center justify-center">
      {/* Your page content goes here */}
      <div className="flex-grow">
        <div className="flex items-center justify-center min-w-[200px] mx-6 text-gray-300">
          {" "}
          <FaFacebookSquare size={30} className="m-4" />
          <FaInstagram size={30} className="m-4" />
          <FaTwitterSquare size={30} className="m-4" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pb-2 mt-auto">
        <div className="container mx-auto text-center">
          {/* Footer content goes here */}
          &copy; 2024 Sin Nombre
        </div>
      </footer>
    </div>
  );
};

export default Footer;
