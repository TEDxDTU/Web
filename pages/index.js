import { useRouter } from "next/router";
import Landing from "../components/Home/Landing";

export async function getStaticProps(ctx) {

    return {
        props: {

        }
    };
};

export default function Home() {
    return <Landing />;
}
