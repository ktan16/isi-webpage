/*
  File: Navbar.jsx
  Description: Sticky navigation bar with dynamic light/dark color change and react-scroll navigation.
  Author: Kendrick Tan
*/

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

// Logo variations, changes based on scroll
import isi_logo from "../../assets/isi_short_logo.png";
import isi_logo_dark from "../../assets/isi_short_logo_dark.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  // useState for if navbar should have dark bg
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Scroll function that enables dark navbar feature
    const handleScroll = () => {
      // scrollY > 100% of viewport height to trigger dark navbar
      const triggerPoint = window.innerHeight;
      setDark(window.scrollY > triggerPoint);
    };

    // Create and Clean up scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useState for if screen is small enough for menu mode
  const [mobileMenu, setMobileMenu] = useState(false);
  // Function to toggle between menu modes
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    // Navbar container with conditional dark theme
    <nav className={`navbar container ${dark ? "dark-nav" : ""}`}>
      <Link to="home" smooth={true} duration={500} className="logo-container">
        <img
          src={`${dark ? isi_logo_dark : isi_logo}`}
          alt=""
          className="logo"
        />
        <div className="logo-text">
          <h1>International Synthetic</h1>
          <h2>INDUSTRIES, INC.</h2>
        </div>
      </Link>

      {/* ==== Navigation links to main sections ==== */}
      <ul className={`navbar-menu ${!mobileMenu ? "hide-mobile-menu" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about-us" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to="img-gallery" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to="contact-us" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
