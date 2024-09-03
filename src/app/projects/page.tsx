"use client"
import ProjectCard from "@/components/ProjectCard";
import { Spotlight } from "@/components/ui/Spotlight";
import projects from "@/db/projects";

const Project = () => {
  return (
    <div className="mt-10 w-[1300px] max-w-[90%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
      <Spotlight />
    </div>
  );
};

export default Project;
