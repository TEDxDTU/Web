import React from "react";
import NavBar from "../Universal/NavBar";

export default function ticket() {
  return (
    <div>
      <NavBar />

      <div
        className="flex bg-black text-white rounded-xl
       w-full md:w-2/4 mx-auto py-9 px-5 gap-3 my-7 "
      >
        <img
          className="w-32 lg:w-60  rounded-md place-self-center"
          src="/LandingPage/speakers.png"
        />
        <div
          className="w-2 
         bg-red-600 rounded-md"
        ></div>

        <div className="flex flex-col gap-3 m-2">
          <h1 className="text-3xl text-red-600 font-bold">EVENT NAME</h1>
          <span className="text-xs  lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ullam earum dolores deserunt repellat quibusdam? Soluta id quaerat
            cumque beatae vitae iure voluptate sint et accusantium vel
            inventore, cum eaque Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </span>

          <button className="ml-auto mt-auto bg-red-600 p-2 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
