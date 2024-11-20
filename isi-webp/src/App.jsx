import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";
import About from "./components/About/About";
import Title from "./components/Title/Title";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      <Top />
      <div className="container">
        <Title subTitle="About Us" title="who we are" />
        <About />
        <Title subTitle="Gallery" title="show me the ropes" />
        <Gallery />
        <Title subTitle="Contact Us" title="get in touch" />
      </div>
    </div>
  );
}

export default App;
