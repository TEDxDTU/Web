import Link from "next/link";

const Thumbnail = ({ event, eventType, setDisplay, setEventInfo, setDisplayBookNotActive }) => {
  const { title, imageUrl, details, requiresTicket, areBookingActive } = event;

  return (
    <div className="shadow-md h-36 w-60 mx-8 mb-16 pb-10 border-2 border-[#737373]">
      <div className="relative">
        <img src={imageUrl} className="h-36 w-60" />
        <div className="absolute top-2 left-2">{title}</div>

        {((eventType === 'upcoming') && requiresTicket) && <div className="absolute right-0 bottom-2" onClick={() => {
          areBookingActive && setDisplay(true)
          !areBookingActive && setDisplayBookNotActive(true);
          setEventInfo(event);
        }}>
          <div className={`rounded-2xl ${areBookingActive ? 'cursor-pointer hover:bg-red-600 hover:text-white ' : 'cursor-not-allowed'} duration-200 delay-75 transition bg-white text-black p-1 mr-2 font-semibold`}>Book Now</div>
        </div>}

        {/* If ticket is not required, display Watch Now */}
        {(!requiresTicket) && <div className="absolute right-0 bottom-2" >
          <div className="rounded-2xl cursor-pointer duration-200 delay-75 transition hover:bg-red-600 hover:text-white bg-white text-black p-1 mr-2 font-semibold">Watch Now</div>
        </div>}

      </div>
      <div className="bg-[#303030] p-1 pl-2 outline outline-2 outline-[#737373]">{details.substring(0, 50)}
        {details.length > 50 ? "...." : ""}
        <Link href="/">View More</Link>
      </div>
    </div>
  );
};

export default Thumbnail;
