import React, { useEffect, useState } from 'react';
import Page from '../Universal/Page';
import EventSection from './EventSection';

const Events = ({ allEvents }) => {

  const { liveEvent, pastEvents, upcomingEvents } = allEvents;
  const [numTickets, setnumTickets] = useState(1);
  const [display, setDisplay] = useState(false);
  const [eventInfo, setEventInfo] = useState({});
  const count = [1, 2, 3, 4, 5, 6, 7, 8];
  const amount = 100;

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

    const user = localStorage.getItem("profile");
    const url = `/api/tickets/generate-order`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({user,numTickets}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(eventInfo);
    const { title ,_id } = eventInfo;
    const { email, name } = JSON.parse(user);

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.orderID,
      notes:{_id},
      name: "Ticket Booking",
      numTickets:numTickets,
      description: title,
      image: "/LandingPage/Tab-Logo-Black.svg",
      handler: function (response) {
        setDisplay(false);
        console.log(response);
      },
      prefill: {
        name: name,
        email: email,
        phone_number: ''
      }
    }
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return <Page
    pageTitle={"Events"}
  >
    {display && <div className="relative">
      <div className="fixed z-10 left-[12%] sm:left-[25%] md:left-[30%] lg:left-[35%]">
        <div className='absolute top-[6vh] sm:top-[8vh] md:top-[12vh]'>
          <div className='bg-[#303030] w-80 sm:w-96 rounded p-4 '>

            {/* Location of the event */}
            <div className="flex justify-between text-sm sm:text-md mb-4">
              <div className='flex'>
                <img className="mr-4" src="/SingleEvent/map-pin.svg" />
                Ampitheater
              </div>
              <div className='cursor-pointer' onClick={() => setDisplay(false)}>x</div>
            </div>

            <div>How many tickets ?</div>
            <div>
              {/* Options for number of tickets */}
              <div className='flex'>
                {count.map((val, idx) =>
                  <div onClick={() => setnumTickets(val)} className={`rounded-full px-2 m-1 sm:p-0.5 sm:px-2.5 sm:m-2 cursor-pointer ${val === numTickets ? 'ticketBoxhover' : 'ticketBox'}`}>{val}</div>)}
              </div>
              {/* Auto Svg */}
              <div className='flex justify-end'>
                <img src="/Tickets/auto.svg" className='m-1' />
              </div>
            </div>
            <div className='bg-[#404040]'>
              {/* Individual Ticket Price */}
              <div className='p-2 flex justify-between'>
                <div>Ticket price</div>
                <div>₹ {amount}</div>
              </div>
              {/*  Total Payable Amount*/}
              <div className='p-2 flex justify-between'>
                <div>Total Payable Amount</div>
                <div>₹ {amount * numTickets}</div>
              </div>
            </div>
            <div className='flex justify-around'>
              <button className="bg-red-600 text-lg ml-4 rounded mt-4 px-6 py-1" onClick={() => displayRazorpay()}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>}

    <div className={`${display && 'pointer-events-none  opacity-25'}`}>
      <EventSection eventList={[liveEvent]} eventType={"live"} setDisplay={setDisplay} setEventInfo={setEventInfo} />
      <EventSection eventList={upcomingEvents} eventType={"upcoming"} setDisplay={setDisplay} setEventInfo={setEventInfo} />
      <EventSection eventList={pastEvents} eventType={"past"} />
    </div>
  </Page>;
};
export default Events;