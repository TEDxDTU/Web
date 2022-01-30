import React from "react";
import Page from "../Universal/Page";
import CardSection from "./CardSection";
import ThemeBar from "./ThemeBox";

export default function Landing() {
  return (
    <Page pageTitle={"Home"}>
      <ThemeBar />
      <CardSection />
    </Page>
  );
}
