/*
  About.jsx 
  About section featuring descriptive text and supporting imagery.
*/

import React from "react";
import "./About.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";

const About = ({ title }) => {
  return (
    <div className="about-container">
      {/* Reusable title passed in as prop */}
      {title}

      {/* "What we do" section; img -> text */}
      <div className="about-block">
        <div className="about-img">
          <img src={about1} alt="" className="about-img-size" />
        </div>

        <div className="about-text">
          <h2>WHAT WE DO</h2>
          <h1>strength that lasts</h1>
          <p>
            We craft ropes that stand the test of time, providing unwavering
            durability and superior performance for a wide range of
            applications. From everyday use to demanding industrial
            environments, our products are engineered to deliver lasting
            strength and reliability. Serving all types of markets, we are
            dedicated to producing ropes that meet the highest standards,
            ensuring its strength can be trusted for years to come.
          </p>
        </div>
      </div>

      {/* "Why we do it" section: text -> img */}
      <div className="about-block">
        <div className="about-text">
          <h2>WHY WE DO IT</h2>
          <h1>support you can trust</h1>
          <p>
            Our mission is to provide more than just products. We aim to offer
            dependable solutions that our customers can rely on. We are driven
            by a commitment to safety, quality, and innovation, ensuring that
            every rope we create meets the unique needs of our clients. By
            supporting industries and individuals with trusted tools, we help
            build stronger connections, inspire confidence, and contribute to
            progress in every project.
          </p>
        </div>

        <div className="about-img">
          <img src={about2} alt="" className="about-img-size" />
        </div>
      </div>
    </div>
  );
};

export default About;
