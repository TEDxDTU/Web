import React from "react";
import EventsFooter from "../Events/EventsFooter";
import Page from "../Universal/Page";
import CardSection from "./CardSection";
import LiveBanner from "./LiveBanner";

export default function Landing({ latestEvent }) {

    return (
        <Page pageTitle={"Home"}>
            <LiveBanner
                imageUrl={latestEvent.imageUrl}
                title={latestEvent.title}
                details={latestEvent.details}
            />
            <CardSection />
        </Page>
    );
}
