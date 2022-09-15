import Router, { useRouter } from "next/router";
import Page from "../../components/Universal/Page";

const EventDetails = () => {
  const router = useRouter();
  return (
    <Page pageTitle={"Events"}></Page>
  );
};

export default EventDetails;
