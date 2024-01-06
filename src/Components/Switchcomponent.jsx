import React, { useState } from "react";
import SkillsCard from "./SkillsCard";
import Service from "./Service";

const SwitchComponent = () => {
  const [isLeft, setIsLeft] = useState(true);

  const toggleSwitch = () => {
    setIsLeft((prevIsLeft) => !prevIsLeft);
  };

  return (
    <div className="mx-8 shadow rounded-full h-10 mt-4 flex p-1 relative items-center">
      <div className="w-full flex justify-center">
        <button onClick={toggleSwitch}>Left</button>
      </div>
      <div className="w-full flex justify-center">
        <button onClick={toggleSwitch}>Right</button>
      </div>
      <span className="elSwitch bg-teal-950 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute left-1 ">
        {isLeft ? <SkillsCard /> : <Service />}
      </span>
    </div>
  );
};

export default SwitchComponent;
