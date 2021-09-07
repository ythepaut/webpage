import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {motion} from "framer-motion";

function HomePage({projects, email}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return (
        <motion.div className="bg-gray-50" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2}}>
            <Hero />
            <Projects projects={projects}/>
            <Contact email={email} />
        </motion.div>
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const res = await fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=ythepaut");
    const projects = await res.json();
    return !projects ? {notFound: true} : {
        props: {
            projects: projects,
            messages: require(`../lang/${locale}.json`),
            email: process.env.CONTACT_EMAIL
        },
        revalidate: 3600
    };
}

export default HomePage;
