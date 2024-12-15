import React from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../features/About/Hero";
import AboutDetails from "../features/About/AboutDetails";

const AboutUs = () => {
  return (
    <>
      <div className="relative">
        {/* Background */}
        <div className="absolute bg-accent top-0 left-0 w-full h-full md:bg-gradient-to-b md:from-primary md:to-accent"></div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <AboutHero />
        </div>
      </div>

      <div className="w-full">
        <AboutDetails />
      </div>
    </>
  );
};

export default AboutUs;
