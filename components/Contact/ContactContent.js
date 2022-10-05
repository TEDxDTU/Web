import React from "react";
import { useEffect } from "react";

export default function ContactContent({ contents }) {
  return (
    <>
      {contents?.map((content, val) => (
        <div key={val} className="mx-auto mb-6 lg:mb-8 w-3/4 ">
          <div className="bg-[rgba(100,100,100,0.3)] rounded p-4 text-xl text-justify flex">
            <div className="h-4 w-4 mt-1.5">{content[0]}</div>
            &nbsp;&nbsp;{content[1]}
          </div>
        </div>
      ))}
    </>
  );
}
