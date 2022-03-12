import Card from "./Card";

export default function CardSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto py-8 gap-x-6 gap-y-8 justify-items-center justify-evenly">
            <Card source="LandingPage\speakers.png" title="Speakers" link="speakers" />
            <Card source="LandingPage\events.png" title="Events" link="events" />
            <Card source="LandingPage\about-us.png" title="About Us" link="about" />
            <Card source="LandingPage\partners.png" title="Partners" link="partners" />
        </div>
    );
}