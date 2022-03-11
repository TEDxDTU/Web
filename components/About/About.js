import React from 'react';
import Page from '../Universal/Page';
import AboutBanner from './AboutBanner';
import CarouselWrapper from './Carousel';
AboutBanner;

export default function About({ teamsList }) {
    return <Page
        pageTitle={"About"}
    >
        <AboutBanner />
        <CarouselWrapper teamsList={teamsList} />
    </Page>;
};
