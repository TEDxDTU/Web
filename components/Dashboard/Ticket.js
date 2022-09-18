import React from "react";
import { useEffect, useState } from "react";
import { QRCodeSVG } from 'qrcode.react';

export default function Ticket({ data }) {

    const [isLargeViewPort, setIsLargeViewPort] = useState(null);

    useEffect(
        () =>
            (async () => {
                if (innerWidth >= 900 || (innerWidth >= 618 && innerWidth < 768)) setIsLargeViewPort(true);
                window.addEventListener("resize", (evt) => {
                    if (innerWidth >= 900 || (innerWidth >= 618 && innerWidth < 768)) setIsLargeViewPort(true);
                    else {
                        setIsLargeViewPort(false);
                    }
                });
            })(),
        []
    );

    const { event, noOfTickets, razorpayOrderID } = data;
    const date = new Date(event.dateTime);
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const time = date.toTimeString();

    console.log(data);
    return (<div className="flex pb-5">
        <div className="border-scoop-right pl-3 text-black">
            <div>
                <div className="font-bold pt-2 pr-8 leading-tight">{event.title}</div>
            </div>
            {/* <div className="my-1">Design for Innovation</div> */}
            <div className="text-xs flex mt-1">
                <div className="mr-1"><img className="text-black " src="/SingleEvent/map-pin.svg" /></div>
                <div>{event.venue}</div>
            </div>
            <div className="font-bold text-sm mt-2 text-right mr-2 leading-tight">Total Amount Paid: ₹{noOfTickets * event.price}</div>
        </div>
        <div className="border-scoop-left border-l-2 border-[#555555] border-dashed">
            <div className="flex">
                <img className="text-black mt-4 ml-2 w-3 h-3" src="/SingleEvent/calendar.svg" />
                <div className="mt-3.5 text-xs font-semibold ml-1 md:ml-2">{date.getDate()} {month[date.getMonth()]}'{date.getFullYear()}</div>
            </div>
            <div className="flex">
                <img className="text-black mt-3 ml-2 w-3 h-3" src="/SingleEvent/clock.svg" />
                <div className="mt-1 text-xs ml-2 leading-tight">{time[0]}{time[1]}:{time[3]}{time[4]} hrs onwards</div>
            </div>
            <div className="ml-8 mt-2 bg-[#6F6F6F] h-fit w-fit px-1 rounded-2xl">
                <div className="flex">
                    {noOfTickets}<img className="text-black mt-2 ml-2 w-3 h-3" src="/Dashboard/profile.svg" />
                </div>
            </div>
            <img src="/LandingPage/Logo-White-Text.svg" className="h-4 w-20 ml-2.5 mt-1" />
        </div>
        {isLargeViewPort && <div className="ml-8">
            <QRCodeSVG value={razorpayOrderID} size="120" />
        </div>}
    </div>)
}