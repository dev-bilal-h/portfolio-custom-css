"use client";

import Link from "next/link";
import Image from "next/image";
import profile from "@/assets/profile1.jpg";
import React from "react";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import "@/styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Profile Image Section */}
      <div className="profile-image-container">
        <div className="profile-image">
          <Image
            src={profile}
            alt="Bilal Hassan"
            className="profile-image-content"
            width={208}
            height={208}
            quality={100}
          />
        </div>
      </div>

      {/* Left Side Content with Text */}
      <div className="text-content">
        <h2 className="subtitle">Hello, It&apos;s Me</h2>
        <h1 className="main-title">Bilal Hassan</h1>
        <TextEffect />
        <p className="description">
          <i>
            I&apos;m a web developer with a passion for creating engaging,
            user-friendly websites. I&apos;m also studying under the Governor
            Initiative for Cloud Applied Generative AI, Web 3.0 & Metaverse.
          </i>
        </p>

        {/* Social Media Links */}
        <div className="social-links">
          <Link
            href="https://www.linkedin.com/in/bilal-hassan-webdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon linkedin">
              <FaLinkedin className="icon" />
            </div>
          </Link>
          <Link
            href="https://github.com/dev-bilal-h"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon github">
              <FaGithub className="icon" />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/bilal__aesthetics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon instagram">
              <FaInstagram className="icon" />
            </div>
          </Link>
          <Link
            href="mailto:siddiquibilal882@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon envelope">
              <FaEnvelope className="icon" />
            </div>
          </Link>
        </div>

        {/* CV Download Button */}
        <Link href="Empty" download="Empty">
          <button className="cv-button">
            DOWNLOAD CV <ArrowDownTrayIcon className="arrow-icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
