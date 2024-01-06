import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/sidebar";

const Layout = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 1280;
      setIsDesktop(isDesktop);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isDesktop ? (
        <div className="flex ">
          <div className="w-[300px] text-white">
            <Sidebar/>
          </div>
          <div className="w-[calc(100%-300px)] bg-slate-300">{children}</div>
        </div>
      ) : (
        <div className="block lg:hidden">
          <Navbar />
          <div className="bg-slate-300">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Layout;
