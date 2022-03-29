import React, { useState } from "react";
import { Password, Email, Heading, SubmitButton } from "./SharedComp";

export default function Register({ registerStatus, setregisterStatus }) {

    return (<div className="px-12 use-poppins py-12 md:px-24">
        <Heading registerStatus={registerStatus} setregisterStatus={setregisterStatus} />
        <div className="text-black">
            <div>
                <input className="use-popins w-32 mr-10 pl-5 py-2.5 my-2 md:mr-8 md:w-36 rounded" name="firstname" type="text" placeholder="First Name" required />
                <input className="use-popins w-32 pl-5 py-2.5 my-2 md:w-36 rounded" name="lastname" type="text" placeholder="Last Name" required />
            </div>
            <Email registerStatus={registerStatus} />
            <div><input className="use-popins w-[18.5rem] pl-5 py-2.5 my-2 md:w-80 rounded" name="university" type="text" placeholder="University" required /></div>
            <Password registerStatus={registerStatus} />
            <SubmitButton registerStatus={registerStatus} />
        </div>
    </div>);
}