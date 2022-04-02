import React from 'react';
import Link from "next/link";

export default function XBanner({ position, imageURL, header, content, link }) {

  return (<>
    <div className='w-full h-[25rem] relative'>
      <img src={imageURL} className={`h-full float-${position} w-[55.55%]`} />
      <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={`h-full w-[55.55%] absolute z-10 top-0 ${position}-0`}>
        <path d="M0 500L280 250L0 0L160 0L400 166.667L640 0L800 0L520 250L800 500H640L400 333.333L160 500H0Z" fill="none" stroke='white' strokeWidth={0} />
        <path d="M800 500V0L520 250L800 500Z" fill="black" stroke='black' strokeWidth={1} />
        <path d="M0 0L0 500L280 250L0 0Z" fill="black" stroke='black' strokeWidth={1} />
        <path d="M160 499.67L640 499.67L400 333L160 499.67Z" fill="black" stroke='black' strokeWidth={1} />
        <path d="M640 -1.52588e-05L160 -1.52588e-05L400 166.67L640 -1.52588e-05Z" fill="black" stroke='black' strokeWidth={1} />
      </svg>
      <div className={`absolute top-0 ${position == "left" ? "right" : "left"}-0 h-full w-2/5`}>
        <header className='text-3xl text-center py-8'>Sample Heading</header>
        <p className='text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptate eum, iusto quae debitis tempora. Ipsum quibusdam, distinctio velit beatae voluptatem, amet est nesciunt molestiae accusantium pariatur iste, ducimus nihil?</p>
        <Link
          href={link}>
          <button className='bg-red-600 text-white text-xl rounded my-4 p-4'>Read More</button>
        </Link>
      </div>
    </div>
  </>);
};

