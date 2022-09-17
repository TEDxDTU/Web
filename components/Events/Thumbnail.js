// import Link from "next/link";
import { useRouter } from "next/router";
// import { useEffect } from "react";

const Thumbnail = ({ event, eventType, setDisplay, setEventInfo }) => {
  const { title, imageUrl, details, dateTime } = event;
  const router = useRouter();

  const viewMoreHandler = () => {
    if (eventType === "live") {
      router.push(`/live-event`);
      return;
    }
    console.log(event);
    router.push(`/events/${event._id}`);
  };

  return (
    <div className="shadow-md h-36 w-60 mx-8 mb-16 pb-10 border-2 border-[#737373]">
      <div className="relative">
        <img src={imageUrl} className="h-36 w-60" />
        <div className="absolute top-2 left-2">{title}</div>
        {eventType === "upcoming" && (
          <div
            className="absolute right-0 bottom-2"
            onClick={() => {
              setDisplay(true);
              setEventInfo(event);
            }}
          >
            <div className="rounded-2xl cursor-pointer duration-200 delay-75 transition hover:bg-red-600 hover:text-white bg-white text-black py-1 px-3 mr-2 font-semibold">
              Book Now
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#303030] p-1 pl-2 outline outline-2 outline-[#737373]">
        {details.substring(0, 50)}
        {details.length > 50 ? "..." : ""}
        <button className="text-red-600 ml-2" onClick={viewMoreHandler}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Thumbnail;
