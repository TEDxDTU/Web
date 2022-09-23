import { LoadingContext } from "../../contextFiles/loadingContext"
import Spinner from "../Universal/spinner";
import React, { useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebaseConfigAPI from "../../firebaseAPI";
import { FormContext } from "../../contextFiles/formContext";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { v4 } from "uuid";

export function OptionsButton({ src, name, setOption, option }) {

    return (<div onClick={() => setOption(name)}>
        <div className={`lg:w-40 flex mb-4 shrink w-44 md:w-36 lg:mx-10 hover:bg-[#2C2C2C] rounded-lg cursor-pointer transition duration-150 ${option === name ? 'bg-[#2C2C2C]' : ''}`}>
            <div className="bg-[#2C2C2C] w-fit p-2 rounded-lg mr-2 lg:mr-4"><img src={src} className="h-5 w-5" /></div>
            <div className="align-middle pt-1 text-lg font-semibold ml-2">{name}</div>
        </div>
    </div>)
}

export function handleChange(e, setForm, form) {
    setForm({ ...form, [e.target.name]: e.target.value });
}

export function InputField({ tag, name, placeholder, editState, value }) {

    const [form, setForm] = useContext(FormContext);

    return (<div className="grid grid-cols-3 gap-3 lg:gap-4 mt-6">
        <div className="text-xl font-semibold pl-2 md:pl-6 lg:pl-12 mt-1">{tag}</div>
        <div><input name={name} onChange={(e) => handleChange(e, setForm, form)} className={`rounded h-10 w-48 w-full md:w-64 lg:w-96 pl-4 pr-2 ${editState && name === "email" && "cursor-not-allowed"} ${editState && name != "email" && 'text-black'} ${name != "email" && 'capitalize'}`} defaultValue={value} disabled={(!editState) || (name === "email")} placeholder={placeholder} /></div>
    </div>)
}

export function InputImage({ tag, name, editState }) {

    const [loading, setLoading] = useContext(LoadingContext);
    const [form, setForm] = useContext(FormContext);
    const storage = getStorage(initializeApp(firebaseConfigAPI));

    const uploadFile = (imageUpload) => {
        if (imageUpload == null) {
            return;
        }
        setLoading(true);
        const imageRef = ref(storage, `user-images/${imageUpload?.name + v4()}`);
        uploadBytes(imageRef, imageUpload)
            .then((snapshot) => {
                getDownloadURL(snapshot?.ref)
                    .then((url) => {
                        setForm({ ...form, imageURL: url })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
            })
        setLoading(false);
    };

    return (<div className={`grid grid-cols-4 sm:grid-cols-3 sm:gap-4 mt-6 ${!editState ? 'mb-6' : ''}`}>
        <div className="text-xl font-semibold pl-2 md:pl-6 lg:pl-12 mt-1">{tag}</div>
        <div>
            <input name={name} type="file" disabled={!editState} onChange={(e) => uploadFile(e?.target?.files[0])}
                className={`file:border-0 file:rounded file:p-1 file:px-2 mt-1 ${editState ? 'file:bg-red-600 file:text-white cursor-pointer' : ''}`}
            />
        </div>
    </div>)
}

export function SaveAndCancelButton({ tag, setEditState, BackToOldState, UpdateTheState }) {

    return (<button className="bg-red-600 w-20 h-10 text-lg ml-4" onClick={() => {
        setEditState(false)
        { tag === "Cancel" && BackToOldState() }
        { tag === "Save" && UpdateTheState() }
    }}>
        {tag}
    </button>)
}