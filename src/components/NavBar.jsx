import React from "react";
import logo from "../assets/logo (1).png";
export const NavBar = () => {
  return (
    <nav className="bg-[#373a3c] ">
      <div className="container mx-auto flex items-center justify-between py-3 px-48">
        <a href="/">
          <img src={logo} alt="logo" className="w-9" />
        </a>
        <button
          className="lg:hidden text-white focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
        <div
          className="hidden w-full lg:flex lg:items-center lg:w-auto"
          id="navbarNav"
        >
          <ul className="lg:flex lg:justify-end lg:space-x-6">
            <li className="nav-item">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-300 hover:text-white"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-300 hover:text-white"
              >
                Team
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-300 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
