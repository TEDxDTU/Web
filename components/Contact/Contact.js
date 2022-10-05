import React from "react";
import Page from "../Universal/Page";
import ContactBanner from "./ContactBanner";

export default function Contact() {
  return (
    <Page pageTitle={"Contact"}>
      <header className="text-center text-6xl py-8 text-black text-stroke-thin-red font-bold ">
        Contact Us
      </header>
      <ContactBanner />
    </Page>
  );
}
