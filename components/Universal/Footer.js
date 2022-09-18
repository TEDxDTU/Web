import Link from "next/link";
import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-64 bottom-0 left-0 right-0 text-white bg-red-600 bg-no-repeat bg-center bg-cover flex flex-col text-base font-sans justify-between relative tracking-widest">
      <div className="flex flex-col w-1/4 absolute left-16 top-8 text-sm">
        <Link href={"/"}>
          <div className="w-40 mb-4  cursor-pointer drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]">
            <img src="/LandingPage/Logo-White-Text.svg" alt="TEDxDTU Logo" />
          </div>
        </Link>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          inventore porro eius temporibus, voluptates deserunt nisi dignissimos
          veniam vitae consequatur ad tenetur rerum.
        </div>
      </div>
      <div className="w-40 absolute flex flex-col right-16 top-8 justify-end content-end items-end justify-items-end text-right tracking-widest text-lg">
        <ul>
          <Link href={"/"}>
            <li className="cursor-pointer">Home</li>
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
        <div className="flex flex-row mt-4">
          <div className="ml-4">
            <a href="/">
              <BsFacebook className="text-white w-4 h-4 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
            </a>
          </div>
          <div className="ml-4">
            <a href="/">
              <BsInstagram className="text-white w-4 h-4 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
            </a>
          </div>
          <div className="ml-4">
            <a href="/">
              <BsTwitter className="text-white w-4 h-4 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
            </a>
          </div>
          <div className="ml-4">
            <a href="/">
              <BsLinkedin className="text-white w-4 h-4 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center absolute text-center bottom-4 m-0">
        All rights reserved. TEDxDTU @2022
      </div>
    </div>
  );
};
