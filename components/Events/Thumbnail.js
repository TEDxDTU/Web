const Thumbnail = ({ event, eventType }) => {
  const { title, imageUrl, details, dateTime } = event;

  return (
    <div className="shadow-md h-36 w-60 mx-8 mb-16 pb-10 border-2 border-[#737373]">
      <div className="relative">
        <img
          src={imageUrl}
          className="h-36 w-60"
        />
        <div className="absolute top-2 left-2">{title}</div>
        {(eventType === 'live') && <div className="absolute right-0 bottom-2">
            <div className="rounded-2xl cursor-pointer hover:bg-red-600 hover:text-white bg-white text-black p-1 mr-2 font-semibold">Book Now</div>
        </div>}
      </div>
      <div className="bg-[#303030] p-1 pl-2 outline outline-2 outline-[#737373]">{details}</div>

    </div>
  );
};

export default Thumbnail;