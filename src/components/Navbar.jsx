import { ChevronDown } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" text-white py-4">
      <div className="container mx-auto flex flex-row lg:flex-row items-center px-6 justify-between">
        <h1 className="text-2xl font-bold text-white">OLTRAPAY</h1>
        <div className="flex flex-row justify-between gap-12">
          <ul className="hidden md:flex items-center space-x-12">
            <li className=" cursor-pointer">About Us</li>
            <li className=" cursor-pointer">Services</li>
            <li className=" cursor-pointer">Contact Us</li>
            <li className=" cursor-pointer flex flex-row gap-2 items-center">
              <span>More</span>
              <ChevronDown size={15} className="mt-1" />
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-between">
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <button className="bg-white hover:cursor-pointer text-black px-4 py-1 text-sm">
                Sign Up
              </button>
            </li>
            <li>
              <button className="  text-white bg-black px-4 py-1">Login</button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button className="text-gray-300">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
