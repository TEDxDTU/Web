import Card from "./Card";
import Link from "next/link";

export default function CardSection() {
    return (<div>
        <div className="ml-[2rem] w-[20rem] md:ml-[5rem] mt-4 lg:w-[36rem] lg:ml-[7.5rem] lg:mt-5">
            <div>TEDxDTU welcomes you</div>
            <div className=" text-2xl mt-2 md:text-3xl lg:text-4xl">A world full of</div>
            <div className=" text-2xl md:text-3xl lg:text-4xl">Inspiration & Experience</div>
            <div className="md:w-80 lg:w-96 mt-5">We are very overwhelmed by your presence.
                And we aim at providing you the best experience
                & knowledge from world leaders.</div>
            <div className="md:w-80 mt-2 w-96">
                <Link href="/register">
                    <button className="bg-red-600 w-28 h-12 text-lg mt-2">
                        Register
                    </button>
                </Link>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto py-8 -mt-60 gap-x-6 gap-y-8 justify-items-center justify-evenly">
            <div className="mt-60"><Card source="LandingPage\speakers.png" title="Speakers" link="speakers" /></div>
            <div className=""><Card source="LandingPage\events.png" title="Events" link="events" /></div>
            <div className=""><Card source="LandingPage\about-us.png" title="About Us" link="about" /></div>
            <div className="-mt-60"><Card source="LandingPage\partners.png" title="Partners" link="partners" /></div>
        </div>
    </div>
    );
}