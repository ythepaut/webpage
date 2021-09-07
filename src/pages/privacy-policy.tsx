import React from "react";
import PrivacyPolicy from "../sections/PrivacyPolicy";
import {GetStaticProps} from "next";

function PrivacyPolicyPage(): JSX.Element {
    return (
        <PrivacyPolicy />
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`)
        }
    };
}

export default PrivacyPolicyPage;
