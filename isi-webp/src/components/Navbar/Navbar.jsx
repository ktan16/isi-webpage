import React from "react";
import "./Navbar.css";
import isi_logo from "../../assets/isi_short_logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={isi_logo} alt="" className="logo" />

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
