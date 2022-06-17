import React, { useState, useEffect } from 'react';
import Page from '../Universal/Page';
import EventDetails from './EventDetails';
import Player from './Player';

export default function Landing({ liveEvent }) {

  const [isLargeViewPort, setIsLargeViewPort] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    if (innerWidth >= 1024) setIsLargeViewPort(true);
    window.addEventListener("resize", (evt) => {
      if (innerWidth >= 1024) setIsLargeViewPort(true);
      else setIsLargeViewPort(false);
    });
  }, []);

  return (<Page
    pageTitle={"Live!"}
  >
    <div className={`${isLargeViewPort ? "flex" : ""} justify-around`}>
      <Player />
      <EventDetails liveEvent={liveEvent} />
    </div>
  </Page>
  );
};
