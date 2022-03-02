import VideoThumbnail from "./VideoThumbnail";

const EventSection = (props) => {
  const {dateTime,speakersList}=props;
  const year =dateTime.split('-')[0];
  return (
    <div>
      <h1>TEDxDTU {year}</h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 flex">
        {/* <ul> */}
          {speakersList.map((event) => (
            <VideoThumbnail
              videoTitle={event.topic}
              speaker={event.name}
              imageUrl={event.imageUrl}
              date={year}
              time={year}
              status='completed'
              // mode={event.mode}
            />
          ))}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default EventSection;
