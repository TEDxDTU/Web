import Page from "../../components/Universal/Page";
import React, { useContext, useState } from "react";
import { noEventContext } from "../../pages/events/[EventDetails]";
import SpeakerDetails from "./SpeakerDetails";
import { getAuth } from 'firebase/auth';
import { useRouter } from "next/router";
import { initializeApp } from 'firebase/app';
import firebaseConfigAPI from '../../firebaseAPI';
import { TicketSelection } from "../Events/ExtraComponent";
import SpeakerPopUp from "./SpeakerPopUp";
import EventInfo from "./EventInfo";
import Gallery from "./Gallery";
import VideoCarousel from "./VideoCarousel";

const findEvent = (pastEvents, upcomingEvents, eventID) => {
  const pastEventsSize = pastEvents?.length;
  const upcomingEventsSize = upcomingEvents?.length;

  for (var i = 0; i < pastEventsSize; i++) {
    if (eventID === pastEvents[i]?._id) {
      return pastEvents[i];
    }
  }
  for (var i = 0; i < upcomingEventsSize; i++) {
    if (eventID === upcomingEvents[i]?._id) {
      return upcomingEvents[i];
    }
  }

  return null;
};

export const displaySpeakerContext = React.createContext();

const EventDetails = ({ eventID, pastEvents, upcomingEvents }) => {
  const eventDetails = findEvent(pastEvents, upcomingEvents, eventID);
  const auth = getAuth(initializeApp(firebaseConfigAPI));
  const setNoEvent = useContext(noEventContext);
  const [eventSection, setEventSection] = useState("speakerInfo");
  const [displaySpeaker, setDisplaySpeaker] = useState("null");
  const [numTickets, setnumTickets] = useState(1);
  const [display, setDisplay] = useState(false);
  const router=useRouter();

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const user = localStorage.getItem("profile");
    const url = `/api/tickets/generate-order`;
    const { title, _id } = eventDetails;
    const price = eventDetails?.price;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ user, numTickets, price }),
      headers: {
        authorization: auth?.currentUser?.accessToken,
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();
    const { email, name, firebaseID } = JSON.parse(user);

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data?.currency,
      amount: data?.amount.toString(),
      order_id: data?.orderID,
      notes: { _id, firebaseID },
      name: "Ticket Booking",
      numTickets: numTickets,
      description: title,
      image: "/LandingPage/Tab-Logo-Black.svg",
      handler: function (response) {
        setDisplay(false);
        setnumTickets(1);
      },
      prefill: {
        name: name,
        email: email,
        phone_number: ''
      }
    }
    const paymentObject = new window.Razorpay(options);
    paymentObject?.open();
  }
  if (eventDetails === null) {
    setNoEvent(true);
    return null;
  }

  const speakerList = [];

  for (let i = 0; i < eventDetails?.speakersList?.length; i++) {
    speakerList.push(
      <SpeakerDetails
        speaker={eventDetails?.speakersList[i]}
        key={i}
      ></SpeakerDetails>
    );
  }
console.log(eventDetails);
  return (
    <Page pageTitle={"Events"}>
      {display && <TicketSelection setDisplay={setDisplay} numTickets={numTickets} setnumTickets={setnumTickets} eventInfo={eventDetails} displayRazorpay={displayRazorpay} />}

      <div className={`${display && 'pointer-events-none opacity-25'} flex flex-col items-center justify-center`}>

        {eventDetails?.videoUrls?.length !== 0 ? (
          <VideoCarousel
            videoUrls={[...eventDetails.videoUrls]}
            imageUrl={eventDetails.imageUrl}
            title={eventDetails.title}>
          </VideoCarousel>
        ) : (
          // <div className="flex items-center justify-center md:w-4/6 w-5/6 h-4/6 md:h-3/4">
          //   <img className="w-5/6" src={eventDetails.imageUrl} />
          // </div>
          <div className="md:w-4/6 h-5/6 md:h-4/6 md:h-3/4">
            <div className="flex justify-center relative">
              <img className="w-[90%]" src={eventDetails?.imageUrl} />
            </div>
          </div>
        )}

        <h1 className="flex items-center justify-center flex-row">
          <div className="flex flex-col md:flex-row">
            <div className="text-2xl md:text-3xl font-bold text-white lg:text-4xl capitalize my-1 md:my-4 md:ml-4 mr-0 text-center md:text-left ">{eventDetails.eventType === "upcoming" && "TEDxDTU 2022 | "}</div>
            <div className="text-2xl md:text-3xl font-bold text-white lg:text-4xl capitalize my-1 md:my-4 md:mr-4 ml-1 text-center md:text-left">{eventDetails?.title}</div>
          </div>
          {eventDetails?.areBookingActive && 
          <div className="rounded-2xl cursor-pointer mt-2 duration-200 delay-75 transition ml-5 md:ml-0
          bg-red-500 hover:text-[#2C2C2C] hover:bg-white text-[rgb(255,255,255)] py-1 px-3 mr-2 font-semibold"
           onClick={() => {
            if (auth?.currentUser === null) {
              alert("Please login to book the tickets.");
              router?.push("/register");
              return;
            }
            setDisplay(true);
          }}>
            Book Now
          </div>}
        </h1>
        <div className="flex space-y-5 sm:space-y-0 justify-center my-10 flex-col sm:flex-row">
          {eventSection === "speakerInfo" ? (
            <button
              onClick={() => setEventSection("speakerInfo")}
              className="transition-all mx-10 lg:text-md rounded-full px-4 py-1 bg-red-600 text-white"
            >
              Speaker Info
            </button>
          ) : (
            <button
              onClick={() => setEventSection("speakerInfo")}
              className="bg-white transition-all mx-10 lg:text-md text-black rounded-full px-4 py-1 hover:bg-red-600 hover:text-white"
            >
              Speaker Info
            </button>
          )}
          {eventSection === "eventInfo" ? (
            <button
              onClick={() => setEventSection("eventInfo")}
              className="transition-all mx-10 lg:text-md rounded-full px-4 py-1 bg-red-600 text-white"
            >
              Event Info
            </button>
          ) : (
            <button
              onClick={() => setEventSection("eventInfo")}
              className="bg-white transition-all mx-10 lg:text-md text-black rounded-full px-4 py-1 hover:bg-red-600 hover:text-white"
            >
              Event Info
            </button>
          )}
          {eventSection === "gallery" ? (
            <button
              onClick={() => setEventSection("gallery")}
              className="transition-all mx-10 lg:text-md rounded-full px-4 py-1 bg-red-600 text-white"
            >
              Gallery
            </button>
          ) : (
            <button
              onClick={() => setEventSection("gallery")}
              className="bg-white transition-all mx-10 lg:text-md text-black rounded-full px-4 py-1 hover:bg-red-600 hover:text-white"
            >
              Gallery
            </button>
          )}
        </div>
      </div>
      <displaySpeakerContext.Provider value={setDisplaySpeaker}>
        {eventSection === "speakerInfo" ? (
          <div className="flex flex-wrap justify-around">{speakerList}</div>
        ) : null}
      </displaySpeakerContext.Provider>

      {eventSection === "eventInfo" ? (
        <div className="pt-5 pb-16">
          <EventInfo eventDetails={eventDetails}></EventInfo>
        </div>
      ) : null}

      {eventSection === "gallery" ? (
        <div className="bottom-0">
          <Gallery eventDetails={eventDetails}></Gallery>
        </div>
      ) : null}

      <displaySpeakerContext.Provider value={setDisplaySpeaker}>
        {displaySpeaker === "null" ? null : (
          <SpeakerPopUp
            displaySpeaker={displaySpeaker}
            eventDetails={eventDetails}
          ></SpeakerPopUp>
        )}
      </displaySpeakerContext.Provider>
    </Page>
  );
};

export default EventDetails;
