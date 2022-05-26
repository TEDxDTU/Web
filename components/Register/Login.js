import React, { useState } from "react";
import { Password, Email, Heading, SubmitButton } from "./SharedComp";

export default function Login({ setregisterStatus, registerStatus }) {
  const formFormat = {
    email: "",
    password: "",
  }
  
  const [form, setForm] = useState(formFormat);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (<div className="px-12 py-20 md:px-24 sm:py-24">
    <Heading registerStatus={registerStatus} setregisterStatus={setregisterStatus} />
    <div className="text-black">
      <Email registerStatus={registerStatus} handleChange={handleChange} />
      <Password registerStatus={registerStatus} handleChange={handleChange} />
      <SubmitButton registerStatus={registerStatus} form={form} />
    </div>
  </div>);
}