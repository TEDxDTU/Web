import Page from "../../components/Universal/Page";
import ReactPlayer from 'react-player';
import style from './EventStyles.module.css'
import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRouter } from "next/router";
import { noEventContext } from "../../pages/events/[EventDetails]";
import { useContext,useState,useEffect} from "react";
import SpeakerDetails from "./SpeakerDetails";
import EventInfo from "./EventInfo";
import Gallery from "./Gallery";

const findEvent = (pastEvents,upcomingEvents,eventID) =>{
    const pastEventsSize = pastEvents.length;
    const upcomingEventsSize = upcomingEvents.length;

    for(var i = 0;i<pastEventsSize;i++){
        if(eventID === pastEvents[i]._id){
        return pastEvents[i];
        }
    }
    for(var i = 0;i<upcomingEventsSize;i++){
        if(eventID === upcomingEvents[i]._id){
        return upcomingEvents[i];
        }
    }

    return null;
}

const EventDetails = ({eventID, pastEvents, upcomingEvents}) =>{
    const router = useRouter();
    const eventDetails = findEvent(pastEvents,upcomingEvents,eventID);
    const setNoEvent = useContext(noEventContext);
    const [eventSection, setEventSection] = useState("speakerInfo")

    if(eventDetails === null){
        setNoEvent(true);
        return null;
    }

    const speakerList = [];

    for(let i = 0;i<eventDetails.speakersList.length;i++){
        speakerList.push(<SpeakerDetails speaker={eventDetails.speakersList[i]} key={i}></SpeakerDetails>)
    }

    console.log(eventDetails);


    return (
    <Page pageTitle={"Events"}>
        {eventDetails.streamingUrl !== null? 
            <div className={`${style.playerWrapper}`}>
                <ReactPlayer
                    className='absolute top-0 left-0'
                    url={eventDetails.streamingUrl}
                    width='100%'
                    height='100%'
                    controls = {true}
                    light={eventDetails.imageUrl}
                    playIcon={<div className="">
                        <h1 className="text-2xl md:text-3xl font-bold text-black lg:text-4xl capitalize m-4 absolute top-0 left-0">{eventDetails.title}</h1>
                        <FontAwesomeIcon className="text-black w-4 sm:w-5 mx-auto md:w-6 lg:w-8 hover:text-red-600" icon={faPlay}></FontAwesomeIcon>
                    </div>}
                />
            </div>:
            <div>
                <img className="" src={eventDetails.imageUrl}></img>
            </div>
        }
        {/* <h1 className="capitalize w-full text-5xl font-bold text-red-600">{eventDetails.eventType} event</h1> */}
        <h1 className=" text-2xl md:text-3xl font-bold text-white lg:text-4xl  capitalize m-4">{eventDetails.title}</h1>
        <div className="flex justify-around mt-6 md:flex-column">
            <button onClick={()=>setEventSection("speakerInfo")} className="bg-white transition-all  lg:text-md  text-black rounded-full px-4 py-1 hover:bg-red-600 hover:text-white hover:border-2 hover:border-rose-500">Speaker info</button>
            <button onClick={()=>setEventSection("eventInfo")} className="bg-white transition-all  lg:text-md  text-black rounded-full px-4 py-1 hover:bg-red-600 hover:text-white hover:border-2 hover:border-rose-500">Event info</button>
            <button onClick={()=>setEventSection("gallery")} className="bg-white transition-all  lg:text-md  text-black rounded-full px-4 py-1 hover:bg-red-600 hover:text-white hover:border-2 hover:border-rose-500">Gallery</button>
        </div>

        {eventSection === "speakerInfo" ? 
            <div className="flex flex-wrap justify-around my-10">
                {speakerList}
            </div> : null
        }

        {eventSection === "eventInfo"?
            <EventInfo eventDetails={eventDetails} ></EventInfo>: null
        }

        {eventSection === "gallery"?
            <Gallery eventDetails={eventDetails} ></Gallery>: null
        }
    </Page>
    );
}

export default EventDetails;