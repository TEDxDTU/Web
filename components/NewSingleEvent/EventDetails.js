import Page from "../../components/Universal/Page";
import ReactPlayer from 'react-player';
import style from './EventStyles.module.css'
import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const playerClickHandler= () =>{
    
}

const EventDetails = ({eventID, pastEvents, upcomingEvents}) =>{

    const eventDetails = findEvent(pastEvents,upcomingEvents,eventID);
    console.log(eventDetails);
    return (
    <Page pageTitle={"Events"}>
        <div className={`${style.playerWrapper}`}>
            <ReactPlayer
                className='absolute top-0 left-0'
                url='https://www.youtube.com/watch?v=dFgzHOX84xQ&ab_channel=TraversyMedia'
                width='100%'
                height='100%'
                controls = {true}
                light={eventDetails.imageUrl}
                playIcon={<div>
                    <h1 className="text-2xl md:text-3xl font-bold text-black lg:text-4xl capitalize m-4">{eventDetails.title}</h1>
                </div>}
            />
        </div>
        {/* <h1 className="capitalize w-full text-5xl font-bold text-red-600">{eventDetails.eventType} event</h1> */}
        <h1 className=" text-2xl md:text-3xl font-bold text-white lg:text-4xl  capitalize m-4">{eventDetails.title}</h1>
        <div className="flex justify-around mt-6">
            <button className="bg-white transition-all text-black rounded-full px-3 py-1 hover:bg-red-600 hover:text-white hover:border-2 hover:border-rose-500">Speaker info</button>
            <button className="bg-white transition-all text-black rounded-full px-3 py-1 hover:bg-red-600 hover:text-white hover:border-2 hover:border-rose-500">Event info</button>
            <button className="bg-white transition-all text-black rounded-full px-3 py-1 hover:bg-red-600 hover:text-white hover:border-2 hover:border-rose-500">Gallery</button>
        </div>
    </Page>
    );
}

export default EventDetails;