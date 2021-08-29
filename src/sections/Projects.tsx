import React from "react";
import {GetStaticProps, InferGetStaticPropsType} from "next";

type RawProject = {
    owner: string;
    repo: string;
    link: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
}

function Projects({projects}: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(projects);
    return (
        <section id="projects" className="bg-white p-6 lg:p-20">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900 pb-6 text-center">
                Quelques de mes projets
            </h1>
            {/*
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap">
                    {rawProjects.map((project: RawProject) => (
                        <ProjectCard
                            title={project.repo}
                            language={project.language}
                            description={project.description}
                            imageUrl="https://dummyimage.com/720x400"
                            repoUrl={project.link}
                        />
                    ))}
                </div>
            </div>
            */}
        </section>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    console.log("getStaticProps()");
    const res = await fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=ythepaut");
    const projects: RawProject[] = await res.json();
    return !projects ? {notFound: true} : {
        props: {projects: projects},
        revalidate: 3600
    };
}

export default Projects;
