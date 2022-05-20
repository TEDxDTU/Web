import React from "react";
import Page from "../Universal/Page";
import Profile from "./Profile";

export default function Landing() {

    return (<Page pageTitle={'Dashboard'}>
        <div className="grid grid-cols-3 gap-4 px-12 py-4">
            <div className="col-span-1 mr-20">
                <Profile/>
            </div>
            <div className="col-span-2"></div>
        </div>
    </Page>)
}