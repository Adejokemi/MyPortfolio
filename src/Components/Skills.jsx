import React, { useState } from "react";
import classNames from "classnames";
import SkillsCard from "./SkillsCard";
import Service from "./Service";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl mb-5">
          <span className="font-bold ">Skills and</span> Service
        </h2>
        <div className="mx-8 bg-gray-200 rounded-2xl h-10 mt-4 flex">
          <button
            onClick={() => handleTabChange("skills")}
            className={classNames(
              "flex-1 lg:px-20 px-10 py-2 rounded-2xl focus:outline-none",
              {
                "bg-teal-950 text-white": activeTab === "skills",
                "bg-gray-200": activeTab !== "skills",
              }
            )}
          >
            Skills
          </button>
          <button
            onClick={() => handleTabChange("services")}
            className={classNames(
              "flex-1 lg:px-20 px-10 py-2 rounded-2xl focus:outline-none",
              {
                "bg-teal-950 text-white": activeTab === "services",
                "bg-gray-200": activeTab !== "services",
              }
            )}
          >
            Services
          </button>
        </div>
      </div>
      <div>
        {activeTab === "skills" && (
          <div>
            <SkillsCard />
          </div>
        )}
        {activeTab === "services" && (
          <div>
            <Service />
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
