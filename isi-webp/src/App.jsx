/*
  File: App.jsx
  Description: Main application. Uses react-scroll to navigate.
  Author: Kendrick Tan
*/

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
          <About title={<Title heading="About Us" subHeading="who we are" />} />
        </Element>

        {/* ==== Image gallery for product ==== */}
        <Element name="img-gallery" className="section">
          <Gallery
            title={<Title heading="Gallery" subHeading="show me the ropes" />}
          />
        </Element>

        {/* ==== Contact section with form ==== */}
        <Element name="contact-us" className="section">
          <Contact
            title={<Title heading="Contact Us" subHeading="get in touch" />}
          />
        </Element>
      </div>
    </div>
  );
}

export default App;
