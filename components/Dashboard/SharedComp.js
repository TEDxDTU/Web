import React from "react";
// hover:bg-[#2C2C2C] hover:rounded-lg px-2 cursor-pointer transition duration-150
export function OptionsButton({ src, name }) {
    return (<div className="">
        <div className="flex mb-3 shrink mx-10 mr-24 hover:bg-[#2C2C2C] hover:rounded-lg cursor-pointer transition duration-150">
            <div className="bg-[#2C2C2C] w-fit p-2 rounded-lg mr-6"><img src={src} className="h-5 w-5" /></div>
            <div className="align-middle pt-1 text-lg font-semibold ">{name}</div>
        </div>
    </div>)
}

export function InputField({ tag, name, placeholder, editState }) {

    return (<div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-xl font-semibold px-10 pl-16 mt-1">{tag}</div>
        <div><input name={name} className="rounded h-10 w-96 pl-4" disabled={!editState} placeholder={placeholder} /></div>
    </div>)
}

export function SaveAndCancelButton({ tag, setEditState }) {

    return (<button className="bg-red-600 w-20 h-10 text-lg mt-6 ml-4" onClick={() => setEditState(false)}>
        {tag}
    </button>)
}