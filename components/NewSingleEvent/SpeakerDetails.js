import React from "react";
import { displaySpeakerContext } from "./EventDetails";
import { useContext,useState,useEffect } from "react";
const SpeakerDetails = ({ speaker }) => {

  const [isLargeViewPort, setIsLargeViewPort] = useState(null);
  const [isSmallViewPort, setIsSmallViewPort] = useState(null);
  const [isMediumViewPort, setIsMediumViewPort] = useState(null);

  useEffect(
    () =>
      (async () => {
        if (innerWidth >= 1024) setIsLargeViewPort(true);
        else setIsLargeViewPort(false);
        
        if (innerWidth < 640) setIsSmallViewPort(true);
        else setIsSmallViewPort(false);
        
        if(innerWidth > 640 && innerWidth < 768) setIsMediumViewPort(true);
        else setIsMediumViewPort(false);

        window.addEventListener("resize", (evt) => {
          if (innerWidth >= 1024) setIsLargeViewPort(true);
          else setIsLargeViewPort(false);

          if (innerWidth < 640) setIsSmallViewPort(true);
          else setIsSmallViewPort(false);
          
          if(innerWidth > 640 && innerWidth < 768) setIsMediumViewPort(true);
          else setIsMediumViewPort(false);
        });
      })(),
    []
  );

  let speakerBio = speaker.bio;

  if(speaker.bio.length > 230){
    speakerBio = speaker.bio.slice(0,230);
    if(isMediumViewPort === true) speakerBio = speaker.bio.slice(0,80);
    if(isSmallViewPort === true) speakerBio = speaker.bio.slice(0,230);
    if(isMediumViewPort === false && isLargeViewPort === false) speakerBio = speaker.bio.slice(0,180);
    speakerBio += "...";
  }

  const setDisplaySpeaker = useContext(displaySpeakerContext);

  return (
    <div onClick={() => {setDisplaySpeaker(speaker._id)}} className="cursor-pointer flex flex-col sm:flex-row w-[45%] sm:w-2/5 bg-gray-700 hover:bg-red-600 m-6 text-black hover:shadow-red-500/40 hover:ease-in duration-300 hover:shadow-md hover:transition-shadow rounded-md">
      <div className=" item-center justify-center mx-auto sm:ml-3 sm:mt-1 sm:mr-3">

        <img
          className="h-[10rem] w-[10rem] rounded-md mt-5 sm:mt-2  sm:mb-3 object-cover"
          src={speaker.imageUrl}
        />
      </div>
      <div className="m-4 sm:w-3/6 sm:h-2/3 flex flex-col items-center justify-center sm:items-start sm:justify-start">
        <div className="font-bold ">{speaker.name}</div>
        <div className="text-sm font-light">{speakerBio}</div>
      </div>
    </div>
  );
};

export default SpeakerDetails;
