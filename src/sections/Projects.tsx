import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects(projects: any) {
    return (
        <section id="projects" className="bg-white p-8 pt-10 lg:p-20">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900 pb-6 text-center">
                Quelques de mes projets
            </h1>
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap">
                    {projects.projects.map((project: any) => (
                        <ProjectCard
                            key={project.repo}
                            title={project.repo}
                            language={project.language}
                            description={project.description}
                            repoUrl={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
