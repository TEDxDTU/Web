import React, { useState } from "react";
import Page from "../Universal/Page";
import Login from "./Login";
import Register from "./Register";

export default function Landing() {
  const [ registerStatus, setregisterStatus ] = useState(false);
  return (<Page pageTitle={"Register"}>
    <div className="relative">
      {/* <img src="" className="" /> */}
      <div className="absolute top-0 w-full">
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