import React from "react";
import EventsFooter from "../Events/EventsFooter";
import Page from "../Universal/Page";
import CardSection from "./CardSection";
import PrimaryTheme from "./PrimaryTheme";
import ThemeBar from "./ThemeBox";

export default function Landing() {
  return (
    <Page pageTitle={"Home"}>
      <PrimaryTheme />
      <ThemeBar />
      <CardSection />
      <EventsFooter/>
    </Page>
  );
}
