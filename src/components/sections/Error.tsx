import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";
import BackButton from "../shared/BackButton";
import React from "react";
import Image from "next/image";

interface Props {
    title: string;
    description: string;
}

export default function Error(props : Props): JSX.Element {
    return (
        <section className="bg-gray-200 min-h-screen text-gray-900 grid p-4 lg:p-32">
            <div className="text-center">
                <div className="grid place-content-center">
                    <Image src="/error.svg" alt="" width={256} height={256} className="mb-12" />
                </div>
                <h1 className="sm:text-6xl text-3xl font-medium title-font text-gray-900 mb-4 pb-6">
                    {props.title}
                </h1>
                <p className="sm:text-lg text-sm">
                    {props.description}
                </p>
                <div className="grid place-content-center">
                    <BackButton />
                </div>
            </div>
        </section>
    );
}
