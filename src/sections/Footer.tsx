import logo from "../assets/img/logo.png";
import React from "react";
import {faGithub, faLinkedin, faFontAwesomeFlag} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {useTranslations} from "use-intl";
import {useRouter} from "next/router";

function Footer(): JSX.Element {

    const t = useTranslations("index.footer");
    const locale = useRouter().locale;

    return (
        <footer className="text-gray-600 body-font">
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <div className="block p-0.5 rounded-full bg-gray-500">
                            <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
                        </div>
                        <span className="ml-3 text-xl">
                            Yohann THEPAUT
                        </span>
                    </a>

                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 space-x-4">
                        <span>
                            {t.rich("copyleft", {
                                sourcecode_link: (children) => <a href="https://github.com/ythepaut/webpage" className="text-gray-600 transition hover:text-gray-800" target="_blank">{children}</a>,
                                license_link: () => <a href="https://github.com/ythepaut/webpage/blob/master/LICENSE" rel="noopener noreferrer" className="text-gray-600 transition hover:text-gray-800" target="_blank">GNU GPL v.3.0</a>
                            })}
                        </span>
                        <span>|</span>
                        <Link href="/legal">
                            <span className="text-gray-600 transition hover:text-gray-800 cursor-pointer">{t("legal")}</span>
                        </Link>
                        <span>|</span>
                        <Link href="/privacy-policy">
                            <span className="text-gray-600 transition hover:text-gray-800 cursor-pointer">{t("privacy_policy")}</span>
                        </Link>
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xl space-x-3">
                        <Link href={locale == "en" ? "/fr" : "/en"} locale={locale == "en" ? "fr" : "en"}>
                            <a className="text-gray-500 transition hover:text-gray-800">
                                <FontAwesomeIcon icon={faFontAwesomeFlag} />&nbsp;<span className="text-sm">{locale == "en" ? "Version française" : "English version"}</span>
                            </a>
                        </Link>
                        <span>|</span>
                        <a className="text-gray-500 transition hover:text-gray-800" target="_blank" href="https://github.com/ythepaut">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="text-gray-500 transition hover:text-gray-800" target="_blank" href="https://www.linkedin.com/in/yohann-thepaut-340037150/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
