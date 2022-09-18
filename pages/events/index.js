import React from 'react';
import Events from '../../components/Events/Events';
import getLiveEvent from '../../utils/getLiveEvent';
import getPastEvents from "../../utils/getPastEvents";
import getUpcomingEvents from "../../utils/getUpcomingEvents";

export async function getServerSideProps(ctx) {

  const [ liveEvent, pastEvents, upcomingEvents ] = await Promise.all([ getLiveEvent(), getPastEvents(), getUpcomingEvents() ]);

  return {
    props: {
      liveEvent, pastEvents, upcomingEvents
    }
  };
};

export default function events({ liveEvent, pastEvents, upcomingEvents }) {
  return <Events allEvents={{ liveEvent, pastEvents, upcomingEvents }} />;
};