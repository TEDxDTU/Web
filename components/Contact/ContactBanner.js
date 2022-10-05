import React from "react";
import { useEffect } from "react";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
// import { IoCall } from "react-icons/io";
// import { FiMail } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-3 w-full py-16">
      <div className="col-span-2">
        <div className="mx-auto mb-16 lg:mb-32 w-3/4 h-fit" data-aos="fade-up">
          {/* <div className="icon"><IoCall /></div> */}
          <p className="bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify">
            +91 99xxxxxxxx
          </p>
        </div>
        <div className="mx-auto mb-16 lg:mb-32 w-3/4 h-fit" data-aos="fade-up">
          {/* <div className="icon"><FiMail /></div> */}
          <p className="bg-[rgba(100,100,100,0.3)] rounded p-4 my-4 text-xl text-justify">
            tedxdtu@mail
          </p>
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
    </div>
  );
};

export default AboutBanner;
