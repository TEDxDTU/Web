import Page from "../../components/Universal/Page";
import ReactPlayer from "react-player";
import React, { useContext, useState, useEffect } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { noEventContext } from "../../pages/events/[EventDetails]";
import SpeakerDetails from "./SpeakerDetails";
import SpeakerPopUp from "./SpeakerPopUp";
import EventInfo from "./EventInfo";
import Gallery from "./Gallery";
import Backdrop from "./Backdrop";

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
  const router = useRouter();
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

  console.log(eventDetails);

  let speakerDetails = {};
  
  useEffect(() => {
    if(displaySpeaker !== "null"){

      const findSpeaker = () => {
        for(let i = 0;i<eventDetails.speakersList.length;i++){
          if(eventDetails.speakersList[i]._id === displaySpeaker){
            speakerDetails = eventDetails.speakersList[i];
          }
        }
      }
  
      findSpeaker();
      console.log(speakerDetails);
    }
    else{
      console.log(displaySpeaker);
    }

  }, [displaySpeaker,speakerDetails])
  

  return (
    <Page pageTitle={"Events"}>
      <div className="">
        {eventDetails.streamingUrl !== null ? (
          <div className="relative flex items-center justify-center">
            <ReactPlayer
              className="w-3/5"
              url={eventDetails.streamingUrl}
              // width='100%'
              // height='100%'
              controls={true}
              light={eventDetails.imageUrl}
              playIcon={
                <div className="">
                  <h1 className="text-2xl md:text-3xl font-bold text-black lg:text-4xl capitalize m-4 absolute top-0 left-0">
                    {eventDetails.title}
                  </h1>
                  <FontAwesomeIcon
                    className="text-black w-4 sm:w-5 mx-auto md:w-6 lg:w-8 hover:text-red-600"
                    icon={faPlay}
                  ></FontAwesomeIcon>
                </div>
              }
            />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img className="w-3/5" src={eventDetails.imageUrl} />
          </div>
        )}
        {/* <h1 className="capitalize w-full text-5xl font-bold text-red-600">{eventDetails.eventType} event</h1> */}
        <h1 className="flex text-2xl md:text-3xl font-bold text-white lg:text-4xl capitalize m-4 items-center justify-center">
          {eventDetails.title}
        </h1>
        <div className="flex justify-center my-10 md:flex-column">
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
        <EventInfo eventDetails={eventDetails}></EventInfo>
      ) : null}

      {eventSection === "gallery" ? (
        <Gallery
          className="flex flex-wrap justify-around"
          eventDetails={eventDetails}
        ></Gallery>
      ) : null}

      <displaySpeakerContext.Provider value={setDisplaySpeaker}>
        {displaySpeaker === "null" ? 
          null :
          <Backdrop></Backdrop>
        }
      </displaySpeakerContext.Provider>
      {displaySpeaker === "null" ? 
        null :
        <SpeakerPopUp displaySpeaker = {displaySpeaker} eventDetails={eventDetails} ></SpeakerPopUp>
      }

    </Page>
  );
};

export default EventDetails;
