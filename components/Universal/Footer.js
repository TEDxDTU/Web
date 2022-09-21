import Link from "next/link";
import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-68 lg:h-64 bottom-0 left-0 right-0 text-white bg-red-600 bg-no-repeat bg-center bg-cover flex flex-col text-base font-sans md:justify-between relative tracking-widest">
      <div className="flex flex-col md:w-1/2 px-10 md:px-16 mt-6 md:mt-8 text-sm">
        <Link href={"/"}>
          <div className="w-40 mb-4 cursor-pointer drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)] mx-auto md:mx-0">
            <img src="/LandingPage/Logo-White-Text.svg" alt="TEDxDTU Logo" />
          </div>
        </Link>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          inventore porro eius temporibus, voluptates deserunt nisi dignissimos
          veniam vitae consequatur ad tenetur rerum.
        </div>
      </div>
      <div className="md:w-40 md:absolute mt-3 md:mt-0 flex flex-col md:right-16 md:mt-8 justify-center items-center md:justify-end md:content-end md:items-end md:justify-items-end md:text-right tracking-widest text-lg">
        <ul className="flex flex-row md:flex-col  justify-around w-full ">
          <Link href={"/"}>
            <li className="cursor-pointer ">Home</li>
          </Link>
          <Link href={"/"}>
            <li className="cursor-pointer">Events</li>
          </Link>
          <Link href={"/"}>
            <li className="cursor-pointer">Partners</li>
          </Link>
          <Link href={"/"}>
            <li className="cursor-pointer">About</li>
          </Link>
        </ul>
        <div className="flex flex-row mt-3 md:mt-4">
          {/* <div className="ml-4">
            <a href="/">
              <BsFacebook className="text-white w-4 h-4 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
            </a>
          </div> */}
          <div className="ml-4">
            <a href="https://www.instagram.com/tedxdtu/" target="_blank">
              <BsInstagram className="text-white w-4 h-4 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
            </a>
          </div>
          <div className="ml-4">
            <a href="https://www.linkedin.com/company/tedxdtu/" target="_blank">
              <BsLinkedin className="text-white w-4 h-4 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
            </a>
          </div>
          <div className="ml-4">
            <a href="https://mobile.twitter.com/tedxdtu" target="_blank">
              <BsTwitter className="text-white w-4 h-4 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center text-center m-0 mt-4 mb-2">
        All rights reserved. TEDxDTU @2022
      </div>
    </div>
  );
};

export default Footer;