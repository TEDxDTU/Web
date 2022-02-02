import Box from "./Box";
import Colarge from "./colarge";

const Speaker = () => {
  return (
    <>
      <div className="border-t-4 border-red-700 bg-black">
        <main className="grid lg:grid-cols-2 xl:grid-cols-11 2xl:gap-12  xl:px-2 2xl:px-24 mx-14 py-8">
          <article className="bg-black lg:col-span-1 xl:col-span-6 2xl:col-span-7 max-h-fit mb-20">
            <span className="flex flex-col mt-5 2xl:mt-10 ">
              <div className="text-white text-6xl 2xl:text-8xl ml-20 2xl:ml-28 flex gap-8">
                About
                <img className=" mt-1" src="/Images/Logo-White-Text.svg" />
              </div>

              <div className="bg-box text-xl lg:text-base xl:text-xl text-white py-5 px-10 rounded-xl m-10 2xl:mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                reprehenderit totam iste vel dignissimos, laudantium eum
                eligendi temporibus ea in quidem explicabo placeat aperiam eos
                doloribus a ad unde consequatur nam. Assumenda porro ullam
                consequuntur debitis natus nemo, tenetur accusamus quibusdam
                praesentium. Rerum distinctio debitis nisi nemo esse
                consequuntur provident vel quis modi placeat aliquam, assumenda,
                omnis obcaecati voluptas officiis ducimus quam accusamus iste
              </div>

              <div className="text-white text-6xl 2xl:text-8xl ml-20 2xl:ml-28 flex">
                What is<span className="text-logo_red"> TED</span>
              </div>

              <div className="bg-box text-xl lg:text-base xl:text-xl text-white py-5 px-10 rounded-xl m-10 mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                reprehenderit totam iste vel dignissimos, laudantium eum
                eligendi temporibus ea in quidem explicabo placeat aperiam eos
                doloribus a ad unde consequatur nam. Assumenda porro ullam
                consequuntur debitis natus nemo, tenetur accusamus quibusdam
                praesentium. Rerum distinctio debitis nisi nemo esse
                consequuntur provident vel quis modi placeat aliquam, assumenda,
                omnis obcaecati voluptas officiis ducimus quam accusamus iste
              </div>

              <footer className="flex sm:justify-center 2xl:justify-start 2xl:flex-none ">
                <div className="bg-box_red min-h-[9rem] max-w-[16rem] md:w-[20rem] -mt-14 rounded-3xl mx-10 grid grid-cols-2 justify-items-center place-content-center text-xl text-white">
                  <div>
                    Ted talk <br />
                    with <br />
                    Sarthak
                  </div>
                  <div className="flex flex-col gap-4 items-end">
                    <div className="mr-2">Live</div>
                    <div className="bg-logo_red h-fit w-fit p-2">Join Now</div>
                  </div>
                </div>
              </footer>
            </span>
          </article>
          <Colarge />
        </main>
      </div>
    </>
  );
};

export default Speaker;
