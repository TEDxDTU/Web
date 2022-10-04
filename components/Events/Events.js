import React, { useEffect, useState } from 'react';
import Page from '../Universal/Page';
import EventSection from './EventSection';
import { TicketSelection } from './ExtraComponent';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfigAPI from '../../firebaseAPI';

const Events = ({ allEvents }) => {

  const { liveEvent, pastEvents, upcomingEvents } = allEvents;
  const [numTickets, setnumTickets] = useState(1);
  const [display, setDisplay] = useState(false);
  const [eventInfo, setEventInfo] = useState({});

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const auth = getAuth(initializeApp(firebaseConfigAPI));
    const user = localStorage.getItem("profile");
    const url = `/api/tickets/generate-order`;
    const { title, _id } = eventInfo;
    const price = eventInfo?.price;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ user, numTickets, price }),
      headers: {
        authorization: auth?.currentUser?.accessToken,
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();
    const { email, name, firebaseID } = JSON.parse(user);

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data?.currency,
      amount: data?.amount.toString(),
      order_id: data?.orderID,
      notes: { _id, firebaseID },
      name: "Ticket Booking",
      numTickets: numTickets,
      description: title,
      image: "/LandingPage/Tab-Logo-Black.svg",
      handler: function (response) {
        setDisplay(false);
        setnumTickets(1);
      },
      prefill: {
        name: name,
        email: email,
        phone_number: ''
      }
    }
    const paymentObject = new window.Razorpay(options);
    paymentObject?.open();
  }

  return <Page
    pageTitle={"Events"}
  >
    {display && <TicketSelection setDisplay={setDisplay} numTickets={numTickets} setnumTickets={setnumTickets} eventInfo={eventInfo} displayRazorpay={displayRazorpay} />}

    <div className={`${display && 'pointer-events-none opacity-25'} pt-8 bg-[url('/SingleEvent/backgroundTheme.png')]`}>
      {/* <EventSection eventList={[liveEvent]} eventType={"live"} setDisplay={setDisplay} setEventInfo={setEventInfo} /> */}
      <EventSection eventList={upcomingEvents} eventType={"upcoming"} setDisplay={setDisplay} setEventInfo={setEventInfo} />
      <EventSection eventList={pastEvents} eventType={"past"} />
    </div>
  </Page>;
};
export default Events;