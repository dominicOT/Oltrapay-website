import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../features/Home/Hero";
import BusinessInfo from "../features/Home/BusinessInfo";
import TradeInfo from "../features/Home/TradeInfo";

const Home = () => {
  return (
    <>
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

          {/* Space between Hero and Business Info */}
        </div>
      </div>
      <div className="w-full mt-24 bg-[radial-gradient(ellipse_at_center,_#62CCA3,_#48A4BE_70%)] overflow-hidden">
        <BusinessInfo />
      </div>

      <div className="bg-white w-full mt-0 h-auto max-h-[400px]">
        <TradeInfo />
      </div>
    </>
  );
};

export default Home;
