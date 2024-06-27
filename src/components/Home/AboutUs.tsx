import Knives from "../assets/images/Knives.png";
import Logo3 from "../assets/images/Logo3.png";

export default function AboutUs() {
  return (
    <div id="aboutus" className="flex flex-col h-screen w-full items-center">
      {/* <img
        src={Knives}
        alt="Sin Nombre Knives image"
        className=" w-[150px] mt-[-30px]"
      /> */}
      <div className="z-1 flex flex-row justify-center items-center lg:w-[50%] sm:w-[80%] h-[100%] bg-black text-white ">
        <h1 className="hover:text-orange w-1/2 ml-10">
          WEDDINGS <br /> FESTIVALS <br />
          POP-UPS
          <br /> PRIVATE HIRE
        </h1>
        <h2 className="m-10 text-pretty w-1/2 text-justify">
          Authentic Mexican flavours. Welsh ingredients. Cooked over fire.{" "}
          Maecenas quis ornare dui, et faucibus felis. Maecenas sit amet
          pulvinar tellus, placerat malesuada diam.
        </h2>
      </div>
    </div>
  );
}
