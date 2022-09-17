import { useContext } from "react";
import { displaySpeakerContext } from "./EventDetails";

const Backdrop = () =>{
    const setDisplaySpeaker = useContext(displaySpeakerContext);
    return(
        <div onClick={()=>{setDisplaySpeaker("null")}} className="opacity-75 w-full h-screen fixed top-0 left-0 bg-black z-1"></div>
    )
}

export default Backdrop;