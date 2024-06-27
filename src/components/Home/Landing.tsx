import Logo from "../assets/images/Logo.png";
import LandingPageImage from "../assets/images/landing-no-text.png";

export default function Landing() {
  return (
    <div id="landing" className="overflow-x-auto snap-x-mandatory h-screen">
      <div
        className="flex text-white justify-center items-center h-screen snap-start snap-align-start"
        style={{
          backgroundImage: `url(${LandingPageImage})`,
          backgroundSize: "cover",
        }}
      >
        <img
          src={Logo}
          className="pb-2 z-1 w-1/4 max-sm:w-2/4 max-lg:2/4 "
          alt="Sin Nombre Logo"
        />
      </div>
    </div>
  );
}
