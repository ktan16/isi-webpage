import React from "react";
import "./About.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";

const About = ( {title} ) => {
  return (
    <div className="about">
      {title}
      <div className="about-what">
        <div className="about-what-left">
          <img src={about1} alt="" className="about-what-img" />
        </div>

        <div className="about-what-right">
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

      <div className="about-why">
        <div className="about-why-left">
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

        <div className="about-why-right">
          <img src={about2} alt="" className="about-why-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
