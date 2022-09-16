import { useRouter } from "next/router";

import getLiveEvent from '../../utils/getLiveEvent';
import getPastEvents from "../../utils/getPastEvents";
import getUpcomingEvents from "../../utils/getUpcomingEvents";

import EventDetailsComp from "../../components/NewSingleEvent/EventDetails";

export async function getServerSideProps(ctx) {

  const [ liveEvent, pastEvents, upcomingEvents ] = await Promise.all([ getLiveEvent(), getPastEvents(), getUpcomingEvents() ]);

  return {
    props: {
      liveEvent, pastEvents, upcomingEvents
    }
  };
};

const EventDetails = ({pastEvents,upcomingEvents}) => {
  const router = useRouter();

  const eventID = router.query.EventDetails;
  return (
    <EventDetailsComp eventID = {eventID} pastEvents={pastEvents} upcomingEvents={upcomingEvents}></EventDetailsComp>
  )
};

export default EventDetails;
