import { useEffect } from "react";
import AboutUs from "./AboutUs";
import FindUSCarousel from "./FindUsCarousel";
import Landing from "./Landing";
import Links from "./Links";

export default function Home() {
  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Landing />
      <AboutUs />
      <FindUSCarousel />
    </>
  );
}
