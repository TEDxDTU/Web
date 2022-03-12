const Thumbnail = ({ event }) => {
  const { title, imageUrl, details, dateTime } = event;

  return (
    <div className={"text-center shadow-md h-36 w-60 relative"}>
      <img
        src={imageUrl}
        className="h-36 w-60"
      />
      <div className="absolute top-0 left-0">{title}</div>
      <div className="absolute top-16 left-0">{details}</div>
    </div>
  );
};

export default Thumbnail;