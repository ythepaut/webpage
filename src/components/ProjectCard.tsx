import React from "react";
import {useTranslations} from "use-intl";
import {Project} from "./sections/Projects";

export interface Props {
    project: Project;
}

export default function ProjectCard({project}: Props): JSX.Element {

    const t = useTranslations("index.projects");

    return (
        <div className="p-4 w-full md:w-1/2 xl:w-1/4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="w-full object-cover object-center h-1 bg-gradient-to-tr from-pink-600 to-yellow-600" />
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-1">
                        {project.name}
                    </h1>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3">
                        {project.language}
                    </h2>
                    <p className="leading-relaxed mb-3 h-14 overflow-hidden">
                        {project.description}
                    </p>
                    <div className="flex items-center flex-wrap">
                        <a className="text-indigo-500 hover:text-indigo-700 transition inline-flex items-center md:mb-2 lg:mb-0" target="_blank" href={project.url} rel="noreferrer">
                            {t("repository")}
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path d="M5 12h14"/>
                                <path d="M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProjectCardSkeleton(): JSX.Element {
    return (
        <div className="p-4 w-full md:w-1/2 xl:w-1/4 animate-pulse">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="w-full object-cover object-center h-1 bg-gradient-to-tr from-pink-600 to-yellow-600" />
                <div className="p-6">
                    <div className="h-5 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-24 mb-6"></div>
                    <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-3 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-32"></div>
                </div>
            </div>
        </div>
    );
}
