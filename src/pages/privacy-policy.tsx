import React from "react";
import PrivacyPolicy from "../sections/PrivacyPolicy";
import {GetStaticProps} from "next";
import {motion} from "framer-motion";

function PrivacyPolicyPage(): JSX.Element {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2}}>
            <PrivacyPolicy />
        </motion.div>
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`)
        }
    };
}

export default PrivacyPolicyPage;
