const VideoThumbnail = (props) => {
  const { title, imageUrl, date, time, status, mode } = props;

  return (
    status === 'completed' ? 
    <div className={"px-12 py-14 bg-video-card text-center shadow-md h-36 w-60 bg-[url(" + imageUrl + ")]"}>
        <div>{title}</div>
        <div>{date}</div>
        <div>{mode}</div>
      </div>
      : <div className="px-12 py-14 bg-red-600 text-center shadow-md h-36 w-60">
          {/* <img src={imageUrl} alt="video" /> */}
          <div>{title}</div>
          <div className="flex">
            <div>{date}</div>
            <div>{time} IST</div>
            <div className="bg-white rounded">Book Now</div>
          </div>
        </div>
  );
}

export default VideoThumbnail;