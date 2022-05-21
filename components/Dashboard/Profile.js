import React from "react";
import { OptionsButton } from "./SharedComp";

export default function Profile() {
    return (<div className="fixed">
        <div className="flex justify-around">
            <img src="/LandingPage/speakers.png" className="h-24 w-24 rounded-full text-center" />
        </div>
        <div className="bg-[rgba(100,100,100,0.3)] rounded-md -mt-12 pt-14 pb-2">
            <div className="text-center font-semibold text-xl">Anushree</div>
            <div className="text-center text-sm">Student</div>
            <div className="h-0.5 bg-black my-4"></div>
            <OptionsButton src='/Dashboard/profile.svg' name='Profile' />
            <OptionsButton src='/Dashboard/event.svg' name='Events' />
            <OptionsButton src='/Dashboard/ticket.svg' name='Tickets' />
            <OptionsButton src='/Dashboard/upcoming.svg' name='Upcoming' />
            <OptionsButton src='/Dashboard/settings.svg' name='Settings' />
        </div>
    </div>)
}