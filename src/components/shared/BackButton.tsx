import React from "react";
import Link from "next/link";
import { useTranslations } from "use-intl";

export default function BackButton(): JSX.Element {
    const t = useTranslations("shared");

    return (
        <Link href="/" className="block w-fit h-fit" scroll={false} onClick={() => window.scrollTo(0, 0)} passHref>
            <button className="mt-24 flex mx-auto lg:mx-0 text-gray-900 sm:text-md md:text-md lg:text-lg border border-gray-800 py-2 px-8 hover:bg-opacity-5 hover:bg-indigo-900 hover:text-indigo-600 hover:border-indigo-600 rounded transition">
                {t("back")}
            </button>
        </Link>
    );
}
