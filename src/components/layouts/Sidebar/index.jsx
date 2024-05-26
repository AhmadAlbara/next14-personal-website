import BreakLine from "@/components/elements/BreakLine";
import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  return (
    <div className="sticky top-0 hidden h-screen pt-8 ml-8 w-fit md:block lg:w-52 ">
      <SidebarHeader />
      <BreakLine decoration="border-dashed" />
      <SidebarNav />
      <BreakLine decoration="border-dashed" />
    </div>
  );
};

export default Sidebar;
