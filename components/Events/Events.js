import React, { useEffect, useState } from 'react';
import Page from '../Universal/Page';
import EventSection from './EventSection';

const Events = ({ allEvents }) => {
  const { liveEvent, pastEvents, upcomingEvents } = allEvents;
  const [numTickets, setnumTickets] = useState(1);
  const [display, setDisplay] = useState(false);
  const count = [1, 2, 3, 4, 5, 6, 7, 8];
  const amount = 100;

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
              <button className="bg-red-600 text-lg ml-4 rounded mt-4 px-6 py-1" onClick={() => { }}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>}


    <div className={`overflow-hidden ${display&&'pointer-events-none opacity-25'}`}>
      <EventSection eventList={[liveEvent]} eventType={"live"} setDisplay={setDisplay} />
      <EventSection eventList={upcomingEvents} eventType={"upcoming"} setDisplay={setDisplay} />
      <EventSection eventList={pastEvents} eventType={"past"} setDisplay={setDisplay} />
    </div>
  </Page>;
};
export default Events;