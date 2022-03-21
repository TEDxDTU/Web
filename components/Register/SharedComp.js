import React, { useState } from "react";

export function Password({ registerStatus }) {
    const [passwordView, setpasswordView] = useState(false);
    return (<div className="flex items-center use-popins">
        <input className={registerStatus ? "w-[18.5rem] px-5 md:w-80 rounded py-3 my-2.5" : "w-[18.5rem] px-5 md:w-80 rounded py-2.5 my-2"} type={passwordView ? "text" : "password"} name="password" placeholder="Password" required />
        <img className="h-7 w-7 -ml-10 cursor-pointer" src={"/Register/" + (passwordView ? "password.svg" : "ShowPassword.svg")} onClick={() => setpasswordView(!passwordView)} />
    </div>);
}

export function Email({ registerStatus }) {
    return (<div>
        <input className={registerStatus ? "w-[18.5rem] pl-5 py-3 my-3 md:w-80 rounded" : "w-[18.5rem] pl-5 py-2.5 my-2 md:w-80 rounded"} type="email" name="email" placeholder="Email address" required />
    </div>);
}

export function Heading({ registerStatus, setregisterStatus }) {
    return (<div className="use-popins">
        <div className="text-4xl font-semibold use-popins">{registerStatus ? "Login to your account." : "Register new account."}</div>
        <div className="inline-flex my-4 font-medium use-popins">{registerStatus ? "Not having an account?" : "Already registered?"}&nbsp;
            <div className="text-red-600 font-semibold cursor-pointer use-popins" onClick={() => setregisterStatus(!registerStatus)}>{registerStatus ? "Register Here." : "Log in"}</div>
        </div>
    </div>);
}

export function SubmitButton({ registerStatus }) {
    return (<div className="flex justify-center w-80 text-white mt-2 use-popins">
        <button className="bg-red-600 py-2.5 px-4 text-md font-medium rounded-sm use-popins">
            {registerStatus ? "Login" : "Register"}
        </button>
    </div>);
}
