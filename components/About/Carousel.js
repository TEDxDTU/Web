import React, { useRef } from 'react';

function Card() {
  return (<div
    className='
    flex-shrink-0
    w-48
    h-60
    bg-[rgba(56,56,56,0.95)]
    m-8
    rounded-2xl
    '
  >

  </div>);
};

function Carousel({ carouselRef, carouselTitle }) {

  return (<>
    <header
      className='
        text-left
        text-4xl
        font-semibold
        text-white
        m-8
      '
    >
      {carouselTitle}
    </header>
    <div
      ref={carouselRef}
      className='
    w-full
    bg-gradient-to-r from-[rgb(50,50,50)] via-black to-[rgb(50,50,50)]
    overflow-x-auto
    flex
    flex-row
    '
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </>);
};

function Controller({ carouselRef }) {
  return (<div>

  </div>);
};

export default function CarouselWrapper() {

  const carouselRef = useRef(null);

  return (<>
    <Carousel
      carouselRef={carouselRef}
      carouselTitle={"Tech Team"}
    />
    <Controller
      carouselRef={carouselRef}
    />
  </>);
}
