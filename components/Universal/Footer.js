import Link from "next/link";
import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="container">
            <div className="gradient1"></div>
            <div className="gradient2"></div>
            <div className="introSection">
                <Link href="/">
                    <div className="logo">
                        <img src="/LandingPage/Logo-White-Text.svg" alt="TEDxDTU Logo"/>
                    </div>
                </Link>
                <div className="intro">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                    inventore porro eius temporibus, voluptates deserunt nisi dignissimos
                    veniam vitae consequatur ad tenetur rerum.
                </div>
            </div>
            <div className="links">
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/">
                        <li>Theme</li>
                    </Link>
                    <Link href="/">
                        <li>Events</li>
                    </Link>
                    <Link href="/">
                        <li>Partners</li>
                    </Link>
                    <Link href="/">
                        <li>About</li>
                    </Link>
                </ul>
                <div className="social">
                    <div className="social_icon">
                        <a href="/">
                            <BsFacebook className="white_icon" />
                        </a>
                    </div>
                    <div className="social_icon">
                        <a href="/">
                            <BsInstagram className="white_icon" />
                        </a>
                    </div>
                    <div className="social_icon">
                        <a href="/">
                            <BsTwitter className="white_icon" />
                        </a>
                    </div>
                    <div className="social_icon">
                        <a href="/">
                            <BsLinkedin className="white_icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">All rights reserved. TEDxDTU @2022</div>
        </div>
    );
};

export default Footer;