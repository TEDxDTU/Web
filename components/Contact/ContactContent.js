import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContactContent() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="mx-auto mb-16 lg:mb-32 w-3/4 h-fit" data-aos="fade-up">
      <div className="icon">{content[0]}</div>
      <p className="bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify">
        {content[1]}
      </p>
    </div>
  );
}
