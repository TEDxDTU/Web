import Link from "next/link";

export default function Card(props) {
    return (
        <div className="w-full max-w-[20rem] lg:max-w-[24rem] m-4 ">
            <div>
                <img src={props.source} alt={props.title} className="w-90 lg:h-100 rounded-t-lg" />
            </div>

            <div className="text-white bg-[#252525]">
                <h2 className="text-3xl border-b-2 py-4 border-red-600 text-justify font-bold pl-4" >{props.title}</h2>
                <p className="py-2 text-justify mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae consequatur magni cupiditate earum veniam laborum similique libero nam, eum quidem iusto quo mollitia debitis ab vel fuga exercitationem? Magni quam veniam a? Facilis ex et adipisci voluptas sit rerum?</p>
            </div>

            <div className="flex flex-row-reverse bg-[#252525] rounded-b-lg">
                <div className="bg-red-600 m-4 w-24 py-2 rounded text-center hover:bg-red-400 transition-all">
                    <Link href={`/${props.link}`} className="text-white">Read more</Link>
                </div>
            </div>

        </div>
    );
}
