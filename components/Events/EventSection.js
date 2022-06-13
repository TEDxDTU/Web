import Thumbnail from "./Thumbnail";

const EventSection = ({ eventList, eventType }) => {

  let eventsByYear = new Object();
  eventList.forEach((event) => {
    const year = new Date(event.dateTime).getUTCFullYear();
    if (eventsByYear[year]) eventsByYear[year].push(event);
    else eventsByYear[year] = [event];
  });

  eventsByYear = Object.entries(eventsByYear).reverse();

  return (<div className="py-8">
    <h1 className="capitalize w-full text-5xl font-bold text-red-600">{eventType} events</h1>
    <main>
      {eventsByYear.map(([year, eventList], idx) => {
        return (<div
          key={idx.toString()}
          className="mx-auto my-8"
        >
          <header className="py-4 font-semibold text-3xl flex">TED <div className="text-stroke-thin-white font-bold text-6xl text-black -mt-4">Talks</div>{year}</header>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {eventList.map((event, idx_) => {
              return <Thumbnail
                key={idx_.toString()}
                event={event}
              />;
            })}
          </div>
        </div>);
      })}
    </main>
  </div>);

};

export default EventSection;
