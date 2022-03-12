import Thumbnail from "./Thumbnail";

const EventSection = ({ eventList, eventType }) => {

  let eventsByYear = new Object();
  eventList.forEach((event) => {
    const year = new Date(event.dateTime).getUTCFullYear();
    if (eventsByYear[year]) eventsByYear[year].push(event);
    else eventsByYear[year] = [event];
  });

  eventsByYear = Object.entries(eventsByYear);

  return (<div className="py-8">
    <h1 className="capitalize w-full text-5xl font-bold text-red-600">{eventType} events</h1>
    <main>
      {eventsByYear.map(([year, eventList], idx) => {
        return (<div
          key={idx.toString()}
          className="mx-auto my-8"
        >
          <header className="py-4 font-semibold text-3xl">TEDxDTU {year}</header>
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
  // const { dateTime, speakersList } = props;
  // const year = dateTime.split('-')[0];
  // return (
  //   <div>
  //     <h1>TEDxDTU {year}</h1>
  //     <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
  //       {/* <ul> */}
  //       {speakersList.map((event) => (
  //         <VideoThumbnail
  //           videoTitle={event.topic}
  //           speaker={event.name}
  //           imageUrl={event.imageUrl}
  //           date={year}
  //           time={year}
  //           status='completed'
  //         // mode={event.mode}
  //         />
  //       ))}
  //       {/* </ul> */}
  //     </div>
  //   </div>
  // );
};

export default EventSection;
