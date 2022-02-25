import VideoThumbnail from "./VideoThumbnail";

const EventSection = (props) => {
  const { year } = props;
  // const featuredEvents = getFeaturedEvents(year);
  return (
    <div>
      <h1>TEDxDTU {year}</h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
        <ul>
          {featuredEvents.map((event) => (
            <VideoThumbnail
              videoTitle={event.title}
              speaker={event.speaker}
              imgUrl={event.imgUrl}
              date={event.date}
              time={event.time}
              status={event.status}
              mode={event.mode}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventSection;
