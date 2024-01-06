import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import CtaButton from "./CtaButton";

const Hero = () => {

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center items-center pb-16 lg:pb-0">
      <div className="w-full h-screen  p-8 lg:p-16">
        <h2 className="font-bold text-3xl lg:text-6xl text-gray-900">
          SHERIFAT<span className="text-pink-600"> OMITOGUN</span>
        </h2>
        <div className="lg:flex gap-4 mt-2">
          <div className="flex gap-2">
            <p className="lg:text-lg text-sm font-semibold text-gray-600">
              Lagos, Nigeria.
            </p>
            <p className="lg:text-lg text-sm font-semibold text-gray-600">
              (+234) 901 1814 858.
            </p>
          </div>
          <Link
            to="mailto:omitogunsherifat75@gmail"
            className="lg:text-lg text-sm underline font-bold text-teal-950"
          >
            omitogunsherifat75@gmail.com
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl tracking-wide mb-4">
            <span className="font-bold">About</span> Me
          </h2>
          <p className="text-slate-800 pb-5  tracking-wide leading-7 ">
            My name is Omitogun Sherifat Ajoke, and I am a frontend developer. I
            am passionate about creating visually appealing and user-friendly
            websites that deliver exceptional user experiences. With a strong
            foundation in HTML, CSS (Sass, Tailwind, Bootstrap), and JavaScript
            (React, Next.js), I enjoy translating design concepts into fully
            functional and responsive interfaces. Constantly seeking to expand
            my knowledge and skills, I am committed to staying at the forefront
            of web development trends and technologies.
          </p>
        </div>
      <CtaButton>Download Cv</CtaButton>
        <div className="mt-14">
          <h2 className="text-2xl tracking-wide mb-2">
            <span className="font-bold">Connect</span> with Me
          </h2>
          <div className="flex gap-5">
            <div className="bg-pink-100 rounded-full p-4">
              <FaTwitter
                className="text-3xl cursor-pointer text-teal-950 hover:text-gray-70000"
                onClick={() =>
                  openLinkInNewTab("https://twitter.com/Adejokemi_472")
                }
              />
            </div>
            <div className="bg-pink-100 rounded-full p-4">
              <FaLinkedin
                className="text-3xl cursor-pointer text-teal-950 hover:text-gray-700"
                onClick={() =>
                  openLinkInNewTab(
                    "https://www.linkedin.com/in/omitogun-sherifat-ajoke/"
                  )
                }
              />
            </div>
            <div className="bg-pink-100 rounded-full p-4">
              <FaGithub
                className="text-3xl cursor-pointer text-teal-950 hover:text-gray-700"
                onClick={() => openLinkInNewTab("https://github.com/Adejokemi")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
