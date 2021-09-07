import React from "react";
import Legal from "../sections/Legal";
import {GetStaticProps} from "next";

function LegalPage(): JSX.Element {
    return (
        <Legal />
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`)
        }
    };
}

export default LegalPage;
