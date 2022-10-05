import React from "react";
import { useEffect } from "react";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactContent from "./ContactContent";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const AboutBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-16">
      <ContactContent
        contents={[
          [<FontAwesomeIcon icon={faLocationDot} />, "DTU, Delhi"],
          [<FontAwesomeIcon icon={faPhone} />, "+91 9717022815"],
          [<FontAwesomeIcon icon={faEnvelope} />, "tedx@dtu.ac.in"],
        ]}
      />

      <div className="flex flex-row">
        <div className="mx-8">
          <a href="https://www.instagram.com/tedxdtu/" target="_blank">
            <BsInstagram className="text-white w-8 h-8" />
          </a>
        </div>
        <div className="mx-8">
          <a href="https://www.linkedin.com/company/tedxdtu/" target="_blank">
            <BsLinkedin className="text-white w-8 h-8" />
          </a>
        </div>
        <div className="mx-8">
          <a href="https://mobile.twitter.com/tedxdtu" target="_blank">
            <BsTwitter className="text-white w-8 h-8 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
