import React from "react";

export default function EventTicket() {
  return (
    <>
      <div className="flex border-4 gap-8 border-stone-900 mx-80 p-8 rounded-lg">
        <div className="w-2/5 border-r-4 border-r-red-600 h-72">
          <img
            className="h-full m-auto rounded-lg"
            src="LandingPage/speakers.png"
            alt=""
          />
        </div>
        <div className="w-3/5 self-center gap-8 flex flex-col">
          <tittle>
            <h1 className="text-6xl text-red-600 font-bold">EVENT NAME</h1>
          </tittle>
          <span className="text-white text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            odio eos perferendis quidem repellat id quas sapiente accusamus
            reprehenderit ex, accusantium officiis animi, veritatis ipsa at
            culpa saepe! Itaque labore consequuntur ad nulla exercitationem?
          </span>
          <button className="font-semibold text-white  text-xl p-1 ml-auto bg-red-600 block rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
