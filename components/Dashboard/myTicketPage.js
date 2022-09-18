import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Ticket from "./Ticket";

export const MyTicketPage = () => {

    const [tickets, setTickets] = useState([]);
    const auth = getAuth();
    const url = `/api/user/tickets`;

    useEffect(async () => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                authorization: auth?.currentUser?.accessToken,
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log(data);
        setTickets(data);
    }, []);

    return (<div className="bg-[rgba(100,100,100,0.3)] rounded-md mt-12 p-2 overflow-x-hidden overflow-y-auto h-96 customScrollbar">
        <div className="flex justify-between px-6 md:px-4 lg:px-8 mb-10">
            <div className="font-semibold text-4xl mt-4">My Tickets</div>
        </div>
        <div className="md:flex-none md:px-8 ">
            <div>
                {tickets?.map((val, idx) =>
                    val.event.eventType === "upcoming" && <Ticket key={idx} data={val} />
                )}
                {tickets?.map((val, idx) =>
                    val.event.eventType === "live" && < Ticket key={idx} data={val} />
                )}
                {tickets?.map((val, idx) =>
                    val.event.eventType === "past" && <Ticket key={idx} data={val} />
                )}
            </div>
        </div>
    </div>);
}