import React from "react";
import Page from "../Universal/Page";
import ContactBanner from "./ContactBanner";
ContactBanner;

export default function Contact() {
  return (
    <Page pageTitle={"Contact"}>
      <ContactBanner />
    </Page>
  );
}
