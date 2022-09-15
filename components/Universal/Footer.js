import Link from "next/link";
import React from "react";
import styles from "../../styles/Footer.module.css";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.gradient1}></div>
      <div className={styles.gradient2}></div> */}
      <div className={styles.introSection}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <img src="/LandingPage/Logo-White-Text.svg" alt="TEDxDTU Logo" />
          </div>
        </Link>
        <div className={styles.intro}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          inventore porro eius temporibus, voluptates deserunt nisi dignissimos
          veniam vitae consequatur ad tenetur rerum.
        </div>
      </div>
      <div className={styles.links}>
        <ul>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/"}>
            <li>Theme</li>
          </Link>
          <Link href={"/"}>
            <li>Events</li>
          </Link>
          <Link href={"/"}>
            <li>Partners</li>
          </Link>
          <Link href={"/"}>
            <li>About</li>
          </Link>
        </ul>
        <div className={styles.social}>
          <div className={styles.social_icon}>
            <a href="/">
              <BsFacebook className={styles.white_icon} />
            </a>
          </div>
          <div className={styles.social_icon}>
            <a href="/">
              <BsInstagram className={styles.white_icon} />
            </a>
          </div>
          <div className={styles.social_icon}>
            <a href="/">
              <BsTwitter className={styles.white_icon} />
            </a>
          </div>
          <div className={styles.social_icon}>
            <a href="/">
              <BsLinkedin className={styles.white_icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>All rights reserved. TEDxDTU @2022</div>
    </div>
  );
};

export default Footer;
