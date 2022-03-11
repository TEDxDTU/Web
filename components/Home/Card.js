export default function Card(props) {
    return (
        <div className="rounded-md w-full max-w-[24rem] m-4">
            <div>
                <img src={props.source} alt={props.title} className="w-80 h-80" />
            </div>

            <div className="text-white">
                <h2 className="text-3xl border-b-2 py-4 border-red-600 text-justify" >{props.title}</h2>
                <p className="py-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae consequatur magni cupiditate earum veniam laborum similique libero nam, eum quidem iusto quo mollitia debitis ab vel fuga exercitationem? Magni quam veniam a? Facilis ex et adipisci voluptas sit rerum?</p>
            </div>

            <div className="flex flex-row-reverse">
                <div className="bg-red-600 m-2 w-24 py-2 rounded text-center hover:bg-red-400 transition-all">
                    <a href="/" className="text-white">Read more</a>
                </div>
            </div>

        </div>
    );
}
