import React from "react";
import { displaySpeakerContext } from "./EventDetails";
import { useContext } from "react";
const SpeakerDetails = ({ speaker }) => {
  // function textCover(bio){
  //     const width = window.innerWidth;

  //     if(width>1280){
  //         bio = bio.slice(0,5);
  //         bio += "..."
  //     }
  //     return bio;
  // }

  const setDisplaySpeaker = useContext(displaySpeakerContext);

  return (
    <div onClick={() => {setDisplaySpeaker(speaker._id)}} className="cursor-pointer flex flex-col sm:flex-row w-[45%] sm:w-2/5 bg-[rgba(100,100,100,0.3)] m-6 text-white hover:shadow-[#2C2C2C] hover:shadow-md hover:transition-shadow rounded-md">
      <div className=" item-center h-full justify-center w-full sm:w-fit sm:h-fit sm:ml-2 ">
        <img
          className="h-[10rem] w-[10rem] m-2 rounded-md mx-auto mt-5 sm:mt-2"
          src={speaker.imageUrl}
        />
      </div>
      <div className="m-4 sm:w-3/6 sm:h-2/3 flex flex-col items-center justify-center sm:items-start sm:justify-start">
        <div className="font-bold ">{speaker.name}</div>
        <div className="text-sm font-light">{speaker.bio}</div>
      </div>
    </div>
  );
};

export default SpeakerDetails;
