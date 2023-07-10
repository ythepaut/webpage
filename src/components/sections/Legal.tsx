import React from "react";
import { useTranslations } from "use-intl";
import BackButton from "../shared/BackButton";

export default function Legal(): JSX.Element {
    const t = useTranslations("legal");

    return (
        <section className="bg-gray-200 min-h-screen text-gray-900 items-center overflow-hidden grid p-4 lg:p-32">
            <div>
                <h1 className="sm:text-6xl text-3xl font-medium title-font text-gray-900 mb-4 pb-6 lg:text-left text-center">
                    {t("title")}
                </h1>
                <p className="sm:text-lg text-sm">
                    <span className="font-medium">{t("owner.title")}</span>
                    <br />
                    <span className="ml-8">{t("owner.value")}</span>
                    <br />
                    <br />
                    <span className="font-medium">{t("host.title")}</span>
                    <br />
                    <p className="ml-8">
                        {t.rich("host.value", {
                            br: () => <br />,
                        })}
                    </p>
                </p>
                <BackButton />
            </div>
        </section>
    );
}
