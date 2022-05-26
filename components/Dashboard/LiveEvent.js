import React from "react";

export default function LiveEvent() {

    return (<div className="grid grid-cols-5 gap-4">
        <div className="col-span-2 mr-20 mt-10 relative">
            <div className="absolute z-0 flex justify-around w-full">
                <img src="/Dashboard/BackImage1.svg" className="w-32 border-2 border-gray-600" />
            </div>
            <div className="mt-14 absolute z-10 flex justify-around w-full">
                <img src="/Dashboard/BackImage2.svg" className="w-44 border-2 border-gray-600" />
            </div>
            <div className="mt-32 absolute z-20 bg-red-600 p-1 pb-8 shadow-red-500 flex justify-around w-full shadow-lg shadow-red-500">
                <img src="/Dashboard/liveEvent.svg " className="w-52" />
            </div>
            <div className="mt-64 absolute z-10 flex justify-around w-full">
                <img src="/Dashboard/BackImage3.svg" className="w-44 border-2 border-gray-600" />
            </div>
            <div className="mt-80 absolute z-0 flex justify-around w-full">
                <img src="/Dashboard/BackImage4.svg" className="w-32 border-2 border-gray-600" />
            </div>
        </div>
        <div className="col-span-3">
            <div className="bg-[rgba(100,100,100,0.3)] rounded-md mt-12 p-2">

            </div>
        </div>
    </div>)
}