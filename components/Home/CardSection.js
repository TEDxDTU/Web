import { useContext } from "react";
import Card from "./Card";
import { FormContext } from "../../contextFiles/formContext";
import Link from "next/link";

export default function CardSection() {
  const [form, setForm] = useContext(FormContext);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto gap-x-6 gap-y-20 pb-12 justify-items-center justify-evenly">
        <div className="relative group md:mt-44 mt-8">
          <div className="relative leading-none">
            <div className="ml-[2rem] w-[20rem] md:ml-[5rem] mt-4 lg:w-[36rem] lg:ml-[7.5rem] lg:mt-5">
              <div>TEDxDTU welcomes you</div>
              <div className=" text-2xl mt-2 md:text-3xl lg:text-4xl">
                A world full of
              </div>
              <div className=" text-2xl md:text-3xl lg:text-4xl">
                Inspiration & Experience
              </div>
              <div className="md:w-80 lg:w-96 mt-5 ">
                We are very overwhelmed by your presence. And we aim at providing you
                the best experience & knowledge from world leaders.
              </div>
              {!form && (
                <div className="md:w-80 mt-2">
                  <Link href="/register">
                    <button className="bg-red-600 w-28 h-12 text-lg mt-2 hover:border-red-600 hover:border-2 hover:bg-white hover:text-red-600 ">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative lg:h-[700px] group md:mt-20">
          <div className="absolute -inset-0.5 bg-gradient-to-r md:pb-40 lg:pb-3 from-red-700 to-blue-700 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:200"></div>
          <div className="relative leading-none">
            <Card
              source="LandingPage\events.png"
              title="Events"
              link="events"
            />
          </div>
        </div>

        <div className="relative group md:-mt-80 md:mb-80">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-700 to-blue-700 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:200"></div>
          <div className="relative rounded-lg leading-none">
            <Card
              source="LandingPage\about-us.png"
              title="About Us"
              link="about"
            />
          </div>
        </div>

        <div className="relative lg:h-[700px] group ">
          <div className="absolute -inset-0.5 bg-gradient-to-r md:pb-36 lg:pb-3 from-red-700 to-blue-700 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:200"></div>
          <div className="relative rounded-lg leading-none">
            <Card
              source="LandingPage\partners.png"
              title="Partners"
              link="partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
