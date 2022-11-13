import React from "react";
import {GetStaticProps} from "next";
import {useTranslations} from "use-intl";
import {motion} from "framer-motion";
import Error from "../components/sections/Error";

export default function NotFoundPage(): JSX.Element {

    const t = useTranslations("404");

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: .2}}
        >
            <Error title={t("title")} description={t("description")}/>
        </motion.div>
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`)
        }
    };
};
