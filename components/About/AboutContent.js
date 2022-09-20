import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutContent({ title, content }) {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className='mx-auto mb-16 lg:mb-32 w-3/4 h-fit'
      data-aos="fade-up"
    >
      <header
        className='text-center text-6xl my-8 text-black text-stroke-thin-red font-bold '
      >{title}</header>
      <p
        className='bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify'
      >{content}</p>
    </div>
  );
};

