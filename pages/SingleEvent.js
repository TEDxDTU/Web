import React from "react";
import EventDetails from "../components/SingleEvent/EventDetails";

//components
import EventTicket from "../components/SingleEvent/EventTicket";
import Page from "../components/Universal/Page";

export default function SingleEvent() {
  return (
    <>
      <Page>
        <div className="min-h-screen">
          <EventTicket />
          <EventDetails />
        </div>
      </Page>
    </>
  );
}
