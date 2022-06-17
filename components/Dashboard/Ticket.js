import React from "react";

export default function Ticket() {

    return (<div className="flex pb-5">
        <div className="border-scoop-right pl-3 text-black">
            <div>
                <div className="font-bold pt-1 pr-8 leading-tight">Ted Talks with Dr. Susmita Rai</div>
            </div>
            <div className="my-1">Design for Innovation</div>
            <div className="text-xs flex mt-3">
                <div className="mr-1"><img className="text-black mt-2" src="/SingleEvent/map-pin.svg" /></div>
                <div>Ampitheater, Delhi Technological University, 110049 </div>
            </div>
        </div>
        <div className="border-scoop-left border-l-2 border-[#555555] border-dashed">
            <div className="flex">
                <img className="text-black mt-4 ml-2 w-3 h-3" src="/SingleEvent/calendar.svg" />
                <div className="mt-3.5 text-xs font-semibold ml-1 md:ml-2">1st Feb'2022</div>
            </div>
            <div className="flex">
                <img className="text-black mt-3 ml-2 w-3 h-3" src="/SingleEvent/clock.svg" />
                <div className="mt-1 text-xs ml-2 leading-tight">13:00 hrs onwards</div>
            </div>
            <div className="ml-8 mt-2 bg-[#6F6F6F] h-fit w-fit px-1 rounded-2xl">
                <div className="flex">
                    3<img className="text-black mt-2 ml-2 w-3 h-3" src="/Dashboard/profile.svg" />
                </div>
            </div>
            <img src="/LandingPage/Logo-White-Text.svg" className="h-4 w-20 ml-2.5 mt-1" />
        </div>
    </div>)
}