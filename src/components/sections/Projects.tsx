import {useTranslations} from "use-intl";
import ContentTransition from "../layout/ContentTransition";
import ProjectCard, {ProjectCardSkeleton} from "../ProjectCard";
import {useEffect, useState} from "react";

export interface Project {
    name: string;
    description: string;
    language: string;
    url: string;
}

export default function Projects(): JSX.Element {

    const t = useTranslations("index.projects");


    const [projects, setProjects] = useState<Project[] | null>(null);
    useEffect(() => {
        if (projects) return;
        fetch("/api/projects")
            .then(async res => setProjects(await res.json()))
            .catch(() => console.warn("Could not load pinned repositories."));
    });


    return (
        <section id="projects" className="bg-white py-10 lg:p-20">
            <ContentTransition>
                <>
                    <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900 pb-6 text-center">
                        {t("title")}
                    </h1>
                    <h2 className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-10 lg:mx-auto text-gray-800 text-center">
                        {t.rich("description", {
                            br: () => <br/>
                        })}
                    </h2>
                </>
            </ContentTransition>
            <div className="flex my-6 justify-center">
                <div className="w-24 h-1 rounded-full bg-gray-300 inline-flex"/>
            </div>
            <div className="container px-5 mx-auto">
                <ContentTransition>
                    <div className="flex flex-wrap">
                        {projects ?
                            projects.map((project: any, index) => (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                />
                            ))
                            : Array.from({length: 4}, (_, i) => i + 1).map((i) => (
                                <ProjectCardSkeleton key={i}/>
                            ))
                        }
                    </div>
                </ContentTransition>
            </div>
        </section>
    );
}
