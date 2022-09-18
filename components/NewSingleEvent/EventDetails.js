import Page from "../../components/Universal/Page";
import ReactPlayer from "react-player";
import React, { useContext, useState, useEffect } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useRouter } from "next/router";
import { noEventContext } from "../../pages/events/[EventDetails]";
import SpeakerDetails from "./SpeakerDetails";
import SpeakerPopUp from "./SpeakerPopUp";
import EventInfo from "./EventInfo";
import Gallery from "./Gallery";

const findEvent = (pastEvents, upcomingEvents, eventID) => {
  const pastEventsSize = pastEvents.length;
  const upcomingEventsSize = upcomingEvents.length;

  for (var i = 0; i < pastEventsSize; i++) {
    if (eventID === pastEvents[i]._id) {
      return pastEvents[i];
    }
  }
  for (var i = 0; i < upcomingEventsSize; i++) {
    if (eventID === upcomingEvents[i]._id) {
      return upcomingEvents[i];
    }
  }

  return null;
};

export const displaySpeakerContext = React.createContext();

const EventDetails = ({ eventID, pastEvents, upcomingEvents }) => {
  const eventDetails = findEvent(pastEvents, upcomingEvents, eventID);
  const setNoEvent = useContext(noEventContext);
  const [eventSection, setEventSection] = useState("speakerInfo");
  const [displaySpeaker, setDisplaySpeaker] = useState("null");

  if (eventDetails === null) {
    setNoEvent(true);
    return null;
  }

  const speakerList = [];

  for (let i = 0; i < eventDetails.speakersList.length; i++) {
    speakerList.push(
      <SpeakerDetails
        speaker={eventDetails.speakersList[i]}
        key={i}
      ></SpeakerDetails>
    );
  }

  // console.log(eventDetails);

  return (
    <Page pageTitle={"Events"}>
      <div className="flex flex-col items-center justify-center">
        {eventDetails.streamingUrl !== null ? (
          <div className="relative flex items-center justify-center md:w-4/6 w-3/4 h-1/2 md:h-3/4">
            <ReactPlayer
              className=""
              url={eventDetails.streamingUrl}
              controls={true}
              light={eventDetails.imageUrl}
              playIcon={
                <div className="relative w-full h-full items-center justify-center flex">
                  <h1 className="text-2xl lg:text-4xl font-light text-white drop-shadow capitalize absolute top-0 left-0 pl-2 pt-2">
                    {eventDetails.title}
                  </h1>
                  <div className="w-full h-fit flex justify-center">
                    <FontAwesomeIcon
                      className="text-white w-4 sm:w-5 lg:w-8 hover:text-red-600"
                      icon={faPlay}
                    />
                  </div>
                </div>
              }
            />
          </div>
        ) : (
          <div className="flex items-center justify-center md:w-4/6 w-3/4 h-1/2 md:h-3/4">
            <img className="w-3/5" src={eventDetails.imageUrl} />
          </div>
        )}
        <h1 className="flex text-2xl md:text-3xl font-bold text-white lg:text-4xl capitalize m-4 items-center justify-center">
          {eventDetails.title}
        </h1>
        <div className="flex space-y-5 sm:space-y-0 justify-center my-10 flex-col sm:flex-row">
          {eventSection === "speakerInfo" ?
            <button
              onClick={() => setEventSection("speakerInfo")}
              className="transition-all mx-10 lg:text-md rounded-full px-4 py-1 bg-red-600 text-white"
            >
              Speaker Info
            </button>
            :
            <button
              onClick={() => setEventSection("speakerInfo")}
              className="bg-white transition-all mx-10 lg:text-md text-black rounded-full px-4 py-1 hover:bg-red-600 hover:text-white"
            >
              Speaker Info
            </button>
          }
          {eventSection === "eventInfo" ?
            <button
              onClick={() => setEventSection("eventInfo")}
              className="transition-all mx-10 lg:text-md rounded-full px-4 py-1 bg-red-600 text-white"
            >
              Event Info
            </button>
            :
            <button
              onClick={() => setEventSection("eventInfo")}
              className="bg-white transition-all mx-10 lg:text-md text-black rounded-full px-4 py-1 hover:bg-red-600 hover:text-white"
            >
              Event Info
            </button>
          }
          {eventSection === "gallery" ?
            <button
              onClick={() => setEventSection("gallery")}
              className="transition-all mx-10 lg:text-md rounded-full px-4 py-1 bg-red-600 text-white"
            >
              Gallery
            </button>
            :
            <button
              onClick={() => setEventSection("gallery")}
              className="bg-white transition-all mx-10 lg:text-md text-black rounded-full px-4 py-1 hover:bg-red-600 hover:text-white"
            >
              Gallery
            </button>
          }
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
        <Gallery eventDetails={eventDetails}></Gallery>
      ) : null}

      <displaySpeakerContext.Provider value={setDisplaySpeaker}>
        {displaySpeaker === "null" ? 
          null :
          <SpeakerPopUp displaySpeaker = {displaySpeaker} eventDetails={eventDetails} ></SpeakerPopUp>
        }
      </displaySpeakerContext.Provider>

    </Page>
  );
};

export default EventDetails;
