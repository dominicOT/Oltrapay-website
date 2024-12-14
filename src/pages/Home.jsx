import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../features/Home/Hero";

const Home = () => {
  return (
    <div className="relative">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary to-accent"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)" }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
