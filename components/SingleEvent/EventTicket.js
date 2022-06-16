import React from "react";

export default function EventTicket() {
  return (
    <>
      <div className="sm:grid-rows-1 sm:place-content-center  lg:flex lg:border-4 gap-8 border-stone-900 lg:mx-80 p-8 rounded-lg">
        <div className="lg:w-2/5 lg:border-r-4 lg:border-r-red-600 h-72 lg:mt-8">
          <img
            className="h-full m-auto rounded-lg"
            src="LandingPage/speakers.png"
            alt=""
          />
        </div>

        <div className="lg:w-3/5  gap-8 flex flex-col items-center">
          <h1 className="text-6xl  text-red-600 font-bold ">EVENT NAME</h1>

          <span className="text-white lg:text-sm xl:text-lg w-2/3 lg:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            odio eos perferendis quidem repellat id quas sapiente accusamus
            reprehenderit ex, accusantium officiis animi, veritatis ipsa at
            culpa saepe! Itaque labore consequuntur ad nulla exercitationem?
          </span>
          <button className="font-semibold text-white  text-lg p-1 md:ml-4 xl:ml-auto bg-red-600 block rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
