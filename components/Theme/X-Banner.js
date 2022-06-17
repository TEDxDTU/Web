import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function XBanner({ position, imageURL, header, content, link }) {

  const [isLargeViewPort, setIsLargeViewPort] = useState(null);

  useEffect(
    () =>
      (async () => {
        if (innerWidth >= 1024) setIsLargeViewPort(true);
        window.addEventListener("resize", (evt) => {
          if (innerWidth >= 1024) setIsLargeViewPort(true);
          else setIsLargeViewPort(false);
        });
      })(),
    []
  );

  if (isLargeViewPort) return (<>
    <div className='w-full h-[25rem] relative'>
      <img src={imageURL} className={`h-full absolute z-10 top-0 ${position}-0 w-[60%]`} />
      <svg viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none' className={`h-full w-[60%] absolute z-10 top-0 ${position}-0`}
      >
        <path d="M375 0.5H448.793L299.647 149.646L299.293 150L299.647 150.354L448.793 299.5L375 299.5H300.207L225.354 224.646L225 224.293L224.646 224.646L149.793 299.5L75.0001 299.5H1.2071L150.354 150.353L150.707 150L150.354 149.646L1.20715 0.500002L75.0001 0.500134H149.793L224.646 75.3536L225 75.7071L225.354 75.3536L300.207 0.5H375Z" fill="none" stroke='black' />
        <path d="M300 300H150L225 225L300 300Z" fill="black" />
        <path d="M450 0V300L300 150L450 0Z" fill="black" />
        <path d="M0 300L0 0L150 150L0 300Z" fill="black" />
        <path d="M150 0L300 0L225 75L150 0Z" fill="black" />
      </svg>

      <div className={`absolute top-0 ${position == "left" ? "right" : "left"}-0 h-full w-2/5`}>
        <header className='text-3xl text-center py-8'>{header}</header>
        <p className='text-xl text-justify'>{content}</p>
        <Link
          href={link}>
          <button className='bg-red-600 text-white text-xl rounded my-4 p-4'>Read More</button>
        </Link>
      </div>
    </div>
  </>);

  if (!isLargeViewPort) return (<>
    <div className="w-4/5 mx-auto">
      <header className='text-3xl text-center py-8'>{header}</header>
      <p className='text-xl text-justify'>{content}</p>
      <img src={imageURL} className={`w-full py-4`} />
      <Link
        href={link}>
        <button className='bg-red-600 text-white text-xl rounded my-4 p-4'>Read More</button>
      </Link>
    </div>
  </>);
};

