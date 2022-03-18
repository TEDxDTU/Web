import React, { useState } from "react";
import Page from "../Universal/Page";
import Login from "./Login";
import Register from "./Register";

export default function Landing() {
    const [registerStatus, setregisterStatus] = useState(false);
    return (<Page pageTitle={"Register"}>
        <div className="bg-[url('/LandingPage/Theme1-1.png')] bg-cover h-full">
            {registerStatus ? <Login
                registerStatus={registerStatus}
                setregisterStatus={setregisterStatus} /> :
            <Register
                registerStatus={registerStatus}
                setregisterStatus={setregisterStatus} />}
        </div>
    </Page>);
}