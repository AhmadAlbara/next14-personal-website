import React from "react";
import Sidebar from "./Sidebar";

const Layouts = ({ children }) => {
  return (
    <div className="md:flex lg:m-auto lg:max-w-5xl lg:justify-center">
      <Sidebar />
      <div className="lg:max-w-5xl scrollbar scrollbar-track-red-500 ">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layouts;
