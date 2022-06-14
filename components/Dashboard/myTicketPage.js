import React from "react";
import Ticket from "./Ticket";

export default function MyTicketPage() {
    return (<div className="bg-[rgba(100,100,100,0.3)] rounded-md mt-12 p-2 overflow-x-hidden overflow-y-auto h-96 customScrollbar">
        <div className="flex justify-between px-6 md:px-4 lg:px-8 mb-10">
            <div className="font-semibold text-4xl mt-4">My Tickets</div>
        </div>
        <div className="md:flex-none md:px-16 ">
            <div>
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
        </div>
    </div>);
}