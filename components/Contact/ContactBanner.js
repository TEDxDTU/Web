import ContactContent from "./ContactContent";
import React from "react";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { IoCall } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-3 w-full py-16">
      <div className="col-span-2">
        <ContactContent
          title={"Contact Us"}
          contents={[
            [<IoCall />, "+91 99xxxxxxxx"],
            [<FiMail />, "tedxdtu@mail"],
          ]}
        />
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
