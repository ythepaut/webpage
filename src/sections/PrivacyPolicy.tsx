import React from "react";
import Link from "next/link";
import {faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslations} from "use-intl";

function PrivacyPolicy(): JSX.Element {

    const t = useTranslations("privacy_policy");

    return (
        <section className="bg-gray-200 min-h-screen bg-hero text-white items-center overflow-hidden grid p-4 lg:p-32">
            <div>
                <h1 className="sm:text-6xl text-3xl font-medium title-font text-white mb-4 pb-6 lg:text-left text-center">{t("title")}</h1>
                <p className="sm:text-lg text-sm">
                    {t.rich("description", {
                        br: () => <br />,
                        simpleanalytics: () => <a href="https://docs.simpleanalytics.com/what-we-collect?ref=ythepaut.com" target="_blank" className="text-white hover:text-indigo-300 font-bold transition">Simple Analytics&nbsp;<sup><FontAwesomeIcon icon={faExternalLinkSquareAlt}/></sup></a>
                    })}
                </p>
                <Link href="/">
                    <button className="mt-24 flex text-white sm:text-md md:text-md lg:text-lg border border-white py-2 px-8 hover:bg-white hover:bg-opacity-5 hover:border-white rounded transition">
                        {t("back")}
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default PrivacyPolicy;
