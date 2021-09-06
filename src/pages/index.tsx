import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import {GetStaticProps, InferGetStaticPropsType} from "next";

function HomePage({projects}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return (
        <div className="bg-gray-50">
            <Hero />
            <Projects projects={projects}/>
            <Contact />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=ythepaut");
    const projects = await res.json();
    return !projects ? {notFound: true} : {
        props: {projects: projects},
        revalidate: 3600
    };
}

export default HomePage;
