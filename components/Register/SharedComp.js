import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import firebaseConfigAPI from "../../firebaseAPI";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export async function LoginhandleAction(form, router, setLoading) {

  const authentication = getAuth(initializeApp(firebaseConfigAPI));
  const { email, password } = form;
  setLoading(true);

  await signInWithEmailAndPassword(authentication, email, password)
    .then(async (authToken) => {
      if (authToken?.user?.emailVerified) {
        const url = `/api/user/data-from-token`;
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ authToken: authToken?.user?.accessToken }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response?.json();
        const { status } = response;
        if (status == 200) {
          localStorage.setItem("profile", JSON.stringify({ ...data }));
          router.push("/dashboard");
        }
      }
      else {
        sendEmailVerification(authToken?.user)
          .then(() => {
            alert("Please verify your email first");
          })
          .catch((err) => {
            console.log(err.stack);
            alert("Please verify your email while we resolve this error");
          });
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Email and password don't match.\nPlease try again !!");
    });
  setLoading(false);
  return;
}

const RegisterhandleAction = async (form, setregisterStatus, router, setLoading) => {

  const { email, firstname, lastname, password, university } = form;
  const authentication = getAuth(initializeApp(firebaseConfigAPI));
  setLoading(true);
  const UserObj = {
    email: email,
    name: firstname + " " + lastname,
    password: password,
    university: university,
    imageURL:
      "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
  };

  const url = `/api/user/sign-up`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(UserObj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { status } = response;
  if (status == 200) {

    await signInWithEmailAndPassword(authentication, email, password)
      .then(() => {
      }).catch((error) => {
        console.log(error);
        return;
      });

    sendEmailVerification(authentication?.currentUser)
      .then(() => {
        alert("A verification mail has been sent to your provided email.\nPlease verify to login !!");
      })
      .catch((err) => {
        alert("Please verify your email while we resolve this error");
      });

    router.push('/register');
    setregisterStatus(true);
  }
  else if (status == 409) {
    alert("User with given email already exists.\nPlease login !!");
  }
  else {
    alert("We are facing some server errors:(\nPlease try again later !!");
  }
  setLoading(false);
  return;
};

export function Password({ registerStatus, handleChange }) {
  const [passwordView, setpasswordView] = useState(false);
  return (
    <div className="flex items-center">
      <input
        onChange={(e) => handleChange(e)}
        className={`px-5 w-80 rounded py-3 ${registerStatus ? "my-2.5" : "my-2"
          }`}
        type={passwordView ? "text" : "password"}
        name="password"
        placeholder="Password"
        required
      />
      <img
        className="h-7 w-7 -ml-10 mr-3 cursor-pointer"
        src={
          "/Register/" + (passwordView ? "password.svg" : "ShowPassword.svg")
        }
        onClick={() => setpasswordView(!passwordView)}
      />
    </div>
  );
}

export function Email({ registerStatus, handleChange }) {
  return (
    <div className="flex">
      <input
        onChange={(e) => handleChange(e)}
        className={`px-5 w-80 rounded py-3 ${registerStatus ? "my-3" : "my-2"}`}
        type="email"
        name="email"
        placeholder="Email address"
        required
      />
    </div>
  );
}

export function Heading({ registerStatus, setregisterStatus }) {
  return (
    <div className="">
      <div className="text-4xl font-semibold">
        {registerStatus ? "Login to your account." : "Register new account."}
      </div>
      <div className="inline-flex my-4 font-medium">
        {registerStatus ? "Not having an account ?" : "Already registered ?"}{" "}
        &nbsp;
        <div
          className="text-red-600 font-semibold cursor-pointer"
          onClick={() => setregisterStatus(!registerStatus)}
        >
          {registerStatus ? "Register Here." : "Log in"}
        </div>
      </div>
    </div>
  );
}

export function SubmitButton({ registerStatus, form, setregisterStatus, setLoading }) {
  const router = useRouter();

  return (
    <div className="flex justify-around w-72 text-white mt-2">
      <button
        className="bg-red-600 py-2.5 px-4 text-md font-medium rounded-sm ml-4"
        onClick={() => {
          registerStatus
            ? LoginhandleAction(form, router, setLoading)
            : RegisterhandleAction(form, setregisterStatus, router, setLoading);
        }}
      >
        {registerStatus ? "Login" : "Register"}
      </button>
    </div>
  );
}
