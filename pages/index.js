import { useRouter } from "next/router";
import Landing from "../components/Home/Landing";
import { findLatestEventTillTime } from "../utils/dateOperators";

export async function getStaticProps() {

    const url = process.env.HOST_DOMAIN + "/api/events?eventType=live";
    const response = await fetch(url);
    const events = await response.json();

    const idx = findLatestEventTillTime(events);

    return {
        props: {
            latestEvent: events[idx]
        }
    };
};

export default function Home({ latestEvent }) {
    return <Landing
        latestEvent={latestEvent}
    />;
};
