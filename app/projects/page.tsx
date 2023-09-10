import ProjectCard from "@/components/project-card";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="gap-4 flex flex-col items-center justify-center w-[80vw] max-w-[800px] h-[70vh] mb-11 z-10">
        <h2 className="flex justify-start min-w-[300px] w-[95%] text-sm">PROJECTS</h2>
        <hr className="border-[0.5px] border-secondary min-w-[300px] w-[95%] " />
        <div className="flex flex-wrap justify-center w-full gap-3">
            <ProjectCard title="coming soon"/>
        </div>
      </div>
    </>
  );
};

export default Projects;
