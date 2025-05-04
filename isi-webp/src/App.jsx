import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";
import About from "./components/About/About";
import Title from "./components/Title/Title";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Top />
      </Element>
      
      <div className="container">
        <Element name="about-us" className="section">
          <About title={<Title subTitle="About Us" title="who we are" />}/>
        </Element>
        <Element name="img-gallery" className="section">
          <Gallery title={<Title subTitle="Gallery" title="show me the ropes" />}/>
        </Element>
        <Element name="contact-us">
          <Contact title={<Title subTitle="Contact Us" title="get in touch" />}/>
        </Element>
      </div>
    </div>
  );
}

export default App;
