import Hero from "../components/sections/Hero";
import {GetStaticProps} from "next";
import {motion} from "framer-motion";
import Projects from "../components/sections/Projects";

export default function HomePage(): JSX.Element {
    return (
        <motion.div
            className="bg-gray-50"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: .2}}
        >
            <Hero/>
            <Projects />
            <section className="bg-fuchsia-500" id="contact">Contact</section>
        </motion.div>
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`),
        },
    };
};

