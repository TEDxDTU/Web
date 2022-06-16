import React from "react";

export default function EventDetails() {
  return (
    <>
      <div>
        <div className="border-4 mb-16 border-stone-900 text-white text-xl flex flex-col gap-4 sm:mx-32 md:mx-44 lg:mx-96 mt-10">
          <div className="flex items-center">
            <img className="h-14 w-14 mx-4" src="/SingleEvent/map-pin.svg" />
            <span>Ampitheater, Delhi Technological University, 110049</span>
          </div>

          <div className="flex items-center">
            <img className="h-14 w-14 mx-4" src="/SingleEvent/calendar.svg" />
            <span>1st february, 2022</span>
          </div>

          <div className="flex items-center">
            <img className="h-14 w-14 mx-4" src="/SingleEvent/clock.svg" />
            <span>13:00 hrs IST</span>
          </div>
        </div>
      </div>
    </>
  );
}
