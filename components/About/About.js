import React from 'react';
import Page from '../Universal/Page';
import CarouselWrapper from './Carousel';

import Speaker from './Speaker';

export default function About() {
  return <Page
    pageTitle={"About"}
  >
    <Speaker />
    <CarouselWrapper />
  </Page>;
};
