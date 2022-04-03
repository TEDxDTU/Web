import React, { useState } from "react";
import { Password, Email, Heading, SubmitButton } from "./SharedComp";

export default function Register({ registerStatus, setregisterStatus }) {

  return (<div className="px-12 py-16 md:px-24 md:py-12">
    <Heading registerStatus={registerStatus} setregisterStatus={setregisterStatus} />
    <div className="text-black">
      <div>
        <input className="w-36 mr-8 pl-5 py-2.5 my-2 md:mr-8 md:w-36 rounded" name="firstname" type="text" placeholder="First Name" required />
        <input className="w-36 pl-5 py-2.5 my-2 md:w-36 rounded" name="lastname" type="text" placeholder="Last Name" required />
      </div>
      <Email registerStatus={registerStatus} />
      <div className="flex"><input className="w-80 px-5 py-3 my-2 rounded" name="university" type="text" placeholder="University" required /></div>
      <Password registerStatus={registerStatus} />
      <SubmitButton registerStatus={registerStatus} />
    </div>
  </div>);
}