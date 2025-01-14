"use client";

import Link from "next/link";
import Logo from "@/assets/LOGO.png";
import { useState } from "react";
import Image from "next/image";
import "@/styles/Header.css";

export default function Header() {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      {/* Logo section */}
      <div className="logo-container">
        <Image src={Logo} alt="Logo" height={50} width={50} />
        <h1 className="logo-title">
          Bilal <span className="highlight">Hassan</span>
        </h1>
      </div>

      {/* Desktop navigation menu */}
      <nav className="desktop-menu">
        <Link href="/" className="link-hover">
          Home
        </Link>
        <Link href="/about" className="link-hover">
          About
        </Link>
        <Link href="/skills" className="link-hover">
          Skills
        </Link>
        <Link href="/education" className="link-hover">
          Education
        </Link>
        <Link href="/services" className="link-hover">
          Services
        </Link>
        <Link href="/contact" className="link-hover">
          Contact
        </Link>
      </nav>

      {/* Hire Me button */}
      <div className="hire-button-container">
        <a href="mailto:siddiquibilal882@gmail.com" className="hire-button">
          HIRE ME
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="menu-button" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Close button for mobile menu */}
        <div className="close-button" onClick={toggleMenu}>
          ×
        </div>

        {/* Mobile logo */}
        <div className="mobile-logo">
          <Image src={Logo} alt="Logo" height={40} width={40} />
          <h1 className="logo-title">
            Bilal <span className="highlight">Hassan</span>
          </h1>
        </div>

        {/* Mobile navigation links */}
        <nav className="mobile-links">
          <Link href="/" onClick={toggleMenu} className="link-hover">
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu} className="link-hover">
            About
          </Link>
          <Link href="/skills" onClick={toggleMenu} className="link-hover">
            Skills
          </Link>
          <Link href="/education" onClick={toggleMenu} className="link-hover">
            Education
          </Link>
          <Link href="/services" onClick={toggleMenu} className="link-hover">
            Services
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="link-hover">
            Contact
          </Link>
        </nav>

        {/* Hire Me button in mobile menu */}
        <div className="mobile-hire-button">
          <a href="mailto:siddiquibilal882@gmail.com" className="hire-button">
            HIRE ME
          </a>
        </div>
      </div>
    </header>
  );
}
