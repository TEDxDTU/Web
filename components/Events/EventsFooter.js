import React from "react";

const EventsFooter = () => {
    return (<div className="bg-[rgba(255, 43, 6, 1)]" style={{ backgroundColor: "rgba(255, 43, 6, 1)" }}>
        <div className="flex justify-between">
            <div className="m-6 ml-16">
                <div className="font-bold text-6xl font-['Philosopher']">Previous</div>
                <div className="flex">
                    <div className="font-bold text-4xl font-['Helvetica'] mt-2">TED </div>
                    <div className="font-bold text-7xl font-['Philosopher'] Outlinestroke ml-2">Talks</div>
                </div>
            </div>
            <div className="flex">
                <div className="h-44 w-64 flex items-end mt-0.5 -mr-16 ml-0.5 bg-cover bg-[url('/LandingPage-Assets/speaker2.jpeg')] ClippingImage1">
                    <div className="ml-6 font-bold text-3xl">2018</div>
                </div>
                <div className="h-44 w-64 flex items-end mt-0.5 -mr-16 ml-0.5 bg-cover bg-[url('/LandingPage-Assets/speaker2.jpeg')] ClippingImage1">
                <div className="ml-6 font-bold text-3xl">2017</div>
                </div>
                <div className="h-44 w-64 flex items-end mt-0.5 -mr-16 ml-0.5 bg-cover bg-[url('/LandingPage-Assets/speaker2.jpeg')] ClippingImage1">
                <div className="ml-6 font-bold text-3xl">2016</div>
                </div>
                <div className="h-44 w-72  flex items-end mt-0.5 ml-0.5 bg-cover bg-[url('/LandingPage-Assets/speaker2.jpeg')] ClippingImage2">
                <div className="ml-6 font-bold text-3xl">2015</div>
                </div>
            </div>
        </div>
    </div>);
}
export default EventsFooter;