import React, { useContext, useState, useEffect } from "react";
import { LoadingContext } from "../../contextFiles/loadingContext";
import { getAuth, onAuthStateChanged, sendPasswordResetEmail, signOut } from "firebase/auth";
import { FormContext } from "../../contextFiles/formContext";
import { initializeApp } from "firebase/app";
import firebaseConfigAPI from "../../firebaseAPI";
import { useRouter } from "next/router";
import { InputField, InputImage, SaveAndCancelButton, updateCall } from "./SharedComp";

export default function EditProfile() {

    const [editState, setEditState] = useState(false);
    const [form, setForm] = useContext(FormContext);
    const [isLargeViewPort, setIsLargeViewPort] = useState(null);
    const [loading, setLoading] = useContext(LoadingContext);
    const router = useRouter();

    useEffect(
        () =>
            (async () => {
                if (innerWidth >= 1024) setIsLargeViewPort(true);
                window.addEventListener("resize", (evt) => {
                    if (innerWidth >= 1024) setIsLargeViewPort(true);
                    else {
                        setIsLargeViewPort(false);
                    }
                });
            })(),
        []
    );

    function BackToOldState() {
        setForm(JSON.parse(window.localStorage.getItem("profile")));
    }

    function UpdateTheState() {

        localStorage.setItem("profile", JSON.stringify(form));
        const auth = getAuth();
        setLoading(true);
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const url = `/api/user/update`;
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(form),
                    headers: {
                        authorization: user?.accessToken,
                        'Content-Type': 'application/json',
                    }
                });

                localStorage.setItem("profile", JSON.stringify(await response.json()));
            } else {
                console.log("Logged Out");
            }
        });
        setLoading(false);
    }

    function changePassword() {
        const auth = getAuth();
        const { email } = form;
        sendPasswordResetEmail(auth, email)
            .then(function () {
                alert("Email reset link has been sent to " + email);
                console.log("Email sent");
            })
            .catch(function (error) {
                console.log(error);
                alert("We are facing some server errors:(\nPlease try again later !!")
            })
    }

    function logout() {
        const auth = getAuth(initializeApp(firebaseConfigAPI));
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful");
                window?.localStorage?.removeItem("profile");
                setForm(null);
                router.push("/");
            })
            .catch((error) => {
                alert(
                    "We are facing some issues in logging you out :(\nPlease try again later!!"
                );
            });
    }

    return (<div className="bg-[rgba(100,100,100,0.3)] rounded-md mt-12 p-2">
        <div className="flex justify-between px-6 md:px-4 lg:px-8 mb-10">
            <div className="font-semibold text-4xl mt-4">Profile</div>
            <div className="md:flex">
                <div className="text-sm text-red-600 underline cursor-pointer mt-2 md:mt-4 mr-4" onClick={() => setEditState(true)}>Edit Profile</div>
                <div className="text-sm text-red-600 underline cursor-pointer mt-1 md:mt-4 mr-4" onClick={() => changePassword()}>Change Password</div>
                {isLargeViewPort && <div className="text-sm text-red-600 underline cursor-pointer mt-1 md:mt-4" onClick={() => logout()}>Log Out</div>}
            </div>
        </div>
        <div className="">
            <InputField editState={editState} form={form} setForm={setForm} name={"name"} value={form?.name} placeholder={"Enter your name"} tag={"Name"} />
            <InputField editState={editState} form={form} setForm={setForm} name={"email"} value={form?.email} placeholder={"Enter your Email Address"} tag={"Email Address"} />
            <InputField editState={editState} form={form} setForm={setForm} name={"university"} value={form?.university} placeholder={"Enter your university name"} tag={"University"} />
            <InputImage editState={editState} form={form} setForm={setForm} tag={"Image"} name={"ImageURL"} />
        </div>
        {editState && <div className="flex justify-end mr-4 mt-6 md:mt-1 lg:mr-10 mb-2">
            <div>
                <SaveAndCancelButton setEditState={setEditState} tag={"Cancel"} BackToOldState={BackToOldState} />
                <SaveAndCancelButton setEditState={setEditState} tag={"Save"} UpdateTheState={UpdateTheState} />
            </div>
        </div>}
    </div>);
}