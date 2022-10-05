import Link from "next/link";

export default function Card(props) {
    return (
        <div className="w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[22rem] lg:max-w-[24rem] m-4 ">
            <div>
                <img src={props?.source} alt={props?.title} className="w-90 lg:h-100 rounded-t-lg" />
            </div>

            <div className="text-white bg-[#252525]">
                <h2 className="text-3xl border-b-2 py-4 border-red-600 text-justify font-bold pl-4" >{props?.title}</h2>
                {/* <p className="py-2 text-justify mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae consequatur magni cupiditate earum veniam laborum similique libero nam, eum quidem iusto quo mollitia debitis ab vel fuga exercitationem? Magni quam veniam a? Facilis ex et adipisci voluptas sit rerum?</p> */}
                
                {props.title === "Events" ?
                    <div>
                        <p className="py-2 tracking-wide mx-4">Curiosity has led us this unprecedented Era we are living in. It is this curiosity that we at TEDxDTU wish to share with you all through our flagship TED Talk. This year the stars have aligned themselves for the event on 16th October! 
                        </p>
                        <p className="py-2 tracking-wide mx-4">A day full of surprises awaits you. Join us at DTU' BR Auditorium to lift up the human in you and have a whole new perspective on life. 
                        </p>
                    </div> :
                 null}

                {props.title === "Partners" ?
                    <div>
                        <p className="py-2 tracking-wide mx-4">Did you know that the TED in TED Talks stands for Technology, Entertainment and Design? Collaboration and partnerships are one of the many hallmarks of a TED Talk.
                        </p>
                        <p className="py-2 tracking-wide mx-4">In our case, we are proud to have partnered up with <b>The Tatva</b> and many other sponsors for the successful execution of our talk shows. We believe that by creating such tie-ups with a variety of companies spanning different domains of the Industry, we can create a richer experience for idea sharing and conversations. 
                        </p>
                    </div> :
                 null}

                {props.title === "About Us" ?
                    <div>
                        <p className="py-2 tracking-wide mx-4">TEDxDTU is a self-organized branch of the humongous non-profit organization TED, that bears ideas as tasteful as a fruit that one reaps from a blossoming and ever-growing tree.
                        </p>
                        <p className="py-2 tracking-wide mx-4">Our motto is to enlighten people, to chisel in an idea that can drive necessary change, to impact fellow humans with powerful words, to ask people to keep heart, to ask them to believe that life is worth all the hustle and to appeal to a world that is ready to grow, ready to flourish and to welcome to new and better possibilities.
                        </p>
                    </div> :
                 null}
            </div>

            <div className="flex flex-row-reverse bg-[#252525] rounded-b-lg">
                <div className="bg-red-600 m-4 w-24 py-2 rounded text-center hover:bg-red-400 transition-all">
                    <Link href={`/${props?.link}`} className="text-white">Read more</Link>
                </div>
            </div>

        </div>
    );
}
