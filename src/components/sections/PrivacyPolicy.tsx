import React from "react";
import {faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslations} from "use-intl";
import BackButton from "../shared/BackButton";

function PrivacyPolicy(): JSX.Element {

    const t = useTranslations("privacy_policy");

    return (
        <section className="bg-gray-200 min-h-screen text-gray-900 items-center overflow-hidden grid p-4 lg:p-32">
            <div>
                <h1 className="sm:text-6xl text-3xl font-medium title-font text-gray-900 mb-4 pb-6 lg:text-left text-center">
                    {t("title")}
                </h1>
                <p className="sm:text-lg text-sm">
                    {t.rich("description", {
                        br: () => <br />,
                        simpleanalytics: () => <a href="https://docs.simpleanalytics.com/what-we-collect?ref=ythepaut.com"
                                                  target="_blank"
                                                  className="text-indigo-700 hover:text-indigo-300 font-bold transition"
                                                  rel="noreferrer">
                            Simple Analytics&nbsp;<sup><FontAwesomeIcon icon={faExternalLinkSquareAlt}/></sup>
                        </a>
                    })}
                </p>
                <BackButton />
            </div>
        </section>
    );
}

export default PrivacyPolicy;
