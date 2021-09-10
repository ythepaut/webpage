import React, {useEffect, useState} from "react";
import logo from "../assets/img/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"
import {Link} from "react-scroll";
import {useTranslations} from "use-intl";

function Hero(): JSX.Element {

    const t = useTranslations("index.hero");

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [windowWidth, setWindowWidth] = useState(1080);
    const handleResize = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleResize);
        }
    }, []);

    return (
        <div className="bg-gray-200 min-h-screen bg-hero items-center justify-center overflow-hidden grid">

            <div className="align-middle space-y-6 text-center xl:pt-36" style={windowWidth > 640 ? {transform: `translateY(${offsetY/1.7}px)`} : {}}>
                <div className="block p-1 rounded-full w-max mx-auto bg-gradient-to-tr from-pink-600 to-yellow-600">
                    <div className="block p-1 rounded-full bg-hero">
                        <img src={logo} alt="Logo" className="h-64 w-64 rounded-full" />
                    </div>
                </div>
                <h1 className="text-4xl lg:text-5xl text-white font-bold">Yohann THEPAUT</h1>
                <h2 className="text-md lg:text-xl text-white font-light tracking-wider">{t("subtitle")}</h2>
            </div>

            <div className="mx-auto flex space-x-4 lg:space-x-64" style={windowWidth > 640 ? {opacity: Math.max(0, 1 - offsetY / 1080 * 8), visibility: Math.max(0, 1 - offsetY / 1080 * 8) > 0 ? "initial" : "hidden"} : {}}>
                <a href="https://github.com/ythepaut" target="_blank" className="text-xl text-indigo-100 tracking-wide transform transition hover:text-white hover:scale-110">
                    <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;
                    {t("github")}
                </a>
                <a href="https://www.linkedin.com/in/yohann-thepaut-340037150/" target="_blank"  className="text-xl text-indigo-100 tracking-wide transform transition hover:text-white hover:scale-110">
                    <FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;
                    {t("linkedin")}
                </a>
                <Link to="contact" smooth={true} className="text-xl text-indigo-100 tracking-wide transform transition hover:text-white hover:scale-110 cursor-pointer">
                    <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;
                    {t("contact")}
                </Link>

            </div>
        </div>
    );
}

export default Hero;
