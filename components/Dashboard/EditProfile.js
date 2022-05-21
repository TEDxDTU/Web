import React, {useState} from "react";
// import {  } from";
import { InputField, SaveAndCancelButton } from "./SharedComp";

export default function EditProfile() {

    const [editState,setEditState]=useState(false);

    return (<div className="bg-[rgba(100,100,100,0.3)] rounded-md mt-12 p-2">
        <div className="flex justify-between px-8 mb-10">
            <div className="font-semibold text-4xl mt-4">Profile</div>
            <div className="text-sm text-red-600 underline cursor-pointer mt-4 mr-4" onClick={()=>setEditState(true)}>Edit Profile</div>
        </div>
        <InputField editState={editState} name={"name"} placeholder={"Enter your name"} tag={"Name"} />
        <InputField editState={editState} name={"emailid"} placeholder={"Enter your Email Address"} tag={"Email Address"} />
        <InputField editState={editState} name={"university"} placeholder={"Enter your university name"} tag={"University"} />
        <div className="flex justify-end mr-10 my-3">
            <div>
                <SaveAndCancelButton setEditState={setEditState} tag={"Cancel"} />
                <SaveAndCancelButton setEditState={setEditState} tag={"Save"} />
            </div>
        </div>
    </div>);
}