import ProjectCard from "@/components/cards/ProjectCard";
import PageTitle from "@/components/elements/PageTitle";
import { PROJECTCARD_CONTENTS } from "@/constants/projects";
import React from "react";

const Projects = () => {
  return (
    <div className="p-8 ">
      <PageTitle
        title="Projects"
        description="Showcase of My Frontend & Backend Development Projects."
      />

      <section className="lg:mb-20">
        <ul className="grid gap-8 sm:grid-cols-2">
          {PROJECTCARD_CONTENTS.map((content, index) => (
            <ProjectCard
              key={index}
              url={content.url}
              title={content.name}
              description={content.description}
              techStack={content.techStack}
              image={content.image}
              imageAlt={content.imageAlt}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;
