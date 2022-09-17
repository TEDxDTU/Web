import React from "react";
const SpeakerDetails = ({speaker}) =>{
    // function textCover(bio){
    //     const width = window.innerWidth;

    //     if(width>1280){
    //         bio = bio.slice(0,5);
    //         bio += "..."
    //     }
    //     return bio;
    // }
    return <div className="flex w-2/5 bg-white m-6 rounded-3xl text-black">
        <img className="h-15 md:h-18 lg:h-25 m-2 rounded-3xl" src={speaker.imageUrl}></img>
        <div className="my-2 mr-2">
            <div className="font-semibold">{speaker.name}</div>
            <div className="text-sm">{speaker.bio}</div>
        </div>
    </div>
}

export default SpeakerDetails;