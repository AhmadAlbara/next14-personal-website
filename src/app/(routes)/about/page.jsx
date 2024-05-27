import PageTitle from "@/components/elements/PageTitle";
import React from "react";
import AboutText from "./AboutText";
import FavoriteStacks from "./FavoriteStacks";

const About = () => {
  return (
    <div className="p-8 ">
      <PageTitle title="About" description="My story become a web developer." />

      <AboutText />
      <FavoriteStacks />
    </div>
  );
};

export default About;
