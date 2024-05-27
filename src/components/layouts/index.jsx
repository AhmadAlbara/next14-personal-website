import React from "react";
import Sidebar from "./Sidebar";
import Bottombar from "./Bottombar";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  return (
    <div className="md:flex lg:m-auto lg:max-w-5xl lg:justify-center">
      <Sidebar />
      <div className="lg:max-w-5xl scrollbar scrollbar-track-red-500 ">
        <main>{children}</main>
        <Bottombar />
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
