import React from "react";

export default function LiveEvent({ liveEvent, pastEvents, isLargeViewPort }) {

    if (isLargeViewPort)
        return (<div className="grid grid-cols-5 gap-4">
            <div className="col-span-2 mr-20 mt-10 relative">
                <div className="absolute z-0 flex justify-around w-full">
                    <img src={pastEvents[0].imageUrl} className="w-32 h-16 border-2 border-gray-600" />
                </div>
                <div className="mt-14 absolute z-10 flex justify-around w-full">
                    <img src={pastEvents[1].imageUrl} className="w-44 h-20 border-2 border-gray-600" />
                </div>
                <div className="mt-32 absolute z-20 bg-red-600 p-1 pb-1 shadow-red-500 w-full shadow-lg shadow-red-500">
                    <img src={liveEvent.imageUrl} className="w-52 pb-1 h-32" />
                    <div className="flex justify-end">
                        <div className="rounded-2xl cursor-pointer bg-white text-black p-1 mr-2 font-semibold">Book Now</div>
                    </div>
                </div>
                <div className="mt-64 absolute z-10 flex justify-around w-full">
                    <img src={pastEvents[2].imageUrl} className="w-44 h-20 border-2 border-gray-600" />
                </div>
                <div className="mt-80 absolute z-0 flex justify-around w-full">
                    <img src={pastEvents[3].imageUrl} className="w-32 border-2 h-16 border-gray-600" />
                </div>
            </div>
            <div className="col-span-3">
                <div className="bg-[rgba(100,100,100,0.3)] rounded-md mt-12 p-2">

                </div>
            </div>
        </div>);

    if(!isLargeViewPort)
    return (<div className="flex justify-around h-screen bg-black">
        <div className="mr-32 mt-10">
            <div className="absolute z-0 flex justify-around">
                <img src={pastEvents[0].imageUrl} className="w-32 h-16 border-2 border-gray-600" />
            </div>
            <div className="mt-14 absolute z-10 flex justify-around -ml-6">
                <img src={pastEvents[1].imageUrl} className="w-44 h-20 border-2 border-gray-600" />
            </div>
            <div className="mt-32 absolute z-20 bg-red-600 p-1 -ml-10 flex justify-around  pb-1 shadow-red-500 shadow-lg shadow-red-500">
                <div>
                    <img src={liveEvent.imageUrl} className="w-52 pb-1 h-32 " />
                    <div className="flex justify-end">
                        <div className="rounded-2xl cursor-pointer bg-white text-black p-1 mr-2 font-semibold">Book Now</div>
                    </div>
                </div>
            </div>
            <div className="mt-64 absolute z-10 flex justify-around -ml-6">
                <img src={pastEvents[2].imageUrl} className="w-44 h-20 border-2 border-gray-600" />
            </div>
            <div className="mt-80 absolute z-0 flex justify-around ">
                <img src={pastEvents[3].imageUrl} className="w-32 border-2 h-16 border-gray-600" />
            </div>
        </div>
        {/* <div className="bg-[rgba(100,100,100,0.3)] rounded-md mt-96 md:mt-12 p-2">

        </div> */}
    </div>);
}