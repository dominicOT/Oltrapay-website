import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  return (
    <nav className="text-white py-4">
      <div className="container mx-auto flex flex-row lg:flex-row items-center px-6 justify-between">
        <a className="text-2xl font-bold text-white" href="/">
          OLTRAPAY
        </a>
        <div className="hidden md:flex flex-row justify-between gap-12">
          <ul className="flex items-center space-x-12">
            <li className="cursor-pointer">
              <a href="/about">About Us</a>
            </li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="cursor-pointer flex flex-row gap-2 items-center">
              <span>More</span>
              <ChevronDown size={15} className="mt-1" />
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-row justify-between">
          <ul className="flex items-center space-x-4">
            <li>
              <button className="bg-white hover:cursor-pointer text-black px-4 py-1 text-sm">
                Sign Up
              </button>
            </li>
            <li>
              <a className="text-white bg-black px-4 py-1" href="/sign-in">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button className="text-gray-300" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-accent text-white px-6 py-4">
          <ul className="space-y-4">
            <li className="cursor-pointer">
              <a href="/about">About Us</a>
            </li>{" "}
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">
              <a href="/contact">Contact Us</a>
            </li>{" "}
            <li className="cursor-pointer flex flex-row gap-2 items-center">
              <span>More</span>
              <ChevronDown size={15} className="mt-1" />
            </li>
            <li>
              <button className="bg-white hover:cursor-pointer text-black px-4 py-2 rounded-md text-sm w-full">
                Sign Up
              </button>
            </li>
            <li>
              <a
                className="bg-white hover:cursor-pointer text-black px-4 py-2 rounded-md text-sm w-full"
                href="/sign-in"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
