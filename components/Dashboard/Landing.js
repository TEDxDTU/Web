import React, { useState, useEffect } from "react";
import Page from "../Universal/Page";
import EditProfile from "./EditProfile";
import LiveEvent from "./LiveEvent";
import MyTicketPage from "./myTicketPage";
import Profile from "./Profile";
import Settings from "./Settings";

export default function Landing({ allEvents }) {

    const { liveEvent, pastEvents } = allEvents;
    const [option, setOption] = useState("Profile");
    const [isLargeViewPort, setIsLargeViewPort] = useState(null);

    useEffect(function () {
    }, []);
    useEffect(
        () =>
            (async () => {
                if (innerWidth >= 768) setIsLargeViewPort(true);
                window.addEventListener("resize", (evt) => {
                    if (innerWidth >= 768) setIsLargeViewPort(true);
                    else {
                        setIsLargeViewPort(false);
                    }
                });
            })(),
        []
    );

    return (<Page pageTitle={'Dashboard'}>
        {isLargeViewPort && <div className="grid grid-cols-3 gap-4 px-12 py-4 h-screen">
            <div className="col-span-1 md:mr-8 lg:mr-24 mt-8">
                <Profile setOption={setOption} option={option} />
            </div>
            <div className="col-span-2 ">
                {option === 'Profile' && <EditProfile />}
                {option === 'Tickets' && <MyTicketPage />}
                {option === 'Settings' && <Settings />}
            </div>
        </div>}
        {!isLargeViewPort && <div className="py-4 h-screen">
            <div className="mt-8 px-12">
                <Profile setOption={setOption} option={option} />
            </div>
            <div className="bg-black px-12 ">
                {option === 'Profile' && <div className=""><EditProfile /></div>}
                {option === 'Tickets' && <MyTicketPage />}
                {option === 'Settings' && <Settings />}
            </div>
        </div>}
    </Page>)
}