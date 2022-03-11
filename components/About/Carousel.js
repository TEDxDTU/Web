import React, { useRef } from 'react';

function Card({ imageURL, name }) {
    return (<div
        className='flex-shrink-0 w-48 h-60 bg-[rgba(100,100,100,0.3)] m-8 rounded-2xl'
    >

    </div>);
};

function Carousel({ teamTitle, teamMembers }) {

    const carouselRef = useRef(null);

    return (<>
        <header
            className='text-left text-4xl font-semiboldtext-white m-8'
        >
            {teamTitle}
        </header>
        <div className='grid grid-cols-12 items-center'>
            <img
                className='w-2/5 sm:min-w-[3rem] sm:col-span-1 col-span-2 m-auto cursor-pointer'
                src='/AboutUs/Arrow-left.svg'
                onClick={() => carouselRef.current.scrollTo({
                    left: carouselRef.current.scrollLeft - 256,
                    behavior: 'smooth'
                })}
            />
            <div
                ref={carouselRef}
                className='overflow-x-hidden flex flex-row bg-black col-start-3 col-span-8 sm:col-span-10'
            >
                {/* {teamMembers.map((member) => <Card
                    name={member.name}
                    imageURL={member.imageURL}
                />)} */}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <img
                className='w-2/5 sm:min-w-[3rem] sm:col-span-1 col-span-2 m-auto cursor-pointer'
                src='/AboutUs/Arrow-Right.svg'
                onClick={() => carouselRef.current.scrollTo({
                    left: carouselRef.current.scrollLeft + 256,
                    behavior: 'smooth'
                })}
            />
        </div>
    </>);
};


export default function CarouselWrapper({ teamsList }) {

    return (<>
        {/* {teamsList.map((team) => <Carousel
            teamTitle={team.title}
            teamMembers={team.teamMembers}
        />)} */}
        <Carousel
            teamTitle={"Tech Team"}
            teamMembers={[]}
        />
    </>);
};
