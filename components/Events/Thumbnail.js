import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import firebaseConfigAPI from "../../firebaseAPI";

const Thumbnail = ({ event, eventType, setDisplay, setEventInfo }) => {
  const { title, imageUrl, details, dateTime, areBookingActive } = event;
  const router = useRouter();
  const auth = getAuth(initializeApp(firebaseConfigAPI));

  const viewMoreHandler = () => {
    if (eventType === "live") {
      router.push(`/live-event`);
      return;
    }
    router.push(`/events/${event._id}`);
  };

  return (
    <div>
      <div
        onClick={viewMoreHandler}
        className=" cursor-pointer h-auto items-center md:items-stretch flex-col md:flex-row md:h-40 mx-auto md:mx-8 mb-8 p-2 w-[70%]  md:w-[90%]  
      hover:bg-red-600 border-t-2 border-r-2 border-white duration-200 transition-colors bg-[#2C2C2C] rounded-2xl flex"
      >
        <img
          src={imageUrl}
          className="h-34 md:max-w-[40%] object-cover rounded-2xl border-[rgba(255,255,255,0.1)] border-[1px]"
        />

        <div className="flex items-center md:items-stretch flex-col h-34">
          <div className=" px-4 md:ml-2 text-xl my-2  md:my-0">{title}</div>

          <div className=" p-1 px-4 md:ml-2">
            {details.substring(0, 80)}
            {details.length > 80 ? "..." : ""}
          </div>
        </div>

        {eventType === "upcoming" && areBookingActive && (
          <div
            className="md:w-[7rem] text-center absolute bottom-6"
            onClick={() => {
              if (auth.currentUser === null) {
                alert("Please login to book the tickets.");
                router.push("/register");
                return;
              }

              setDisplay(true);
              setEventInfo(event);
            }}
          >
            <div className="rounded-2xl cursor-pointer duration-200 delay-75 transition bg-red-500 hover:text-[#2C2C2C] hover:bg-white text-white py-1 px-3 mr-2 font-semibold">
              Book Now
            </div>
          </div>
        )}
      </div>
    </div>
    // <div className="shadow-md h-36 w-60 mx-8 mb-16 pb-10 border-2 border-[#737373]">
    //   <div className="relative">
    //     <img src={imageUrl} className="h-36 w-60" />
    //     <div className="absolute top-0 left-0 py-1 pl-2 bg-black bg-opacity-30 w-full drop-shadow-sm">
    //       {title}
    //     </div>
    // {eventType === "upcoming" && areBookingActive && (
    //   <div
    //     className="absolute right-0 bottom-2"
    //     onClick={() => {

    //       if (auth.currentUser === null) {
    //         alert("Please login to book the tickets.");
    //         router.push("/register");
    //         return;
    //       }

    //       setDisplay(true);
    //       setEventInfo(event);
    //     }}
    //   >
    //     <div className="rounded-2xl cursor-pointer duration-200 delay-75 transition hover:bg-red-600 hover:text-white bg-white text-black py-1 px-3 mr-2 font-semibold">
    //       Book Now
    //     </div>
    //   </div>
    // )}
    //   </div>
    //   <div className="bg-[#303030] p-1 pl-2 outline outline-2 outline-[#737373]">
    //     {details.substring(0, 50)}
    //     {details.length > 50 ? "..." : ""}
    //     {eventType != "live" && <button className="text-red-600 ml-2" onClick={viewMoreHandler}>
    //       View More
    //     </button>}
    //   </div>
    // </div>
  );
};

export default Thumbnail;
