import React, { useState, useContext } from "react";
import Page from "../Universal/Page";
import EditProfile from "./EditProfile";
import LiveEvent from "./LiveEvent";
import Profile from "./Profile";

export default function Landing() {

    const [option, setOption] = useState("Profile");

    return (<Page pageTitle={'Dashboard'}>
        <div className="grid grid-cols-3 gap-4 px-12 py-4">
            <div className="col-span-1 mr-20">
                <Profile setOption={setOption} option={option} />
            </div>
            <div className="col-span-2">
                {option === 'Profile' && <EditProfile />}
                {option === 'Events' && <LiveEvent />}
            </div>
        </div>
    </Page>)
}