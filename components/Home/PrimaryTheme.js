import React from "react";
function PrimaryTheme() {
    return (<div className="bg-[url('/Images/Theme1.png')] h-[28rem] xl:h-[32rem] w-full mt-0 flex items-end justify-end">
        <div className=" bg-[rgba(255,255,255,0.1)] flex backdrop-blur-2xl p-4 pb-6">
            <div className="mr-10">
                <div className="flex">
                    <div className="text-2xl w-fit text-white">Ted talk with Sarthak</div>
                    <div className="text-xs p-3 text-red-500">LIVE</div>
                </div>
                <div className="text-sm pt-2 md:p-2 text-white max-w-lg">
                    some description about the event
                </div>
            </div>
            <div className="flex items-end">
                <div>
                    <button className="p-2 mb-2 px-4 w-24 bg-red-700 text-white">Join now</button>
                </div>
            </div>
    </div>
    </div>);
}
export default PrimaryTheme;