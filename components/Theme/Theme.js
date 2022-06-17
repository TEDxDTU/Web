import React from 'react';
import Page from "../Universal/Page";
import XBanner from './X-Banner';

export default function Theme() {
  return (<Page
    pageTitle={"Theme"}
  >
    <div className='py-4 w-full max-w-[896px] mx-auto'>
      <XBanner
        position={"left"}
        imageURL={"https://img.freepik.com/free-vector/white-elegant-texture-background-style_23-2148432200.jpg?w=1000"}
        header={"Sample Heading"}
        content={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptate eum, iusto quae debitis tempora. Ipsum quibusdam, distinctio velit beatae voluptatem, amet est nesciunt molestiae accusantium pariatur iste, ducimus nihil?"}
        link={"/"}
      />
      <XBanner
        position={"right"}
        imageURL={"https://img.freepik.com/free-vector/white-elegant-texture-background-style_23-2148432200.jpg?w=1000"}
        header={"Sample Heading"}
        content={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptate eum, iusto quae debitis tempora. Ipsum quibusdam, distinctio velit beatae voluptatem, amet est nesciunt molestiae accusantium pariatur iste, ducimus nihil?"}
        link={"/"}
      />

    </div>
  </Page>);
};
