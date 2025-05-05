// Gallery.jsx
// Gallery section featuring images of the product

import React from "react";
import "./Gallery.css";
import roll1 from "../../assets/gallery/roll_1.jpg";
import roll2 from "../../assets/gallery/roll_2.jpg";
import roll3 from "../../assets/gallery/roll_3.jpg";
import roll4 from "../../assets/gallery/roll_4.jpg";
import roll5 from "../../assets/gallery/roll_5.jpg";
import roll6 from "../../assets/gallery/roll_6.jpg";
import roll7 from "../../assets/gallery/roll_7.jpg";
import roll8 from "../../assets/gallery/roll_8.jpg";
import roll9 from "../../assets/gallery/roll_9.jpg";
import roll10 from "../../assets/gallery/roll_10.jpg";
import roll11 from "../../assets/gallery/roll_11.jpg";
import roll12 from "../../assets/gallery/roll_12.jpg";
import roll13 from "../../assets/gallery/roll_13.jpg";
import roll14 from "../../assets/gallery/roll_14.jpg";
import roll15 from "../../assets/gallery/roll_15.jpg";
import roll16 from "../../assets/gallery/roll_16.jpg";
import roll17 from "../../assets/gallery/roll_17.jpg";
import roll18 from "../../assets/gallery/roll_18.jpg";
import roll19 from "../../assets/gallery/roll_19.jpg";
import roll20 from "../../assets/gallery/roll_20.jpg";

const Gallery = ({ title }) => {
  return (
    <div>
      {title}
      <div className="gallery">
        <img src={roll1} alt="" />
        <img src={roll2} alt="" />
        <img src={roll3} alt="" />
        <img src={roll4} alt="" />
        <img src={roll5} alt="" />
        <img src={roll6} alt="" />
        <img src={roll7} alt="" />
        <img src={roll8} alt="" />
        <img src={roll9} alt="" />
        <img src={roll10} alt="" />
        <img src={roll11} alt="" />
        <img src={roll12} alt="" />
        <img src={roll13} alt="" />
        <img src={roll14} alt="" />
        <img src={roll15} alt="" />
        <img src={roll16} alt="" />
        <img src={roll17} alt="" />
        <img src={roll18} alt="" />
        <img src={roll19} alt="" />
        <img src={roll20} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
