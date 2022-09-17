import React from "react";
const SpeakerDetails = ({ speaker }) => {
  // function textCover(bio){
  //     const width = window.innerWidth;

  //     if(width>1280){
  //         bio = bio.slice(0,5);
  //         bio += "..."
  //     }
  //     return bio;
  // }
  return (
    <div className="flex w-2/5 bg-white m-6 text-black hover:shadow-white hover:shadow-md hover:transition-shadow rounded-md">
      <div className="flex item-center h-full justify-center ">
        <img
          className="h-[10rem] w-[10rem] m-2 items-center justify-center rounded-md"
          src={speaker.imageUrl}
        />
      </div>
      <div className="m-2 w-3/6 md:h-2/3">
        <div className="font-bold">{speaker.name}</div>
        <div className="text-sm font-light">{speaker.bio}</div>
      </div>
    </div>
  );
};

export default SpeakerDetails;
