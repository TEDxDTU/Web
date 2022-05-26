import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import firebaseConfigAPI from "../../firebaseAPI";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function LoginhandleAction(form, router) {

  const authentication = getAuth(initializeApp(firebaseConfigAPI));
  const { email, password } = form;

  const authToken = await signInWithEmailAndPassword(authentication, email, password);
  const url = `http://localhost:3000/api/user/data-from-token`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ authToken: authToken.user.accessToken }),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const data = await response.json();
  const { status } = response;
  if (status == 200) {
    localStorage.setItem("profile", JSON.stringify({ ...data}));
    router.push('/');
  }
  return;
}

const RegisterhandleAction = async (form, router) => {

  const { email, firstname, lastname, password, university } = form;

  const UserObj = {
    email: email,
    name: firstname + ' ' + lastname,
    password: password,
    university: university,
    imageURL: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
  }

  const url = `http://localhost:3000/api/user/sign-up`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(UserObj),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await response.json();
  const { status } = response;
  if (status == 200) {
    localStorage.setItem("profile", JSON.stringify({ ...data}));
    router.push('/dashboard');
  }
  return;
}
export function Password({ registerStatus, handleChange }) {
  const [passwordView, setpasswordView] = useState(false);
  return (<div className="flex items-center">
    <input onChange={(e) => handleChange(e)} className={`px-5 w-80 rounded py-3 ${(registerStatus ? "my-2.5" : "my-2")}`} type={passwordView ? "text" : "password"} name="password" placeholder="Password" required />
    <img className="h-7 w-7 -ml-10 cursor-pointer" src={"/Register/" + (passwordView ? "password.svg" : "ShowPassword.svg")} onClick={() => setpasswordView(!passwordView)} />
  </div>);
}

export function Email({ registerStatus, handleChange }) {
  return (<div className="flex">
    <input onChange={(e) => handleChange(e)} className={`px-5 w-80 rounded py-3 ${registerStatus ? "my-3" : "my-2"}`} type="email" name="email" placeholder="Email address" required />
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

export function SubmitButton({ registerStatus, form}) {

  const router = useRouter();

  return (<div className="flex justify-center w-72 text-white mt-2">
    <button className="bg-red-600 py-2.5 px-4 text-md font-medium rounded-sm ml-8"
      onClick={() => { registerStatus ? LoginhandleAction(form, router) : RegisterhandleAction(form, router) }}
    >
      {registerStatus ? "Login" : "Register"}
    </button>
  </div>);
}
