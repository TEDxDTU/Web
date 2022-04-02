import React from 'react';
import Page from "../Universal/Page";
import XBanner from './X-Banner';

export default function Theme() {
  return (<Page>
    <div className='py-4 w-[896px] mx-auto'>
      <XBanner
        position={"left"}
        imageURL={"https://media.wired.com/photos/5cd5df1f2948ca2e63b090f0/1:1/w_2217,h_2217,c_limit/01_SPoW_051119.jpg"}
        header={""}
        content={""}
        link={"/"}
      />
      <XBanner
        position={"right"}
        imageURL={"https://media.wired.com/photos/5cd5df1f2948ca2e63b090f0/1:1/w_2217,h_2217,c_limit/01_SPoW_051119.jpg"}
        header={""}
        content={""}
        link={"/"}
      />

    </div>
  </Page>);
};
