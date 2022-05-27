import React, { useState, useContext } from "react";
import { FormContext } from "../../contextFiles/formContext";
import { InputField, InputImage, SaveAndCancelButton } from "./SharedComp";

export default function EditProfile() {

    const [editState, setEditState] = useState(false);
    const [imageUpload, setImage] = useState(null);
    const [form, setForm] = useContext(FormContext);

    function BackToOldState() {
        setForm(JSON.parse(window.localStorage.getItem("profile")));
    }

    function UpdateTheState() {
        localStorage.setItem("profile", JSON.stringify(form));
    }

    return (<div className="bg-[rgba(100,100,100,0.3)] rounded-md mt-12 p-2">
        <div className="flex justify-between px-8 mb-10">
            <div className="font-semibold text-4xl mt-4">Profile</div>
            <div className="text-sm text-red-600 underline cursor-pointer mt-4 mr-4" onClick={() => setEditState(true)}>Edit Profile</div>
        </div>
        <div className="">
            <InputField editState={editState} form={form} setForm={setForm} name={"name"} value={form?.name} placeholder={"Enter your name"} tag={"Name"} />
            <InputField editState={editState} form={form} setForm={setForm} name={"email"} value={form?.email} placeholder={"Enter your Email Address"} tag={"Email Address"} />
            <InputField editState={editState} form={form} setForm={setForm} name={"university"} value={form?.university} placeholder={"Enter your university name"} tag={"University"} />
            <InputImage editState={editState} form={form} setForm={setForm} value={form?.imageURL} tag={"Image"} name={"ImageURL"} />
        </div>
        {editState && <div className="flex justify-end mr-10 mb-2">
            <div>
                <SaveAndCancelButton setEditState={setEditState} tag={"Cancel"} BackToOldState={BackToOldState} />
                <SaveAndCancelButton setEditState={setEditState} tag={"Save"} UpdateTheState={UpdateTheState} />
            </div>
        </div>}
    </div>);
}