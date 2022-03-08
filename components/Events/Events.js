import React, { useEffect, useState } from 'react';
import Page from '../Universal/Page';
import EventSection from './EventSection';

const Events=()=> {
    const url = '/api/events?eventType=past&&sortOrder=desc';
    const [data,setData]=useState(null);
    useEffect(()=>{
      fetch(url)
      .then ((response)=>response.json())
      .then((data)=>setData(data)); 
    },[]);  

return <Page
    pageTitle={"Events"}
  >
    {data?.map((item,key)=>
      <EventSection id={key} 
      {...item}/>
    )}
  </Page>;
};
export default Events;