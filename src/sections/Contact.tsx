import React, {useRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Contact(): JSX.Element {

    const [showEmail, setShowEmail] = useState(false);

    const SITE_KEY = process.env.RECAPTCHA_SITE_KEY || "RECAPTCHA_SITE_KEY";
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleCaptchaResolve = (value: string | null) => {
        if (value != null) {
            setShowEmail(true);
        }
    }

    return (
        <section id="contact" className="bg-gray-200 p-4 py-10 lg:p-20 text-center">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900 pb-6">Me contacter</h1>
            {showEmail ?
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Vous pouvez me contacter par e-mail : <a className="text-blue-500 transition hover:text-blue-700" target="_blank" href="mailto:contact@ythepaut.com">contact@ythepaut.com</a>
                </p>
                :
                <></>
            }
            <div className={showEmail ? "invisible h-0" : "grid"}>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Complétez le CAPTCHA pour afficher mon adresse e-mail.
                </p>
                <div className="mx-auto p-4">
                    <div className="w-min">
                        <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaResolve} ref={recaptchaRef} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
