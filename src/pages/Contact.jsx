import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactHero from "../features/Contact/ContactHero";
import ContactCard from "../features/Contact/ContactCard";
import ContactDetails from "../features/Contact/ContactDetails";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="relative flex-1">
        {/* Background */}
        <div className="absolute bg-accent top-0 left-0 w-full h-full md:bg-gradient-to-b md:from-primary md:to-accent"></div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <ContactHero />
        </div>
      </div>
      <div className="bg-white">
        <ContactCard />

        <ContactDetails />
      </div>

      {/* Footer */}
      <footer className="bg-[#48A4BE] w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
