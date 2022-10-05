import React from "react";

export default function TermsAndConditions(props) {
  return (
    <div className="text-center mx-10 py-4 md:mx-24">
      <h1 className="my-4 font-extrabold text-red-600 tracking-widest text-xl">
        {props.title}
      </h1>
      <p className="bg-[rgba(100,100,100,0.3)] rounded p-6 text-xl text-justify">
        {props.text}
      </p>
    </div>
  );
}
