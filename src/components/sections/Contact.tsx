import React, {useRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {useTranslations} from "use-intl";
import ContentTransition from "../layout/ContentTransition";
import getConfig from "next/config";

function Contact(): JSX.Element {

    const t = useTranslations("index.contact");

    const {publicRuntimeConfig} = getConfig();

    const [showEmail, setShowEmail] = useState(false);

    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleCaptchaResolve = (value: string | null) => {
        if (value != null)
            setShowEmail(true);
    };

    return (
        <section id="contact" className="bg-gray-200 p-4 py-10 lg:p-20 text-center">

            <ContentTransition>
                <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900 pb-6">{t("title")}</h1>
            </ContentTransition>

            {showEmail ?
                <ContentTransition>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        {t.rich("info_email", {
                            email: publicRuntimeConfig.contactEmail,
                            link: (children => <a className="text-blue-500 transition hover:text-blue-700"
                                                  target="_blank" rel="noreferrer"
                                                  href={"mailto:" + children}>{children}</a>)
                        })}
                    </p>
                </ContentTransition>
                :
                <></>
            }

            <ContentTransition>
                <div className={showEmail ? "invisible h-0" : "grid"}>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        {t("captcha")}
                    </p>
                    <div className="flex my-6 justify-center">
                        <div className="w-24 h-1 rounded-full bg-gray-300 inline-flex"/>
                    </div>
                    <div className="mx-auto p-4">
                        <div className="w-min">
                            <ReCAPTCHA
                                sitekey={publicRuntimeConfig.recaptchaPublic} onChange={handleCaptchaResolve}
                                ref={recaptchaRef}
                            />
                        </div>
                    </div>
                </div>
            </ContentTransition>
        </section>
    );
}

export default Contact;
