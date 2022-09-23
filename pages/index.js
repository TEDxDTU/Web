import dynamic from 'next/dynamic';

const Landing = dynamic(
  () => import(
    '../components/Home/Landing.js'
  ),
  {
    ssr: false,
  }
);
// import Landing from "../components/Home/Landing";
import getLiveEvent from "../utils/getLiveEvent";

export async function getStaticProps() {

  const liveEvent = await getLiveEvent();

  return {
    props: {
      liveEvent: liveEvent
    }
  };
};

export default function Home({ liveEvent }) {

  return <Landing
    liveEvent={liveEvent}
  />;
};
