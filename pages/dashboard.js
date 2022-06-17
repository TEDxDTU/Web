import React from "react";
import getLiveEvent from '../utils/getLiveEvent';
import getPastEvents from "../utils/getPastEvents";
import Landing from "../components/Dashboard/Landing";

export async function getServerSideProps(ctx) {

  const [liveEvent, pastEvents] = await Promise.all([getLiveEvent(), getPastEvents()]);

  return {
    props: {
      liveEvent, pastEvents
    }
  };
};

export default function DashBoard({ liveEvent, pastEvents }) {
  return (<Landing allEvents={{ liveEvent, pastEvents }} />);
}

