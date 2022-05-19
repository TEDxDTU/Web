import React from "react";

const EventInfo = () => {
    return (<div className="bg-[rgba(100,100,100,0.3)] p-4 md:p-8 my-8 mx-6 md:mx-10 lg:mx-12 rounded-xl">
        <div className="flex flex-wrap">
            <div className="mr-10 text-md md:text-xl -mt-1">Category</div>
            <div className="mr-4 mb-2 text-sm bg-[#5B5B5B] h-5 px-2 align-middle rounded-md">Design</div>
            <div className="mr-4 mb-2 text-sm bg-[#5B5B5B] h-5 px-2 align-middle rounded-md">Design Principles</div>
            <div className="mr-4 mb-2 text-sm bg-[#5B5B5B] h-5 px-2 align-middle rounded-md">Innovation</div>
        </div>
        <div className="flex mt-8 text-md sm:text-xl">
            <img className="mr-4" src="/SingleEvent/map-pin.svg" />Ampitheater, Delhi Technological University,
            110049 </div>
        <div className="flex mt-3 text-md sm:text-xl">
            <img className="mr-4" src="/SingleEvent/calendar.svg" />1st february, 2022</div>
        <div className="flex mt-3 text-md sm:text-xl">
            <img className="mr-4" src="/SingleEvent/clock.svg" />13:00 hrs IST</div>
        <div className="bg-[#5B5B5B] rounded-xl mt-10 p-4 lg:px-12 md:px-8 sm:px-6">
            <div className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">About</div>
            <div className="text-md md:text-lg my-4">As human beings, we get used to "the way things are" really fast.
                But for designers, the way things are is an opportunity ... Could
                things be better? How? In this funny, breezy talk, the man behind
                the iPod and the Nest thermostat shares some of his tips for
                noticing — and driving — change.</div>
        </div>
        <div className="text-center">
            <button className="bg-red-600 w-28 h-12 text-lg mt-6 ">
                Book Now
            </button>
        </div>
    </div>);
}

export default EventInfo;