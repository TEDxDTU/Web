import React, { useState } from "react";
import Page from "../Universal/Page";
import EditProfile from "./EditProfile";
import LiveEvent from "./LiveEvent";
import Profile from "./Profile";

export default function Landing({ allEvents }) {

    const { liveEvent, pastEvents } = allEvents;
    const [option, setOption] = useState("Profile");

    return (<Page pageTitle={'Dashboard'}>
        <div className="grid grid-cols-3 gap-4 px-12 py-4">
            <div className="col-span-1 mr-24 mt-8">
                <Profile setOption={setOption} option={option} />
            </div>
            <div className="col-span-2 ">
                {option === 'Profile' && <EditProfile />}
                {option === 'Live Event' && <LiveEvent liveEvent={liveEvent} pastEvents={pastEvents} />}
            </div>
        </div>
    </Page>)
}