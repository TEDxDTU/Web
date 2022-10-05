import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContactContent({ contents }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (<>
    {contents?.map((content, val) => <div key={val} className="mx-auto mb-16 lg:mb-32 w-3/4 " data-aos="fade-up">
      <div className="bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify flex">
        <div className="h-4 w-4 mt-1.5">
          {content[0]}
        </div>
        &nbsp;&nbsp;{content[1]}
      </div>
    </div>)}
  </>
  );
}
