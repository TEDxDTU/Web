import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import firebaseConfigAPI from "../../firebaseAPI";
import { React, useRef, useState, useEffect } from "react";

const Thumbnail = ({ event, eventType, setDisplay, setEventInfo }) => {
  const { title, imageUrl, details, dateTime, areBookingActive } = event;

  const [hover, setHover] = useState(false);
  const backgroundElementRef = useRef(null)

  const router = useRouter();
  const auth = getAuth(initializeApp(firebaseConfigAPI));

  const viewMoreHandler = () => {
    router.push(`/events/${event._id}`);
  };

  useEffect(() => {
    if (hover === true) {
      backgroundElementRef.current.classList.replace("bg-[rgba(255,255,255,0.4)]", "bg-[rgba(255,255,255,0.6)]");
      backgroundElementRef.current.firstElementChild.classList.replace("bg-[#2C2C2C]", "bg-red-600");
    }
    if (hover === false) {
      backgroundElementRef.current.classList.replace("bg-[rgba(255,255,255,0.6)]", "bg-[rgba(255,255,255,0.4)]");
      backgroundElementRef.current.firstElementChild.classList.replace("bg-red-600", "bg-[#2C2C2C]");
    }
  }, [hover])

  return (
    <div>
      <div ref={backgroundElementRef} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        className="w-[70%] md:w-[90%] md:h-40 mx-auto  bg-[rgba(255,255,255,0.4)]
      duration-200 transition-colors rounded-2xl md:mx-8 mb-16 relative ">

        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          className="items-center md:items-stretch flex-col md:flex-row p-2 w-full md:h-full
      duration-200 transition-colors bg-[#2C2C2C] rounded-2xl flex z-10 md:absolute relative top-2 -left-2">
          <img src={imageUrl} className="h-34 md:max-w-[40%] object-cover rounded-2xl border-[rgba(255,255,255,0.1)] border-[1px]" />

          <div className="flex items-center md:items-stretch flex-col h-34">
            <div className=" px-4 md:ml-2 text-xl my-2  md:my-0">{title}</div>

            <div className=" p-1 px-4 md:ml-2 mb-4">
              {details.substring(0, 80)}
              {details.length > 80 ? "..." : ""}
            </div>
          </div>

          <div
            className="md:w-[14rem] text-center absolute -bottom-4 flex"
          >
            {eventType === "upcoming" && areBookingActive && (<div
              onClick={() => {
                if (auth.currentUser === null) {
                  alert("Please login to book the tickets.");
                  router.push("/register");
                  return;
                }

                setDisplay(true);
                setEventInfo(event);
              }}
              className="rounded-2xl cursor-pointer duration-200 delay-75 transition bg-red-500 hover:text-[#2C2C2C] hover:bg-white text-white py-1 px-3 mr-2 font-semibold">
              Book Now
            </div>)}
            <div onClick={viewMoreHandler} className="rounded-2xl cursor-pointer duration-200 delay-75 transition bg-red-500 hover:text-[#2C2C2C] hover:bg-white text-white py-1 px-3 mr-2 font-semibold">
              Read More
            </div>
          </div>


        </div>
      </div>
    </div>

    // Old Event Design

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
