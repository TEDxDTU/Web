import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavBar() {

  const [isLargeViewPort, setIsLargeViewPort] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => (async () => {
    if (innerWidth >= 1024) setIsLargeViewPort(true);
    window.addEventListener("resize", (evt) => {

      if (innerWidth >= 1024) setIsLargeViewPort(true);
      else {
        setIsLargeViewPort(false);
        setIsNavOpen(false);
      };
    });
  })(), []);

  if (isLargeViewPort) return (<nav
    className='
      bg-black
      w-full
      h-28
      sticky
      top-0
      text-white
      grid
      lg:grid-cols-[repeat(13,minmax(0,1fr))]
      lg:grid-flow-row
      place-items-center
    '
  >
    <Link
      href="/"
    >
      <img
        className='
        col-span-3
        h-3/4
        cursor-pointer
      '
        src="/Images/Logo-White-Text.svg"
        alt="TEDxDTU Logo" />
    </Link>

    <Link
      href="/"
    >
      <div
        className='
        col-start-6
        border-b-2
        border-white
        pb-2
        hover:text-red-600
        hover:border-red-600
        cursor-pointer
        '
      >
        Home
      </div>
    </Link>

    <Link
      href="/"
    >
      <div
        className='
        border-b-2
        border-white
        pb-2
        hover:text-red-600
        hover:border-red-600
        cursor-pointer
        '
      >
        Theme
      </div>
    </Link>

    <Link
      href="/"
    >
      <div
        className='
        border-b-2
        border-white
        pb-2
        hover:text-red-600
        hover:border-red-600
        cursor-pointer
        '
      >
        Events
      </div>
    </Link>

    <Link
      href="/"
    >
      <div
        className='
        border-b-2
        border-white
        pb-2
        hover:text-red-600
        hover:border-red-600
        cursor-pointer
        '
      >
        Speakers
      </div>
    </Link>

    <Link
      href="/"
    >
      <div
        className='
        border-b-2
        border-white
        pb-2
        hover:text-red-600
        hover:border-red-600
        cursor-pointer
        '
      >
        Partners
      </div>
    </Link>

    <Link
      href="/"
    >
      <div
        className='
        border-b-2
        border-white
        pb-2
        hover:text-red-600
        hover:border-red-600
        cursor-pointer
        '
      >
        About
      </div>
    </Link>

    <Link
      href="/"
    >
      <button
        className='
        bg-red-600
        col-span-2
        w-3/4
        h-16
        text-lg
        '
      >
        Register
      </button>
    </Link>
  </nav>);

  if (!isLargeViewPort) return (<>
    <header
      className='
    flex
    flex-row
    bg-black
    w-full
    h-28
    sticky
    z-20
    top-0
    text-white
    justify-between
    items-center
    '
    >
      <img
        className='
        h-1/4
        mx-8
        cursor-pointer
      '
        src="/Images/NavBar-White.png"
        alt="NavBar"
        onClick={() => setIsNavOpen(!isNavOpen)}
      />
      <Link
        href="/"
      >
        <img
          className='
          w-40
          cursor-pointer
        '
          src="/Images/Logo-White-Text.svg"
          alt="TEDxDTU Logo"
        />
      </Link>
      <button
        className='
      bg-red-600
      mx-8
      h-16
      w-24
      md:w-32
      '
      >Register
      </button>
    </header>
    {isNavOpen && (<nav
      className='
        z-10
        bg-black
        sticky
        left-0
        top-28
        min-h-[max(100vh-7rem,36rem)]
        w-full
        sm:w-1/2
        flex
        flex-col
        text-white
        items-center
        overflow-auto
      '
    >
      <Link
        href="/"
      >
        <button
          className='
            bg-red-600
            rounded
            w-3/4
            py-4
            my-4
          '
        >
          Home
        </button>
      </Link>

      <Link
        href="/"
      >
        <button
          className='
            bg-red-600
            rounded
            w-3/4
            py-4
            my-4
          '
        >
          Theme
        </button>
      </Link>

      <Link
        href="/"
      >
        <button
          className='
            bg-red-600
            rounded
            w-3/4
            py-4
            my-4
          '
        >
          Events
        </button>
      </Link>

      <Link
        href="/"
      >
        <button
          className='
            bg-red-600
            rounded
            w-3/4
            py-4
            my-4
          '
        >
          Speakers
        </button>
      </Link>

      <Link
        href="/"
      >
        <button
          className='
            bg-red-600
            rounded
            w-3/4
            py-4
            my-4
          '
        >
          Partners
        </button>
      </Link>

      <Link
        href="/"
      >
        <button
          className='
            bg-red-600
            rounded
            w-3/4
            py-4
            my-4
          '
        >
          About
        </button>
      </Link>
    </nav>)}
  </>);
};
