import React from "react";
import { NavLink } from "react-router-dom";
import cv from "./../assets/cv.jpg";

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen z-20 bg-teal-950">
      <div className="container mx-auto">
        <div
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)" }}
          className="relative w-full h-96 overflow-hidden"
        >
          <img
            src={cv}
            alt="Ajoke"
            className="w-full h-full object-cover"
          />
        </div>

        <nav className="text-center text-gray-200">
          <ul>
            <li className="mb-2">
              <NavLink
                to="/"
                className="text-lg font-bold hover:underline active:bg-teal-200 active:text-teal-800"
              >
                HOME
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/Projects"
                className=" text-lg font-bold hover:underline active:bg-teal-200 active:text-teal-800"
              >
                PROJECTS
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/Skills"
                className="text-lg font-bold hover:underline active:bg-teal-200 active:text-teal-800"
              >
                SKILLS
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/Contact"
                className="text-lg font-bold hover:underline active:bg-blue-200 active:text-blue-800"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
