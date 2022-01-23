const ThemeBar = () => {
  return (
    <div className="min-h-[max(calc(100vh-16rem),36rem)] bg-black mx-auto flex justify-around">
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
};

export default ThemeBar;
