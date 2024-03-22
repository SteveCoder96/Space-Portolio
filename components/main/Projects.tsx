'use client'
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { useLanguage } from "@/hooks/useLanguage";

const Projects = () => {
  const { t } = useLanguage();
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        {t.myProjects}
      </h1>
      <h2 className="text-[30px] font semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500 py-10">
        {t.requestDemo}
      </h2>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ZtanzaWebPage.png"
          title="Ztanza"
          description="E-commerce"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Travel web page"
          description="Landing Page"
        />
        <ProjectCard
          src="/TechSteSoft.png"
          title="TechSteSoft"
          description="Portfolio web 3D"
        />
      </div>
    </div>
  );
};

export default Projects;
