import React, { useEffect, useState } from 'react';
import Page from '../Universal/Page';
import EventSection from './EventSection';

const Events = ({ allEvents }) => {
  const { liveEvent, pastEvents, upcomingEvents } = allEvents;

  return <Page
    pageTitle={"Events"}
  >
  <div className="">
    <EventSection eventList={upcomingEvents} eventType={"upcoming"} />
    <EventSection eventList={[liveEvent]} eventType={"live"} />
    <EventSection eventList={pastEvents} eventType={"past"} />
    </div>
  </Page>;
};
export default Events;