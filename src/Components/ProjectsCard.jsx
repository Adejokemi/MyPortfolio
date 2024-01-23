import React from "react";

const ProjectCard = ({
  projectLink,
  imgSrc,
  projectName,
  projectDescription,
  toolsUsed,
}) => {
  return (
    <div className="relative group h-[40vh]">
      <az
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full relative"
      >
        <img
          className="w-auto h-5/6 object-cover"
          src={imgSrc}
          alt={projectName}
        />
        <div className="overlay-text hidden absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:flex">
          <div className="text-white text-center">
            <h1 className="text-2xl font-bold">{projectName}</h1>
            <p className="text-sm">{projectDescription}</p>
          </div>
        </div>
        <div className="absolute  bottom-0 left-0 right-0 bg-teal-950 text-white p-5">
          <p className="text-sm font-bold">
            Built with: <span className="font-normal"> {toolsUsed}</span>
          </p>
        </div>
      </az>
    </div>
  );
};

export default ProjectCard;
