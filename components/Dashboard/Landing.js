import React, { useState, useEffect, useContext } from "react";
import Page from "../Universal/Page";
import EditProfile from "./EditProfile";
import Spinner from "../Universal/spinner";
import { LoadingContext } from "../../contextFiles/loadingContext"
import { MyTicketPage } from "./myTicketPage";
import Profile from "./Profile";
import Settings from "./Settings";

export default function Landing({ allEvents }) {

    const { liveEvent, pastEvents } = allEvents;
    const [option, setOption] = useState("Profile");
    const [isLargeViewPort, setIsLargeViewPort] = useState(null);
    const [loading, setLoading] = useContext(LoadingContext);

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
        <div className="relative">
            {loading && <Spinner />}
            {isLargeViewPort && <div className={`${loading && 'pointer-events-none opacity-25'} grid grid-cols-3 gap-4 px-12 py-4 h-screen`}>
                <div className="col-span-1 md:mr-8 lg:mr-24 mt-8">
                    <Profile setOption={setOption} option={option} />
                </div>
                <div className="col-span-2">
                    {option === 'Profile' && <EditProfile />}
                    {option === 'Tickets' && <MyTicketPage />}
                    {option === 'Settings' && <Settings />}
                </div>
            </div>}
            {!isLargeViewPort && <div className={`${loading && 'pointer-events-none opacity-25'} py-4 h-screen`}>
                <div className="mt-8 px-12">
                    <Profile setOption={setOption} option={option} />
                </div>
                <div className="bg-black px-4 ">
                    {option === 'Profile' && <div className=""><EditProfile /></div>}
                    {option === 'Tickets' && <MyTicketPage />}
                    {option === 'Settings' && <Settings />}
                </div>
            </div>}
        </div>
    </Page>)
}