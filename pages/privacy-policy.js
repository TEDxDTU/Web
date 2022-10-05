import React from "react";
import Page from "../components/Universal/Page";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import contents from "../components/PrivacyPolicy/Contents";

export default function tnc() {
    function createContent(content,val) {
        return <PrivacyPolicy key={val} title={content.title} text={content.text} />;
    }

    return (
        <Page pageTitle={'Privacy Policy'}>
            <header className="text-center text-6xl py-8 text-black text-stroke-thin-red font-bold ">
                Privacy Policy
            </header>
            {contents.map(createContent)}
        </Page>
    );
}
