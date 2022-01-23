const ThemeBar = () => {
  return (
    <div className="min-h-[max(calc(100vh-16rem),36rem)] bg-black mx-auto flex justify-around">
      <article className="grid grid-cols-5 grid-rows-3 h-[36rem] w-[87rem] gap-6 bg-red-600">
        <div className="bg-red-600 rounded-3xl col-span-2 row-span-3 relative">
          <span className="absolute -top-24 inset-11 h-full w-3/4  bg-red-500">
            <img src="" alt="" />
          </span>
        </div>
        <div className="bg-red-600 rounded-3xl col-span-3 p-4">
          <span className="text-3xl font-semibold">Theme Title</span>
        </div>
        <div className="col-span-3 flex justify-around items-end ">
          <div className="bg-red-600 rounded-xl w-24">Welcome to the show</div>
          <div className="bg-red-600 rounded-xl w-24">Renowned Chief Guest</div>
          <div className="bg-red-600 rounded-xl w-24">
            Hurry we are live now
          </div>
        </div>
      </article>
    </div>
  );
};

export default ThemeBar;
