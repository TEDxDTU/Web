import React from "react";
import Page from "../Universal/Page";
import BsInstagram from "react-icons/bs";
import BsTwitter from "react-icons/bs";
import BsLinkedin from "react-icons/bs";
import IoCall from "react-icons/io";
import FiMail from "react-icons/fi";

export default function Contact() {
  return (
    <Page pageTitle={"Contact"}>
      <header className="text-center text-6xl py-8 text-black text-stroke-thin-red font-bold ">
        Contact Us
      </header>
      <div className="flex flex-col justify-center items-center w-full py-16">
        <div className="mx-auto mb-16 lg:mb-32 w-3/4 h-fit">
          <IoCall />
          <p className="bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify">
            +91 99xxxxxxxx
          </p>
        </div>
        <div className="mx-auto mb-16 lg:mb-32 w-3/4 h-fit">
          <FiMail />
          <p className="bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify"></p>
        </div>
        <div className="flex flex-row">
          <div className="ml-4">
            <a href="https://www.instagram.com/tedxdtu/" target="_blank">
              <BsInstagram className="text-white w-8 h-8" />
            </a>
          </div>
          <div className="ml-4">
            <a href="https://www.linkedin.com/company/tedxdtu/" target="_blank">
              <BsLinkedin className="text-white w-8 h-8" />
            </a>
          </div>
          <div className="ml-4">
            <a href="https://mobile.twitter.com/tedxdtu" target="_blank">
              <BsTwitter className="text-white w-8 h-8 " />
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
}
