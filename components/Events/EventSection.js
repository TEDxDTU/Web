import Thumbnail from "./Thumbnail";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EventSection = ({ eventList, eventType, setDisplay, setEventInfo, setDisplayBookNotActive }) => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let eventsByYear = new Object();
  eventList?.forEach((event) => {
    const year = new Date(event.dateTime).getUTCFullYear();
    if (eventsByYear[year]) eventsByYear[year].push(event);
    else eventsByYear[year] = [event];
  });

  eventsByYear = Object.entries(eventsByYear).reverse();

  return (<div className="pb-8 px-8">
    {(eventList?.length != 0) && <h1 className="capitalize w-full text-5xl font-bold text-red-600" data-aos="fade-up">{eventType} events</h1>}
    <main>
      {eventsByYear.map(([year, eventList], idx) => {
        return (<div
          key={idx?.toString()}
          className="mx-auto my-8"
          data-aos="fade-up"
        >
          <header className="py-6 px-1 md:px-6 font-semibold text-4xl md:text-5xl flex">TEDx<div className="text-stroke-thin-white font-bold text-5xl md:text-6xl text-black -mt-2.5 font-['Philosopher'] px-2">Talks,</div><div className="text-6xl -mt-3 text-[#595959]">{year}</div></header>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {eventList?.map((event, idx_) => {
              return <Thumbnail
                key={idx_.toString()}
                event={event}
                eventType={eventType}
                setDisplay={setDisplay}
                setEventInfo={setEventInfo}
                setDisplayBookNotActive={setDisplayBookNotActive}
              />;
            })}
          </div>
        </div>);
      })}
    </main>
  </div>);

};

export default EventSection;
