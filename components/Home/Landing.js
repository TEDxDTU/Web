import React from "react";
import Page from "../Universal/Page";
import CardSection from "./CardSection";
import LiveBanner from "./LiveBanner";

export default function Landing({ liveEvent }) {

    return (
        <Page pageTitle={"Home"}>
            <LiveBanner
                imageUrl={liveEvent.imageUrl}
                title={liveEvent.title}
                details={liveEvent.details}
            />
            <CardSection />
        </Page>
    );
}
