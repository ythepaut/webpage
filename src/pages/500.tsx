import Link from "next/link";
import React from "react";
import {GetStaticProps} from "next";
import {useTranslations} from "use-intl";
import {motion} from "framer-motion";

function NotFoundPage(): JSX.Element {

    const t = useTranslations("500");

    return (
        <motion.div className="py-20 text-center min-h-screen" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2}}>
            <h2 className="text-3xl sm:text-6xl lg:text-6xl font-medium pt-10">
                {t("title")}
            </h2>
            <Link href="/" passHref>
                <button className="mt-10 flex mx-auto text-indigo-600 sm:text-md md:text-md lg:text-lg border border-indigo-600 py-2 px-8 hover:bg-indigo-50 hover:border-indigo-700 focus:bg-indigo-100 focus:border-indigo-700 rounded transition">
                    {t("back")}
                </button>
            </Link>
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

export default NotFoundPage;
