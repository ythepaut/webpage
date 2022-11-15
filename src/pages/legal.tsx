import {GetStaticProps} from "next";
import {motion} from "framer-motion";
import Legal from "../components/sections/Legal";

export default function LegalPage(): JSX.Element {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: .2}}
        >
            <Legal />
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
