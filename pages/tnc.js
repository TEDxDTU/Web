import React from "react";
import Page from "../components/Universal/Page";
import TnC from "../components/TnC/TnC";
import contents from "../components/TnC/Contents";

export default function tnc(content) {
  function createContent(content) {
    return <TnC title={content.title} text={content.text} />;
  }

  return (
    <Page>
      <header className="text-center text-6xl py-8 text-black text-stroke-thin-red font-bold ">
        Terms & Conditions
      </header>
      {contents.map(createContent)}
    </Page>
  );
}
