// App.jsx
// Main application. Uses react-scroll to navigate.

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Title from "./components/Title/Title";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import { Element } from "react-scroll"; // Enables smooth scrolling

function App() {
  return (
    <div>
      {/* ==== Sticky nav bar ==== */}
      <Navbar />

      {/* ==== Hero Section ==== */}
      <Element name="home">
        <Hero />
      </Element>

      {/* ==== Main Component Container ==== */}
      {/* Each section has reusable title */}
      <div className="container">
        {/* ==== About us section ==== */}
        <Element name="about-us" className="section">
          <About title={<Title subTitle="About Us" title="who we are" />} />
        </Element>

        {/* ==== Image gallery for product ==== */}
        <Element name="img-gallery" className="section">
          <Gallery
            title={<Title subTitle="Gallery" title="show me the ropes" />}
          />
        </Element>

        {/* ==== Contact section with form ==== */}
        <Element name="contact-us">
          <Contact
            title={<Title subTitle="Contact Us" title="get in touch" />}
          />
        </Element>
      </div>
    </div>
  );
}

export default App;
