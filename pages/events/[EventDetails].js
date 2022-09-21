import { useRouter } from "next/router";

import getLiveEvent from '../../utils/getLiveEvent';
import getPastEvents from "../../utils/getPastEvents";
import getUpcomingEvents from "../../utils/getUpcomingEvents";

import EventDetailsComp from "../../components/NewSingleEvent/EventDetails";

import React from "react";
import {useEffect,useState } from "react";

export async function getServerSideProps(ctx) {
  
  const [ liveEvent, pastEvents, upcomingEvents ] = await Promise.all([ getLiveEvent(), getPastEvents(), getUpcomingEvents() ]);
  
  return {
    props: {
      liveEvent, pastEvents, upcomingEvents
    }
  };
};
export const noEventContext = React.createContext();

const EventDetails = ({pastEvents,upcomingEvents}) => {
  const [noEvent, setNoEvent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if(setNoEvent === true){
      router.push("/404");
    }
    setNoEvent(false);
  }, [noEvent])
  
  const eventID = router?.query?.EventDetails;
  return (
    <noEventContext.Provider value={setNoEvent}>
      <EventDetailsComp eventID = {eventID} pastEvents={pastEvents} upcomingEvents={upcomingEvents}></EventDetailsComp>
    </noEventContext.Provider>
  )
};

export default EventDetails;
