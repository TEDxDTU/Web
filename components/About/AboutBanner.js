import AboutContent from "./AboutContent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutBanner = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (<div
        className="lg:grid lg:grid-cols-3 w-full py-16"
    >
        <div
            className="col-span-2"
        >
            <AboutContent
                title={"About TEDx"}
                // content = "In the spirit of ideas worth spreading, TEDx is a program of local self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"
                contents={["There is one thing stronger than all the armies in the world, an idea whose time has come. Everything begins with an idea, a thought that provokes action and an intention that brings change.",
                "In the spirit of ideas worth spreading, TEDx is a program of local self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)",
                "We envision delivering impactful and worthwhile ideas that hold the potential to spark a change, ignite ambition and bring about the difference that needs to be made.",
                "TEDxDTU is a self-organized branch of the humongous non-profit organization TED. that bears ideas as tasteful as a fruit that one reaps from a blossoming and ever-growing tree.",
                "From hosting the versatile, robust and inspiring Kiran Bedi to world-renowned Indian car designer Dilip Chhabria, from discussing the future of technology to the dilemmas faced by today's youth. TEDxDTU has never failed to convey words of wisdom through influential voices and through the people who have met the thick and thins of life.",
                "Our motto is to enlighten people, to chisel in an idea that can drive necessary change, to impact fellow humans with powerful words, to ask people to keep heart, to ask them to believe that life is worth all the hustle and to appeal to a world that is ready to grow, ready to flourish and to welcome to new and better possibilities."
                ]}
            />
            <AboutContent
                title={"What is TED"}
                contents={["TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia, along with the TEDActive simulcast event in nearby Whistler."]}
            />
        </div>
        <img
            className="lg:col-start-3 lg:w-full w-5/6 max-w-[40rem] mx-auto py-8"
            src="/AboutUs/Speakers.png"
            data-aos="fade-up"
        />
    </div>);
};

export default AboutBanner;
