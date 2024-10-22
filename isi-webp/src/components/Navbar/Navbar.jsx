import React from "react";
import "./Navbar.css";
import isi_logo from "../../assets/isi_short_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <img src={isi_logo} alt="" className="logo" />
      <h1>International Synthetic</h1>
      <h2>INDUSTRIES, INC.</h2>
      <ul>
        <li>Main</li>

        <li>About</li>

        <li>Gallery</li>

        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
