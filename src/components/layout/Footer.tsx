import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { useRouter } from "next/router";
import Image from "next/image";
import getConfig from "next/config";

export default function Footer(): JSX.Element {
    const t = useTranslations("footer");
    const locale = useRouter().locale;
    const { publicRuntimeConfig } = getConfig();

    return (
        <footer className="text-gray-600 body-font">
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <div className="block p-0.5 rounded-full bg-gray-500">
                            <Image src="/logo.png" alt="" width={32} height={32} className="rounded-full" />
                        </div>
                        <span className="ml-3 text-xl">{publicRuntimeConfig.name}</span>
                    </a>

                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 space-x-4">
                        <span>
                            {t.rich("copyleft", {
                                sourcecode_link: (children) => (
                                    <a
                                        href="https://github.com/ythepaut/webpage"
                                        className="text-gray-600 transition hover:text-gray-800"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {children}
                                    </a>
                                ),
                                license_link: () => (
                                    <a
                                        href="https://github.com/ythepaut/webpage/blob/master/LICENSE"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 transition hover:text-gray-800"
                                        target="_blank"
                                    >
                                        GNU GPL v.3.0
                                    </a>
                                ),
                            })}
                        </span>
                        <span>|</span>
                        <Link href="/legal" scroll={false} onClick={() => window.scrollTo(0, 0)} passHref>
                            <span className="text-gray-600 transition hover:text-gray-800 cursor-pointer">{t("legal")}</span>
                        </Link>
                        <span>|</span>
                        <Link href="/privacy-policy" scroll={false} onClick={() => window.scrollTo(0, 0)} passHref>
                            <span className="text-gray-600 transition hover:text-gray-800 cursor-pointer">{t("privacy_policy")}</span>
                        </Link>
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xl space-x-3">
                        <Link href="" locale={locale == "en" ? "fr" : "en"} scroll={false} onClick={() => window.scrollTo(0, 0)} passHref>
                            <span className="transition hover:bg-gray-700 bg-gray-600 text-white text-sm py-1 px-3 rounded-2xl">
                                <span className="sm:hidden xl:inline-flex">
                                    <i className="align-middle">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </i>
                                    &nbsp;&nbsp;
                                    {locale == "en" ? "Version française" : "English version"}
                                </span>
                                <span className="hidden sm:inline-flex xl:hidden">
                                    <i className="align-middle">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </i>
                                    &nbsp;&nbsp;
                                    {locale == "en" ? "FR" : "EN"}
                                </span>
                            </span>
                        </Link>
                        <span>|</span>
                        <a
                            className="text-gray-500 transition hover:text-gray-800"
                            target="_blank"
                            href={`https://github.com/${publicRuntimeConfig.githubUsername}`}
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            className="text-gray-500 transition hover:text-gray-800"
                            target="_blank"
                            href={publicRuntimeConfig.linkedinUrl}
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
