import React from "react";

const LiveBanner = ({ imageUrl, title, details }) => {
  return (
    <div className="relative h-fit w-full">
      <img className="h-auto w-full" src={imageUrl} />
      <div className="absolute z-10 bottom-0 right-0 md:w-2/5 md:min-w-[28rem] w-full h-24 sm:h-36 md:h-48 bg-[rgba(100,100,100,0.3)] grid grid-cols-3 grid-rows-3 items-center">
        <header className="col-span-2 sm:col-span-full text-center my-auto sm:text-xl md:text-3xl">
          {title}
        </header>
        <p className="col-span-2 row-span-2 text-justify w-11/12 mx-auto -mt-1 mb-4 sm:text-sm md:text-sm">
          {details}
        </p>
        <button className="font-bold tracking-widest col-start-3 sm:row-span-2 row-span-full w-3/4 h-12 bg-red-600 mx-auto sm:text-lg md:text-xl hover:border-red-600 hover:border-2 hover:bg-white hover:text-red-600">
          Live Now!
        </button>
      </div>
    </div>
  );
};
export default LiveBanner;
