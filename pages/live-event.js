import React from 'react';
import Landing from '../components/LiveEvent/Landing';
import getLiveEvent from '../utils/getLiveEvent';

export async function getServerSideProps(ctx) {

  const liveEvent = await getLiveEvent();
  return {
    props: {
      liveEvent
    }
  };
};

export default function liveEvent({ liveEvent }) {
  return (
    <div><Landing liveEvent={liveEvent} /></div>
  );
};
