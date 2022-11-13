import React, {useRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {useTranslations} from "use-intl";
import ContentTransition from "../layout/ContentTransition";
import getConfig from "next/config";

export default function Contact(): JSX.Element {

    const t = useTranslations("index.contact");

    const {publicRuntimeConfig} = getConfig();

    const [email, setEmail] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleCaptchaResolve = (token: string | null) => {
        if (token != null) {
            setLoading(true);
            fetch(`/api/contact?token=${token}`).then(async res => {
                if (res.status === 200) {
                    setEmail((await res.json()).email);
                } else {
                    recaptchaRef.current?.reset();
                }
                setLoading(false);
            }).catch(() => {
                setLoading(false);
                recaptchaRef.current?.reset();
            });
        } else {
            recaptchaRef.current?.reset();
        }
    };

    return (
        <section id="contact" className="bg-gray-200 p-4 py-10 lg:p-20 text-center">

            <ContentTransition>
                <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900 pb-6">{t("title")}</h1>
            </ContentTransition>

            {email &&
                <ContentTransition>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        {t.rich("info_email", {
                            email: email,
                            link: (children => <a className="text-blue-500 transition hover:text-blue-700"
                                                  target="_blank" rel="noreferrer"
                                                  href={"mailto:" + children}>{children}</a>)
                        })}
                    </p>
                </ContentTransition>
            }

            <ContentTransition>
                <div className={!email ? "grid" : "invisible h-0"}>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        {t("captcha")}
                    </p>
                    <div className="flex my-6 justify-center">
                        <div className="w-24 h-1 rounded-full bg-gray-300 inline-flex"/>
                    </div>
                    <div className="mx-auto p-4">
                        <div className="w-min">
                            <div className={loading ? "grid" : "invisible h-0"}>
                                <div className="grid animate-pulse place-content-center">
                                    <div className="w-[304px] h-[76px] bg-gray-300 rounded-lg mb-4"></div>
                                </div>
                            </div>
                            <div className={!loading ? "grid" : "invisible h-0"}>
                                <ReCAPTCHA
                                    sitekey={publicRuntimeConfig.recaptchaPublic} onChange={handleCaptchaResolve}
                                    ref={recaptchaRef}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ContentTransition>

        </section>
    );
}
