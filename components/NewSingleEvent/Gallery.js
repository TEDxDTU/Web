const EventInfo = ({eventDetails}) =>{
    const galleryList = [];

    if(eventDetails.galleryImageUrls === null){
        galleryList.push(<h1 key={0}>No gallery Items!</h1>)
    }
    else{
        for(let i = 0;i<eventDetails.galleryImageUrls.length;i++){
            galleryList.push(<img src={eventDetails.galleryImageUrls[i]} key={i}></img>)
        }
    }

    return(
        <div className="flex">
            {galleryList}
        </div>
    )
}

export default EventInfo;