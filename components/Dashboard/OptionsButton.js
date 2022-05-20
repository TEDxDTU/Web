import React from "react";
// hover:bg-[#2C2C2C] hover:rounded-lg px-2 cursor-pointer transition duration-150
export default function OptionsButton({ src, name }) {
    return (<div className="">
        <div className="flex mb-3 shrink mx-10 mr-24 hover:bg-[#2C2C2C] hover:rounded-lg cursor-pointer transition duration-150">
            <div className="bg-[#2C2C2C] w-fit p-2 rounded-lg mr-6"><img src={src} className="h-5 w-5" /></div>
            <div className="align-middle pt-1 text-lg font-semibold ">{name}</div>
        </div>
    </div>)
}