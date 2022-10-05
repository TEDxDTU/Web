import {React,useState,useEffect,useRef} from 'react'
import ReactPlayer from 'react-player'
import { faPlay,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const  VideoCarousel = (props) => {
    const videoUrls = props?.videoUrls
    const imageUrl = props?.imageUrl;
    const title = props?.title;

    const sliderRef = useRef(null);
    const nextButton = useRef(null);
    const prevButton = useRef(null);
    let slideInterval;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);
    const videoLength = videoUrls.length;

    const handleOnPrevClick = () =>{
        setCurrentIndex(prevIndex =>(prevIndex + videoLength - 1) % videoLength );
        if(sliderRef.current !== null)
            sliderRef.current.classList.add("fade-anim");
    }
    const handleOnNextClick = () =>{
        setCurrentIndex(prevIndex => (prevIndex+1)%videoLength);
        if(sliderRef.current !== null)
            sliderRef.current.classList.add("fade-anim");
    }

    const startSlider = () =>{
       slideInterval = setInterval(()=>{
          handleOnNextClick()
      },10000)
    }

    const pauseSlider = () =>{
        clearInterval(slideInterval);
    }
    const removeAnimation = () =>{
        if(sliderRef.current !== null)
            sliderRef.current.classList.remove("fade-anim")
    }
    useEffect(() => {
        sliderRef.current.addEventListener("animationend",removeAnimation);
        sliderRef.current.addEventListener("mouseenter",pauseSlider);
        sliderRef.current.addEventListener("mouseleave",startSlider);
        startSlider();
        return() =>{
            pauseSlider();
        };
    }, [])

    useEffect(() => {
        if (hoverLeft === true) {
            prevButton.current.classList.replace("bg-[rgba(255,255,255,0.2)]", "bg-[rgba(255,255,255,0.3)]");
            prevButton.current.firstElementChild.classList.replace("opacity-20", "opacity-100");
        }
        if (hoverLeft === false) {
            prevButton.current.classList.replace("bg-[rgba(255,255,255,0.3)]", "bg-[rgba(255,255,255,0.2)]");
            prevButton.current.firstElementChild.classList.replace("opacity-100", "opacity-20");
        }
    }, [hoverLeft])
    useEffect(() => {
        if (hoverRight === true) {
            nextButton.current.classList.replace("bg-[rgba(255,255,255,0.2)]", "bg-[rgba(255,255,255,0.3)]");
            nextButton.current.firstElementChild.classList.replace("opacity-20", "opacity-100");
        }
        if (hoverRight === false) {
            nextButton.current.classList.replace("bg-[rgba(255,255,255,0.3)]", "bg-[rgba(255,255,255,0.2)]");
            nextButton.current.firstElementChild.classList.replace("opacity-100", "opacity-20");
        }
    }, [hoverRight])
    

  return (
    <div ref={sliderRef} className="w-[100%] px-[15%] select-none relative flex justify-center reactPlayerContainer">
        <div className='relative pt-[56.25%] mt-2 w-[100rem]
        drop-shadow-lg rounded' key={1}>
            <ReactPlayer
            url={videoUrls[currentIndex]}
            className="absolute top-0 left-0"
            controls={true}
            width="100%"
            height="100%"
            light={imageUrl}
            playIcon={
                <div
                    className="relative w-full h-full items-center justify-center text-white hover:text-red-600 flex">
                    <h1 className="text-2xl text-[inherit] bg-[rgba(0,0,0,0.4)] lg:text-4xl font-light
                        drop-shadow capitalize absolute top-0 left-0 px-2 py-2 transition-colors duration-200">
                        {title}
                    </h1>
                    <div className="w-full h-fit flex justify-center">
                        <FontAwesomeIcon
                        className="w-4 sm:w-5 text-[inherit] lg:w-8
                        transition-colors duration-200"
                        icon={faPlay}
                        />
                    </div>
                </div>
            }
            />
        </div>
        <div className='absolute top-1/2 transform -translate-y-1/2
         py-2 w-full px-[6%] md:px-[8%] flex justify-between items-center pointer-events-none	'>
            <button ref={prevButton} onClick={handleOnPrevClick} onMouseEnter={() => setHoverLeft(true)} onMouseLeave={() => setHoverLeft(false)}
            className="duration-200 transition-colors bg-[rgba(255,255,255,0.2)] p-2 rounded-xl pointer-events-auto">
                <FontAwesomeIcon 
                className='text-4xl text-red-600 opacity-20 w-4 sm:w-6 lg:w-10 transition-colors duration-[210ms]' 
                icon={faChevronLeft}></FontAwesomeIcon>
            </button>
            <button ref={nextButton} onClick={handleOnNextClick} onMouseEnter={() => setHoverRight(true)} onMouseLeave={() => setHoverRight(false)}
            className="duration-200 transition-colors bg-[rgba(255,255,255,0.2)] p-2 rounded-xl pointer-events-auto">
                <FontAwesomeIcon 
                className='text-4xl text-red-600 opacity-20 w-4 sm:w-6 lg:w-10 transition-colors duration-[210ms]' 
                icon={faChevronRight}></FontAwesomeIcon>
            </button>
         </div>
    </div>
  )
}

export default VideoCarousel