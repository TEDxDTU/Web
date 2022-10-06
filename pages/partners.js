import React from 'react';
import Landing from '../components/Partners/Landing';
import Page from '../components/Universal/Page';
export default function Partner() {
  return (<Page pageTitle={"Partners"}>
    <header
      className='text-center text-6xl py-8 text-black text-stroke-thin-red font-bold '
    >Our Partners
    </header>
    <Landing />
  </Page>
  );
}