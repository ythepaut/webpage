import React from "react";
import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";
import { motion } from "framer-motion";
import Error from "../components/sections/Error";

export default function InternalErrorPage(): JSX.Element {
    const t = useTranslations("500");

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Error title={t("title")} description={""} />
        </motion.div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`),
        },
    };
};
