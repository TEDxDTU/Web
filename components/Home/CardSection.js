import Card from "./Card";
import Link from "next/link";

export default function CardSection() {
    return (<div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto py-10 gap-x-6 gap-y-8 justify-items-center justify-evenly">
            <div className="mt-32"><Card source="LandingPage\speakers.png" title="Speakers" link="speakers" /></div>
            <div><Card source="LandingPage\events.png" title="Events" link="events" /></div>
            <div><Card source="LandingPage\about-us.png" title="About Us" link="about" /></div>
            <div className="-mt-60"><Card source="LandingPage\partners.png" title="Partners" link="partners" /></div>
        </div>
    </div>
    );
}