import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cv from "../assets/cv.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);

      if (window.innerWidth < 768) {
        document.removeEventListener("click", closeMenu);
      } else {
        document.addEventListener("click", closeMenu);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", closeMenu);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-teal-950 text-gray-300">
      <div className="container mx-auto py-4 px-3 flex justify-between items-center">
        <div className="flex items-center gap-72">
          <img
            src={cv}
            alt="Logo"
            className="w-8 rounded-full h-8"
          />
          {!isSmallScreen && (
            <ul className="flex justify-between gap-9 ml-4">
              <li>
                <NavLink
                  to="/"
                  className="text-md font-bold text-white hover:underline"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Projects"
                  className="text-md font-bold text-white hover:underline"
                >
                  PROJECTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Skills"
                  className="text-md font-bold text-white hover:underline"
                >
                  SKILLS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className="text-md font-bold text-white hover:underline"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {isSmallScreen && (
          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        )}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50">
          <div className="container mx-auto py-8">
            {isSmallScreen && (
              <ul className="flex flex-col items-center">
                <li>
                  <NavLink
                    to="/"
                    className="text-md font-bold text-white hover:underline"
                    onClick={() => {
                      closeMenu();
                      toggleMenu();
                    }}
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className="text-md font-bold text-white hover:underline"
                    onClick={() => {
                      closeMenu();
                      toggleMenu();
                    }}
                  >
                    PROJECTS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/skills"
                    className="text-md font-bold text-white hover:underline"
                    onClick={() => {
                      closeMenu();
                      toggleMenu();
                    }}
                  >
                    SKILLS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-md font-bold text-white hover:underline"
                    onClick={() => {
                      closeMenu();
                      toggleMenu();
                    }}
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
