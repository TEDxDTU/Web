import React, { useState } from "react";
import { Password, Email, Heading, SubmitButton } from "./SharedComp";

export default function Login({ setregisterStatus, registerStatus }) {

  return (<div className="py-16 grid place-content-center">
    <Heading registerStatus={registerStatus} setregisterStatus={setregisterStatus} />
    <div className="text-black">
      <Email registerStatus={registerStatus} />
      <Password registerStatus={registerStatus} />
      <SubmitButton registerStatus={registerStatus} />
    </div>
  </div>);
}