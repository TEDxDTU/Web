import React from "react";
import { useEffect } from "react";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactContent from "./ContactContent";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-3 w-full py-16">
      <div className="col-span-2">

        <ContactContent
          contents={[
            [<FontAwesomeIcon icon={faPhone} />, "+91 9717022815"],
            [<FontAwesomeIcon icon={faEnvelope} />, "tedx@dtu.ac.in"],
          ]}
        />
        {/* <div className="mx-auto mb-16 lg:mb-32 w-3/4 " data-aos="fade-up">
          <p className="bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify flex">
            <div className="h-4 w-4 mt-1.5">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            &nbsp;&nbsp;+91 99xxxxxxxx
          </p>
        </div>
        <div className="mx-auto mb-16 lg:mb-32 w-3/4 h-fit" data-aos="fade-up">
          <p className="bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify flex">
            <div className="h-4 w-4 mt-1.5">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            &nbsp;&nbsp;tedxdtu@mail
          </p>
        </div> */}
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
    </div>
  );
};

export default AboutBanner;
