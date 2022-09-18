import React, { useContext, useEffect } from "react";
import NavBar from "./NavBar";
import { FormContext } from "../../contextFiles/formContext";
import Head from "next/head";

export default function Page({ pageTitle, children }) {
  const [form, setForm] = useContext(FormContext);

  useEffect(function () {
    setForm(JSON.parse(window.localStorage.getItem("profile")));
  }, []);

  return (
    <>
      <Head>
        <title>TEDxDTU: {pageTitle}</title>
        <link
          rel="icon"
          href="/LandingPage/Tab-Logo-Black.svg"
          type="image/x-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar {...pageTitle} />
      <div className="bg-black text-white min-h-[max(calc(100vh-16rem),36rem)] my-auto">
        {children}
      </div>
    </>
  );
}
