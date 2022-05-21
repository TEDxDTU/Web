import React, { useState } from "react";
import Page from "../Universal/Page";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

export default function Landing() {

    const [option,setOption]=useState("profile");

    return (<Page pageTitle={'Dashboard'}>
        <div className="grid grid-cols-3 gap-4 px-12 py-4">
            <div className="col-span-1 mr-20">
                <Profile setOption={setOption}/>
            </div>
            <div className="col-span-2">
                {option==="profile"&&<EditProfile />}
            </div>
        </div>
    </Page>)
}