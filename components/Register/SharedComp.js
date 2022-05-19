import React, { useState } from "react";

const addEmail=async()=>
{
  const obj={
    email:"gari01@gmail.com",
    name:"hgg",
    password:"jgjjhjdshg",
    university:"hhgjg",
    imageURL:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  }
  const response= await fetch("http://localhost:3000/api/user/sign-up",{
    method:'POST',
    body:JSON.stringify(obj),
    headers:{
      'Content-Type':'application/json',
    }
  })
  const data=await response.json();
  console.log(data);

}
export function Password({ registerStatus }) {
  const [ passwordView, setpasswordView ] = useState(false);
  return (<div className="flex items-center">
    <input className={`px-5 w-80 rounded py-3 ${(registerStatus ? "my-2.5" : "my-2")}`} type={passwordView ? "text" : "password"} name="password" placeholder="Password" required />
    <img className="h-7 w-7 -ml-10 cursor-pointer" src={"/Register/" + (passwordView ? "password.svg" : "ShowPassword.svg")} onClick={() => setpasswordView(!passwordView)} />
  </div>);
}

export function Email({ registerStatus }) {
  return (<div className="flex">
    <input className={`px-5 w-80 rounded py-3 ${registerStatus ? "my-3" : "my-2"}`} type="email" name="email" placeholder="Email address" required />
  </div>);
}

export function Heading({ registerStatus, setregisterStatus }) {
  return (<div className="">
    <div className="text-4xl font-semibold">{registerStatus ? "Login to your account." : "Register new account."}</div>
    <div className="inline-flex my-4 font-medium">{registerStatus ? "Not having an account ?" : "Already registered ?"} &nbsp;
      <div className="text-red-600 font-semibold cursor-pointer" onClick={() => setregisterStatus(!registerStatus)}>{registerStatus ? "Register Here." : "Log in"}</div>
    </div>
  </div>);
}

export function SubmitButton({ registerStatus }) {
  return (<div className="flex justify-center w-72 text-white mt-2">
    <button className="bg-red-600 py-2.5 px-4 text-md font-medium rounded-sm ml-8" onClick={()=>addEmail()}>
      {registerStatus ? "Login" : "Register"}
    </button>
  </div>);
}
