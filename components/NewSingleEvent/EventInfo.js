import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const EventInfo = ({ eventDetails }) => {
  // console.log(eventDetails);

  let date = eventDetails.dateTime.slice(0, 10);
  function extractDate() {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    date = `${day}-${month}-${year}`
  }
  extractDate();

  let eventAbout = eventDetails.details;
  if (eventAbout.length === 0) {
    eventAbout = "No Data Found!";
  }

  const time = eventDetails.dateTime.slice(11, 19);
  return (
    <div className="flex flex-col w-4/5 mx-auto bg-[rgba(100,100,100,0.3)] rounded-3xl p-4 sm:p-6 md:p-10">
      <div className="flex flex-col lg:flex-row mt-4 sm:mt-2 md:mt-0">
        <div className="flex justify-center align-center w-full mb-10">
          <FontAwesomeIcon
            className="w-6"
            icon={faLocationDot}
          ></FontAwesomeIcon>
          <div className=" ml-7 text-xl my-auto">{eventDetails.venue}</div>
        </div>


        {date === "" ? null :
          <div className="flex justify-center align-center w-full mb-10">
            <FontAwesomeIcon
              className="w-6"
              icon={faCalendarDays}
            ></FontAwesomeIcon>
            <div className=" ml-7 text-xl my-auto">{date}</div>
          </div>
        }

        {time === "" ? null :
          <div className="flex justify-center align-center w-full mb-10">
            <FontAwesomeIcon className="w-6" icon={faClock}></FontAwesomeIcon>
            <div className=" ml-7 text-xl my-auto">{time}</div>
          </div>
        }
      </div>
      <div className="flex flex-col px-6 md:px-10 py-6 bg-[#2C2C2C] rounded-3xl justify-center align-center">
        <div className="text-2xl mx-auto tracking-wider text-white">About</div>
        <div className="text-lg font-light tracking-wide mt-2">
          {eventAbout}
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
