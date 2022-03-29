import React from "react";
import NavBar from "./NavBar";
import Head from "next/head";

export default function Page({ pageTitle, children }) {
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
};
