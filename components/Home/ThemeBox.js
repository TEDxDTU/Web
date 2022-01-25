import { useState, useEffect } from "react";

const ThemeBar = () => {
  const [isLargeViewPort, setIsLargeViewPort] = useState(null);

  useEffect(
    () =>
      (async () => {
        if (innerWidth >= 1024) setIsLargeViewPort(true);
        window.addEventListener("resize", (evt) => {
          if (innerWidth >= 1024) setIsLargeViewPort(true);
          else {
            setIsLargeViewPort(false);
          }
        });
      })(),
    []
  );
  if (isLargeViewPort)
    return (
      <div className=" bg-black mx-auto flex justify-around">
        <article className="grid grid-cols-5 grid-rows-3 h-[30rem] w-[58rem] lg:w-[65rem] 2xl:h-[36rem] 2xl:w-[85rem] gap-6 bg-red-600">
          <div className="bg-red-600 col-span-2 row-span-3 relative">
            <span className="absolute -top-24 inset-20 h-full w-3/4  bg-red-500">
              <img src="" alt="" />
            </span>
          </div>
          <div className="bg-red-600  col-span-3  mt-10">
            <span className="text-2xl xl:text-3xl 2xl:text-4xl text-white font-semibold">
              Theme Title
            </span>
          </div>

          <div className="bg-red-600  self-center text-white w-28 row-span-2 text-xl xl:text-xl 2xl:text-2xl">
            <span>Welcome to the show</span>
          </div>
          <div className="bg-red-600  self-center row-span-2 text-white w-28 text-xl xl:text-xl 2xl:text-2xl">
            Renowned Chief Guest
          </div>
          <div className="bg-red-600  self-center row-span-2 text-white w-28 text-xl xl:text-xl 2xl:text-2xl">
            Hurry We are live now
          </div>
        </article>
      </div>
    );
  if (!isLargeViewPort)
    return (
      <div className="flex justify-center bg-black">
        <div className=" bg-red-600 min-w-[10%] max-w-sm md:max-w-lg min-h-[70vh] md:h-[90vh] grid grid-cols-4  grid-rows-4 rounded-2xl text-white">
          <div className="bg-red-500 col-span-4 text-center place-self-center self-center">
            <h1 className="font-bold text-5xl ">Theme Title</h1>
          </div>
          <div className="bg-red-400 col-span-3 row-span-5 rounded-lg m-4"></div>
          <div className="col-span-1  self-start mt-14 place-self-center ">
            Info about the event
          </div>
          <div className="col-span-1  self-start mt-14 place-self-center ">
            Info about the event
          </div>
          <div className="col-span-1  self-start mt-14 place-self-center ">
            Info about the event
          </div>
        </div>
      </div>
    );
};

export default ThemeBar;
