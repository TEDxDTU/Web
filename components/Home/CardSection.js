import Card from "./Card";

export default function CardSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-9 gap-x-6 gap-y-8 justify-items-center justify-evenly">
      <Card className="" source="LandingPage-Assets\speakers.png" title="SPEAKERS" />
      <Card source="LandingPage-Assets\events.png" title="EVENTS" />
      <Card source="LandingPage-Assets\about-us.png" title="ABOUT US" />
      <Card source="LandingPage-Assets\partners.png" title="PARTNERS" />
    </div>
  );
}