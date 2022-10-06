import React from "react";
import Page from "../components/Universal/Page";

export default function returnpolicy() {
  return (
    <Page pageTitle={"Return Policy"}>
      <header className="text-center text-6xl py-8 text-black text-stroke-thin-red font-bold ">
        Return Policy
      </header>
      <div className="text-center mx-24 ">
        <p className="bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify">
          No Return or refund unless the event gets cancelled.
        </p>
      </div>
    </Page>
  );
}
