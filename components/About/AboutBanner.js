import AboutContent from "./AboutContent";

const AboutBanner = () => {
    return (<div
        className="lg:grid lg:grid-cols-3 w-full py-16"
    >
        <div
            className="col-span-2"
        >
            <AboutContent
                title={"About TEDx"}
                content="In the spirit of ideas worth spreading, TEDx is a program of local self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"
            />
            <AboutContent
                title={"What is TED"}
                content="TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia, along with the TEDActive simulcast event in nearby Whistler."
            />
        </div>
        <img
            className="lg:col-start-3 lg:w-full w-5/6 max-w-[40rem] mx-auto py-8"
            src="/AboutUs/Speakers.png"
        />
    </div>);
};

export default AboutBanner;
