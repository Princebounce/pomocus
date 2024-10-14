import React, { useState } from "react";
import { Link as RouterScrollLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile menu icons
import Home from "../Home/Home";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Timer from "../Timer/Timer";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAnchor = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
    setIsOpen(false); // Close menu after click on mobile
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-slate-800 py-4 md:px-10 px-7">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            {/* SVG for logo */}
            <svg
              id="logo-83"
              width="30"
              height="25"
              viewBox="0 0 40 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#15858f"
                d="M25 30C26.3132 30 27.6136 29.7413 28.8268 29.2388C30.0401 28.7362 31.1425 27.9997 32.0711 27.0711C32.9997 26.1425 33.7362 25.0401 34.2388 23.8268C34.7413 22.6136 35 21.3132 35 20C35 16.0218 33.4196 12.2064 30.6066 9.3934C27.7936 6.58035 23.9782 5 20 5C16.0218 5 12.2064 6.58035 9.3934 9.3934C6.58035 12.2064 5 16.0218 5 20C5 21.3132 5.25866 22.6136 5.7612 23.8268C6.26375 25.0401 7.00035 26.1425 7.92893 27.0711C8.85752 27.9997 9.95991 28.7362 11.1732 29.2388C12.3864 29.7413 13.6868 30 15 30H25Z"
              ></path>
            </svg>
          </span>
          Pomocus
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="text-3xl text-white absolute right-8 top-6 md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu items */}
        <ul
          className={`md:flex md:items-center md:static absolute bg-slate-800 w-full left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-16" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-white text-xl md:my-0 my-7">
            <ScrollLink
              to="home"
              onClick={() => scrollToAnchor("home")}
              className="hover:bg-indigo-600 hover:text-white rounded p-2"
            >
              HOME
            </ScrollLink>
          </li>

          <li className="md:ml-8 text-white text-xl md:my-0 my-7">
            <ScrollLink
              to="timer"
              onClick={() => scrollToAnchor("timer")}
              className="hover:bg-indigo-600 hover:text-white rounded p-2"
            >
              TIMER
            </ScrollLink>
          </li>

          <li className="md:ml-8 text-white text-xl md:my-0 my-7">
            <ScrollLink
              to="about"
              onClick={() => scrollToAnchor("about")}
              className="hover:bg-indigo-600 hover:text-white rounded p-2"
            >
              ABOUT
            </ScrollLink>
          </li>

          <li className="md:ml-8 text-white text-xl md:my-0 my-7">
            <ScrollLink
              to="blog"
              className="hover:bg-indigo-600 hover:text-white rounded p-2"
            >
              BLOG
            </ScrollLink>
          </li>

          <li className="md:ml-8 text-white text-xl md:my-0 my-7">
            <ScrollLink
              to="contact"
              onClick={() => scrollToAnchor("contact")}
              className="hover:bg-indigo-600 hover:text-white rounded p-2"
            >
              CONTACT
            </ScrollLink>
          </li>

          <RouterScrollLink
            to="/newpage"
            className="bg-customPink text-white py-2 px-6 rounded md:ml-8 hover:bg-customPink duration-500"
          >
            Get Started
          </RouterScrollLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
