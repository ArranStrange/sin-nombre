import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed w-screen bottom-0 left-0 z-5 flex flex-col text-white bg-transparent text-m">
      <div className="flex-grow">
        <div className="flex items-center justify-center  text-gray-300">
          {" "}
          <a href="https://www.facebook.com/SinNombreTaco/">
            <FaFacebookSquare size={30} className="m-4 drop-shadow-lg" />
          </a>
          <a href="https://www.instagram.com/sinnombretaco/?hl=en">
            <FaInstagram size={30} className="m-4 drop-shadow-lg" />
          </a>
          <FaTwitterSquare size={30} className="m-4 drop-shadow-lg" />
        </div>
      </div>

      <div className="text-white pb-2 mt-auto">
        <div className="container mx-auto text-center drop-shadow-lg ">
          &copy; 2024 Sin Nombre
        </div>
      </div>
    </footer>
  );
};

export default Footer;
