import {useTranslations} from "use-intl";
import {useEffect, useState} from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import getConfig from "next/config";

export default function Hero(): JSX.Element {

    const t = useTranslations("index.hero");
    const {publicRuntimeConfig} = getConfig();

    const [offsetY, setOffsetY] = useState<number>(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const [windowWidth, setWindowWidth] = useState<number>(1920);
    const handleResize = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleResize);
        };
    }, []);


    return (
        <section className="grid min-h-screen bg-hero items-center overflow-hidden">

            <div
                className="space-y-6 text-center xl:pt-36"
                style={windowWidth > 640 ? {transform: `translateY(${offsetY / 1.7}px)`} : {}}
            >
                <div className="block p-1 rounded-full w-max mx-auto bg-gradient-to-tr from-pink-600 to-yellow-600">
                    <div className="block p-1 rounded-full bg-hero">
                        <Image src="/logo.png" alt="" width={256} height={256} className="rounded-full"/>
                    </div>
                </div>
                <h1 className="text-4xl lg:text-5xl text-white font-bold">
                    {publicRuntimeConfig.name}
                </h1>
                <h2 className="text-md lg:text-xl text-white font-light tracking-wider">
                    {t("subtitle")}
                </h2>
            </div>

            <div
                className="mx-auto flex space-x-4 lg:space-x-64"
                style={windowWidth > 640
                    ? {
                        opacity: Math.max(0, 1 - offsetY / 1080 * 8),
                        visibility: Math.max(0, 1 - offsetY / 1080 * 8) > 0 ? "initial" : "hidden"
                    }
                    : {}
                }
            >
                <a href={`https://github.com/${publicRuntimeConfig.githubUsername}`} target="_blank" rel="noreferrer"
                   className="hero-link">
                    <FontAwesomeIcon icon={faGithub}/>&nbsp;&nbsp;{t("github")}
                </a>
                <a href={publicRuntimeConfig.linkedinUrl} target="_blank" rel="noreferrer"
                   className="hero-link">
                    <FontAwesomeIcon icon={faLinkedin}/>&nbsp;&nbsp;{t("linkedin")}
                </a>
                <Link href="/#contact" scroll={false} className="hero-link" passHref>
                    <FontAwesomeIcon icon={faEnvelope}/>&nbsp;&nbsp;{t("contact")}
                </Link>

            </div>

        </section>
    );
}
