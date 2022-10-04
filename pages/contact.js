import React from "react";
import Contact from "../components/Contact/Contact";
import Page from "../components/Universal/Page";
export default function contact() {
  return (
    <Page>
      <header className="text-center text-6xl py-8 text-black text-stroke-thin-red font-bold ">
        Contact Us
      </header>
      <Contact />
    </Page>
  );
}
