import Card from "./Card";

export default function CardSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-9 gap-x-6 gap-y-8 justify-items-center justify-evenly">
      <Card className="" source="Images\speakers.png" title="SPEAKERS" />
      <Card source="Images\events.png" title="EVENTS" />
      <Card source="Images\about-us.png" title="ABOUT US" />
      <Card source="Images\partners.png" title="PARTNERS" />
    </div>
  );
}