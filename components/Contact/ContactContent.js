import React from "react";
import { useEffect } from "react";

export default function ContactContent({ contents }) {
  return (
    <>
      {contents?.map((content, val) => (
        <div key={val} className="mx-auto mb-6 lg:mb-8 w-3/4 ">
          <div className="bg-[rgba(100,100,100,0.3)] rounded p-4 text-xl grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12">
            <div className="h-4 w-4 mt-1.5 ml-2 md:ml-5 col-span-1">{content[0]}</div>
            <div className="col-span-5 sm:col-span-9 md:col-span-11">
              {content[1]}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
