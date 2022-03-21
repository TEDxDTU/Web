import React, { useState } from "react";
import Page from "../Universal/Page";
import Login from "./Login";
import Register from "./Register";

export default function Landing() {
    const [registerStatus, setregisterStatus] = useState(false);
    return (<Page pageTitle={"Register"}>
        <div className="relative">
            <img src="/LandingPage/Theme1-1.png" className="h-full w-full"/>
            <div className="absolute top-0 use-popins">
                {registerStatus ? <Login
                    registerStatus={registerStatus}
                    setregisterStatus={setregisterStatus} /> :
                    <Register
                        registerStatus={registerStatus}
                        setregisterStatus={setregisterStatus} />}
            </div>
        </div>
    </Page>);
}