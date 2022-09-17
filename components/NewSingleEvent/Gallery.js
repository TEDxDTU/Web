const EventInfo = ({ eventDetails }) => {
  const galleryList = [];

  if (eventDetails.galleryImageUrls === null) {
    galleryList.push(<h1 key={0}>No gallery Items!</h1>);
  } else {
    for (let i = 0; i < eventDetails.galleryImageUrls.length; i++) {
      galleryList.push(
        <img
          className="rounded w-3/4 m-4"
          src={eventDetails.galleryImageUrls[i]}
          key={i}
        ></img>
      );
    }
  }

  return <div className="flex flex-wrap justify-around">{galleryList}</div>;
};

export default EventInfo;
