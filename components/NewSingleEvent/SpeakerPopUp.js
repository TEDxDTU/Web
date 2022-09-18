import { useContext } from "react";
import Link from "next/link";
import { displaySpeakerContext } from "./EventDetails";

const SpeakerPopUp = ({ displaySpeaker, eventDetails }) => {
  const setDisplaySpeaker = useContext(displaySpeakerContext);
  function speakerDetailsFinder() {
    for (let i = 0; i < eventDetails.speakersList.length; i++) {
      if (eventDetails.speakersList[i]._id === displaySpeaker) {
        return eventDetails.speakersList[i];
      }
    }
    return null;
  }
  const speakerDetails = speakerDetailsFinder();
  // console.log(speakerDetails);

  const achievementsList = [];
  for (let i = 0; i < speakerDetails.achievements.length; i++) {
    achievementsList.push(<div key={i}>{speakerDetails.achievements[i]}</div>);
  }
  const LinksList = [];
  for (let i = 0; i < speakerDetails.resources.length; i++) {
    let linkToPush = speakerDetails.resources[i];
    if (speakerDetails.resources[i].length > 30) {
      linkToPush = linkToPush.slice(0, 30);
      linkToPush += "...";
    }
    LinksList.push(
      <a
        key={i}
        href={speakerDetails.resources[i]}
        target="_blank"
        className="hover:text-black"
      >
        {linkToPush}
      </a>
    );
  }

  const onClickHandler = (e) => {
    if (e.target.id === "backdrop") {
      setDisplaySpeaker("null");
    }
  };

  // console.log(speakerDetails);
  return (
    // backdrop div below
    <div
      id="backdrop"
      onClick={onClickHandler}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 "
    >
      {/* Bio Section */}
      <div className="flex flex-col absolute w-2/3 md:w-3/5 shadow-xl shadow-black bg-red-600 text-white rounded-md p-5 border-2 border-black border-opacity-25">
        <div className="flex flex-col flex-row ">

          {/* Image  */}
          <div className="flex item-center h-full justify-center w-full mx-auto">
            <img
              className="h-[7rem] w-[7rem] m-2 items-center object-cover justify-center rounded-lg shadow-md shadow-black"
              src={speakerDetails.imageUrl}
            />
          </div>

          <div className="m-2 flex flex-col md:h-2/3">
             
            {/* Name */}
            <div className="font-bold text-lg text-center sm:text-left ">
              {speakerDetails.name}
            </div>
            {/* Bio */}
            {speakerDetails.bio.length === 0 ? null :
              <div className="text-sm font-light text-center sm:text-left mb-1">
                {speakerDetails.bio}
              </div>
            }
            {/* Topic */}
            {speakerDetails.topic.length === 0 ? null :
              <div>
                <div className="font-bold text-lg text-center sm:text-left ">
                  Topic
                </div>
                <div className="text-sm font-light text-center sm:text-left">
                  {speakerDetails.topic}
                </div>
              </div>
            }
          </div>
        </div>

        <div className="flex md:space-x-5 md:flex-row flex-col mx-2">
          {/* Achievements Section  */}
          {speakerDetails.achievements.length === 0? null :
            <div className="flex flex-col md:w-1/2 mb-4 md:mb-none">
              <div className="tracking-wider font-bold ">Achievements</div>
              <div className="flex-col flex font-light">{achievementsList}</div>
            </div>
          }

          {/* Links Section  */}
          {speakerDetails.resources.length === 0? null :
            <div className="flex flex-col md:w-1/2">
              <div className="tracking-wider font-bold">Links</div>
              <div className="flex-col flex font-light">{LinksList}</div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SpeakerPopUp;
