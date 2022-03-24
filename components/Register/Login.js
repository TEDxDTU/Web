import React, { useState } from "react";
import { Password, Email, Heading, SubmitButton } from "./SharedComp";

export default function Login({ setregisterStatus,registerStatus }) {

    return (<div className="px-12 use-poppins py-24 md:px-24">
        <Heading registerStatus={registerStatus} setregisterStatus={setregisterStatus}/>
        <div className="text-black use-popins">
            <Email registerStatus={registerStatus} />
            <Password registerStatus={registerStatus} />
            <SubmitButton registerStatus={registerStatus}/>
        </div>
    </div>);
}