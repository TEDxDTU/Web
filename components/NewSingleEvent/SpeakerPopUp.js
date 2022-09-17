
const SpeakerPopUp = ({displaySpeaker,eventDetails}) =>{

    function speakerDetailsFinder(){
        for(let i = 0;i<eventDetails.speakersList.length ;i++){
            if(eventDetails.speakersList[i]._id === displaySpeaker){
                return eventDetails.speakersList[i]
            }
        }
        return null;
    }
    const speakerDetails = speakerDetailsFinder();
    console.log(speakerDetails);
    
    const achievementsList = [];
    for (let i = 0; i < speakerDetails.achievements.length; i++) {
        achievementsList.push(
            <div key={i}>{speakerDetails.achievements[i]}</div>
        );
    }
    const LinksList = [];
    for (let i = 0; i < speakerDetails.resources.length; i++) {
        LinksList.push(
            <div key={i}>{speakerDetails.resources[i]}</div>
        );
    }

    // console.log(speakerDetails);
    return(
        <div className="flex  translate-x-[-50%] translate-y-[-50%] flex-col absolute w-1/2 h-3/5 bg-gray-700 text-black top-1/2 left-1/4 rounded-md p-10">

            {/* Bio Section */}
            <div className="flex">
                <div className="flex item-center h-full justify-center ">
                    <img
                    className="h-[10rem] w-[10rem] m-2 items-center justify-center rounded-md"
                    src={speakerDetails.imageUrl}
                    />
                </div>
                <div className="m-2 w-3/6 md:h-2/3">
                    <div className="font-bold">{speakerDetails.name}</div>
                    <div className="text-sm font-light">{speakerDetails.bio}</div>
                </div>
            </div>

            {/* Achievements Section  */}
            <div className="">Achievements</div>
            <div className="flex-col flex">
                {achievementsList}
            </div>

            {/* Links Section  */}
            <div className="">Links</div>
            <div className="flex-col flex">
                {LinksList}
            </div>

        </div>
    )
}

export default SpeakerPopUp