import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const EventInfo = ({ eventDetails }) => {
  console.log(eventDetails);

  const date = eventDetails.dateTime.slice(0, 10);
  const time = eventDetails.dateTime.slice(11, 19);
  return (
    <div className="flex flex-col mx-52 bg-gray-700 rounded-3xl p-10">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center align-center w-full mb-10 hover:text-red-500">
          <FontAwesomeIcon
            className="w-6"
            icon={faLocationDot}
          ></FontAwesomeIcon>
          <div className=" ml-7 text-xl my-auto">{eventDetails.venue}</div>
        </div>
        <div className="flex justify-center align-center w-full mb-10 hover:text-red-500">
          <FontAwesomeIcon
            className="w-6"
            icon={faCalendarDays}
          ></FontAwesomeIcon>
          <div className=" ml-7 text-xl my-auto">{date}</div>
        </div>
        <div className="flex justify-center align-center w-full mb-10 hover:text-red-500">
          <FontAwesomeIcon className="w-6" icon={faClock}></FontAwesomeIcon>
          <div className=" ml-7 text-xl my-auto">{time}</div>
        </div>
      </div>
      <div className="flex flex-col px-10 py-6 bg-gray-600 rounded-3xl justify-center align-center">
        <div className="text-2xl mx-auto opacity-50 tracking-wider">About</div>
        <div className="text-lg font-light tracking-wide mt-2">
          {eventDetails.details}
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
