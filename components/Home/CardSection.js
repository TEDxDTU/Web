import Card from "./Card";

export default function CardSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto py-8 gap-x-6 gap-y-8 justify-items-center justify-evenly">
            <Card className="" source="LandingPage\speakers.png" title="SPEAKERS" />
            <Card source="LandingPage\events.png" title="EVENTS" />
            <Card source="LandingPage\about-us.png" title="ABOUT US" />
            <Card source="LandingPage\partners.png" title="PARTNERS" />
        </div>
    );
}