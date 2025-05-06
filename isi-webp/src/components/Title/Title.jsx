/*
  File: Title.jsx
  Description: Reusable title to indicate sections.
  Author: Kendrick Tan
*/
import React from "react";
import "./Title.css";

const Title = ({ heading, subHeading }) => {
  return (
    <div className="title">
      <p>{heading}</p>
      <h2>{subHeading}</h2>
    </div>
  );
};

export default Title;
