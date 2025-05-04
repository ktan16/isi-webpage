import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import "./Navbar.css";
import isi_logo from "../../assets/isi_short_logo.png";
import isi_logo_dark from "../../assets/isi_short_logo_dark.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false); // sticky state for changing nav bar color

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // event listener for scrolling
      window.scrollY > 810 ? setSticky(true) : setSticky(false); // if scroll more than 800px, dark navbar
    });
  }, []);

  return (
    <nav className={`navbar container ${sticky ? "dark-nav" : ""}`}>
      <img
        src={`${sticky ? isi_logo_dark : isi_logo}`}
        alt=""
        className="logo"
      />
      <h1>International Synthetic</h1>
      <h2>INDUSTRIES, INC.</h2>
      <ul>
        <li>
          <Link 
          to ="home" 
          smooth={true} 
          duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link 
          to ="about-us" 
          smooth={true} 
          duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link 
          to ="img-gallery" 
          smooth={true} 
          duration={500}>
            Gallery
          </Link>
        </li>

        <li>
          <Link 
          to ="contact-us" 
          smooth={true} 
          duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
