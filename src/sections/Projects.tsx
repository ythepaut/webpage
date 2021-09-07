import React from "react";
import ProjectCard from "../components/ProjectCard";
import {useTranslations} from "use-intl";

function Projects(projects: any) {

    const t = useTranslations("index.projects");

    return (
        <section id="projects" className="bg-white py-10 lg:p-20">
            <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900 pb-6 text-center">
                {t("title")}
            </h1>
            <h2 className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-10 lg:mx-auto text-gray-800 text-center">
                {t.rich("description", {
                    br: () => <br />
                })}
            </h2>
            <div className="flex my-6 justify-center">
                <div className="w-24 h-1 rounded-full bg-gray-300 inline-flex"/>
            </div>
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
