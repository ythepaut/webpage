import React from "react";
import Link from "next/link";
import {useTranslations} from "use-intl";

function Legal(): JSX.Element {

    const t = useTranslations("legal");

    return (
        <section className="bg-gray-200 min-h-screen bg-hero text-white items-center overflow-hidden grid p-4 lg:p-32">
            <div>
                <h1 className="sm:text-6xl text-3xl font-medium title-font text-white mb-4 pb-6 lg:text-left text-center">{t("title")}</h1>
                <p className="sm:text-lg text-sm">
                    <span className="font-medium">{t("owner.title")}</span><br />
                    <span className="ml-8">{t("owner.value")}</span><br />
                    <br />
                    <span className="font-medium">{t("host.title")}</span><br />
                    <p className="ml-8">
                        {t.rich("host.value", {
                            br: () => <br />
                        })}
                    </p>
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

export default Legal;
