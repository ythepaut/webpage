import React from "react";
import Link from "next/link";

function Legal(): JSX.Element {
    return (
        <div className="bg-gray-200 min-h-screen bg-hero text-white items-center overflow-hidden grid p-4 lg:p-32">
            <div>
                <h1 className="sm:text-6xl text-3xl font-medium title-font text-white mb-4 pb-6 lg:text-left text-center">Mentions légales</h1>
                <p className="sm:text-lg text-sm">
                    <span className="font-medium">Éditeur du site Internet « ythepaut.com » et « www.ythepaut.com » :</span><br />
                    <span className="ml-8">M. THEPAUT Yohann</span><br />
                    <br />
                    <span className="font-medium">Hebergeur :</span><br />
                    <p className="ml-8">
                        Le site « ythepaut.com » est hébergé par la société OVH.<br />
                        OVHcloud<br />
                        2 rue Kellermann<br />
                        59100 Roubaix<br />
                    </p>
                </p>
                <Link href="/">
                    <button className="mt-24 flex text-white sm:text-md md:text-md lg:text-lg border border-white py-2 px-8 hover:bg-white hover:bg-opacity-5 hover:border-white rounded transition">
                        Retour
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Legal;
