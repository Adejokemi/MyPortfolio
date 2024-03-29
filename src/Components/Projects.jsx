import React from "react";
import ProjectCard from "./ProjectsCard";
import Sync from "../assets/Sync.png";
import Natours from "../assets/Natours.png";
import Sync23 from "../assets/Sync23.png";
import Laundry from "../assets/Laundry.png";
import hotel from "../assets/hotel.png";
import omnifood from "../assets/omnifood.png";
import Mpos from "../assets/Mpos.png";
import Medease from "../assets/Medease.png";
import nbc from "../assets/nbc.png";

const Projects = () => {
  const projects = [
    {
      projectLink: "https://mpos.smarthivetechsolution.com/",
      imgSrc: Mpos,
      projectName: "Mpos",
      projectDescription: "A Buisness Management Software",
      toolsUsed: "React.js, Sass/Scss, Firebase",
    },
    {
      projectLink: "https://natours-hazel.vercel.app/",
      imgSrc: Natours,
      projectName: "Natours",
      projectDescription: "A Tour booking website",
      toolsUsed: "Html, Sass/Scss, Javascript",
    },
    {
      projectLink: "https://sync-frontends.vercel.app/",
      imgSrc: Sync,
      projectName: "Sync",
      projectDescription: "A Church Management Software",
      toolsUsed: "React.js, TailwindCss, laravel",
    },

    {
      projectLink: "https://med-ease.vercel.app/",
      imgSrc: Medease,
      projectName: "MedEase",
      projectDescription: "A medication management software",
      toolsUsed: "React.js, TailwindCss, Node.js",
    },
    {
      projectLink: "https://news-gules-two.vercel.app/",
      imgSrc: nbc,
      projectName: "News Grid",
      projectDescription: "A news website",
      toolsUsed: "Html, CSS, Javascript",
    },
    {
      projectLink: "https://sync-website-vumc.vercel.app/",
      imgSrc: Sync23,
      projectName: "Sync Website",
      projectDescription: "A Church Management System Website",
      toolsUsed: "Next.js, TailwindCss, Laravel",
    },
    {
      projectLink: "https://emma-laundromat.netlify.app/",
      imgSrc: Laundry,
      projectName: "Laundromat",
      projectDescription: "A dry cleaning website",
      toolsUsed: "Html, TailwindCss, Javascript",
    },
    {
      projectLink: "https://dee-dee-adejokemi.vercel.app/",
      imgSrc: hotel,
      projectName: "DeeDee Hotel",
      projectDescription: "An Hotel website",
      toolsUsed: "Html, CSS, Javascript",
    },
    {
      projectLink: "https://omnifood-jonas-process.netlify.app/",
      imgSrc: omnifood,
      projectName: "OmniFood",
      projectDescription: "An AI-powered food delivery service",
      toolsUsed: "Html, CSS, Javascript",
    },
  ];

    return (
    <div className="container mx-auto">
    <div className="flex justify-center items-center px-8 lg:px-20 py-8 lg:py-12">
      <div className="w-full">
        <h2 className="text-3xl mb-5"><span className="font-bold ">Personal and</span> Featured Projects</h2>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-7 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
