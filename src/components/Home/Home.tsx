import { useEffect } from "react";
import AboutUs from "./AboutUs";
import FindUSCarousel from "./FindUsCarousel";
import Landing from "./Landing";
import { Helmet } from "react-helmet-async";
import Links from "../Links";

export default function Home() {
  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Sin Nombre Homepage</title>
        <meta
          name="description"
          content="Authentic Mexican Street Food based in Cardiff, Wales"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Landing />
      <AboutUs />
      <FindUSCarousel />
    </>
  );
}
