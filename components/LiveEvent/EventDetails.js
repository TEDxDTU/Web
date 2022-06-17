import React, { useEffect, useState } from 'react';

export default function EventDetails({ liveEvent }) {

  console.log(liveEvent.speakers);

  return (<div
    className='my-8 lg:w-3/12 w-3/4 mx-auto'
  >
    <h1 className='text-3xl sm:text-5xl w-full font-semibold '>
      {liveEvent?.title}
    </h1>
    <br />
    <h2 className='text-lg sm:text-3xl w-full text-red-600'>
      {`At: ${liveEvent?.venue}`}
    </h2>
    <br />
    <h2 className='text-xl sm:text-4xl w-full '>Our Speakers: </h2>
    {liveEvent.speakers.map((speaker) => <div className='text-red-600 sm:text-2xl bg-[rgba(255,255,255,0.1)] rounded my-4 p-4 w-60'>
      {speaker.name}
    </div>)}
  </div>);
}
