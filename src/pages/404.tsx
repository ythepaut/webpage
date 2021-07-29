import Link from "next/link";
import errorImage from "../assets/img/error.png";
import React from "react";

function NotFound(): JSX.Element {
    return (
        <div className="py-20 text-center min-h-screen">
            <img src={errorImage} alt="404" className="inline" />
            <h2 className="text-3xl sm:text-6xl lg:text-6xl font-medium pt-10">
                Page inéxistante
            </h2>
            <p className="pt-4">
                Oups, la page que vous recherchez n'existe pas ou plus.
            </p>
            <Link href="/">
                <button className="mt-10 flex mx-auto text-indigo-600 sm:text-md md:text-md lg:text-lg border border-indigo-600 py-2 px-8 hover:bg-indigo-50 hover:border-indigo-700 focus:bg-indigo-100 focus:border-indigo-700 rounded transition">
                    Retour à l'accueil
                </button>
            </Link>
        </div>
    );
}

export default NotFound;
