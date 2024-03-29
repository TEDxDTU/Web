import React from "react";
import Page from "../components/Universal/Page";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import contents from "../components/TermsAndConditions/Contents";

export default function Tnc() {
  function createContent(content,val) {
    return <TermsAndConditions key={val} title={content.title} text={content.text} />;
  }

  return (
    <Page pageTitle={'Terms and Conditions'}>
      <header className="text-center text-6xl py-8 text-black text-stroke-thin-red font-bold ">
        Terms & Conditions
      </header>
      {contents.map(createContent)}
    </Page>
  );
}
