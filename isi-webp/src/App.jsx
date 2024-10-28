import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";
import About from "./components/About/About";
import Title from "./components/Title/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Top />
      <div className="container">
        <Title subTitle="About Us" title="Who We Are" />
        <About />
      </div>
    </div>
  );
}

export default App;
