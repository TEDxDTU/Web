import React, { useEffect, useState } from 'react';
import YouTube from "react-youtube";

export default function Player() {

  const [videoPlayerWidth, setVideoPlayerWidth] = useState();

  function handleWindowResize() {
    const player = document?.getElementById("youtube-player");
    // player.width = window.innerWidth * 0.65;
    // player.height = player.width * 9 / 16;
  };

  useEffect(() => {
    setVideoPlayerWidth(() => innerWidth * 0.65);
    window?.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <YouTube
      id='youtube-player'
      videoId={"7A1SzIIKMho"}
      iframeClassName="mx-auto my-8"
      opts={{
        width: videoPlayerWidth,
        height: videoPlayerWidth * 9 / 16
      }}
    />
  );
};
