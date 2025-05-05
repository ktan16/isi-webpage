/*
  Gallery.jsx
  Gallery section featuring images of the product.
*/

import React from "react";
import "./Gallery.css";

/* 
  Tells Vite to automatically import all .jpg in gallery folder
  Keys = file paths, values = module objects containing image URLs
*/
const imageModules = import.meta.glob("../../assets/gallery/*.jpg", {
  eager: true, // Import immediately
});

/*
  Creates list of image URLs and then sort.

  images = [
    "/assets/gallery/roll_01.jpg",
    "/assets/gallery/roll_02.jpg",
    ...
    "/assets/gallery/roll_20.jpg"
  ]
*/
const images = Object.values(imageModules)
  .map((mod) => mod.default)
  .sort();

const Gallery = ({ title }) => {
  return (
    <div>
      {/* Reusable Title passed in as prop */}
      {title}

      {/* ==== Gallery Section ==== */}
      <div className="gallery">
        {/* Maps each item in images array to <img> element with src and alt */}
        {images.map((src, index) => (
          <img
            key={index} // Unique key per item
            src={src} // Image source
            alt={`Gallery image ${index + 1}`} // Alt text for accessibility
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
