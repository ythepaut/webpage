import React from "react";
import Link from "next/link";
import {faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function PrivacyPolicy(): JSX.Element {
    return (
        <section className="bg-gray-200 min-h-screen bg-hero text-white items-center overflow-hidden grid p-4 lg:p-32">
            <div>
                <h1 className="sm:text-6xl text-3xl font-medium title-font text-white mb-4 pb-6 lg:text-left text-center">Politique de confidentialité</h1>
                <p className="sm:text-lg text-sm">
                    Afin d’améliorer la visibilité de ma page web, j'utilise un service tiers pour la récolte de données sur l'utilisation de mon site.<br />
                    Les données récoltées ne sont, et ne seront jamais des données personnelles.<br /><br />
                    Vous pouvez consulter la liste exhaustive des informations récoltées sur le site de <a href="https://docs.simpleanalytics.com/what-we-collect?ref=ythepaut.com" target="_blank" className="text-white hover:text-indigo-300 font-bold transition">Simple Analytics&nbsp;<sup><FontAwesomeIcon icon={faExternalLinkSquareAlt}/></sup></a>.<br /><br />

                    Si vous ne souhaitez pas que vos prochaines visites soient enregistrées, veuillez activer l'option "Do Not Track" de votre navigateur.
                </p>
                <Link href="/">
                    <button className="mt-24 flex text-white sm:text-md md:text-md lg:text-lg border border-white py-2 px-8 hover:bg-white hover:bg-opacity-5 hover:border-white rounded transition">
                        Retour
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default PrivacyPolicy;
