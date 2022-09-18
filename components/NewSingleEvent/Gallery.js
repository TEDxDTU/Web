const EventInfo = ({ eventDetails }) => {
  const galleryList = [];

  if (eventDetails.galleryImageUrls.length === 0) {
    galleryList.push(
      <div
        key={0}
        className="flex bg-gray-700 rounded-xl mt-10 mx-10 py-3 px-5 text-lg md:text-xl mb-16"
      >
        Don't Worry, We will be adding Images Soon!
      </div>
    );
  } else {
    for (let i = 0; i < eventDetails.galleryImageUrls.length; i++) {
      galleryList.push(
        <>
          {/* <div className=" -inset-0.5 bg-gradient-to-r from-red-700 to-blue-700 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:200"></div> */}
          <img
            className="w-3/4 m-2 rounded-xl sm:w-1/4 sm:m-4 sm:rounded-2xl"
            src={eventDetails.galleryImageUrls[i]}
            key={i}
          />
        </>
      );
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center bottom-0 pb-32">
      {galleryList}
    </div>
  );
};

export default EventInfo;
