/* 
  File: Gallery.jsx
  Description: Infinite photo gallery section with zoom and pause on hover.
  Author: Kendrick Tan
*/
import React, { useEffect } from "react";
import "./Gallery.css";

// Dynamically import all roll_*.jpg images
const rollImages = Object.values(
  import.meta.glob("../../assets/gallery/roll_*.jpg", { eager: true })
).map((mod) => mod.default);

// Shuffle images for random order
const shuffled = [...rollImages].sort(() => Math.random() - 0.5);

// Split into two non-overlapping halves
const topRow = shuffled.slice(0, 10);
const bottomRow = shuffled.slice(10, 20);

const Gallery = ({ title }) => {
  // Allows data animation if user prefers
  useEffect(() => {
    // If user's browser does not prefer reduced motion, can animate
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Select all .gallery-scroller elements in DOM
      const scrollers = document.querySelectorAll(".gallery-scroller");
      scrollers.forEach((scroller) => {
        // Add data-animated = "true" to each element
        scroller.setAttribute("data-animated", true);

        // Find .scroller-inner elements in DOM
        const scrollerInner = scroller.querySelector(".scroller-inner");

        // Duplicate images in inner scroller for seamless infinite scroll
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true); // Duplicate image
          duplicatedItem.setAttribute("aria-hidden", true); // Hide from screen readers
          scrollerInner.appendChild(duplicatedItem); // Add duplicate to the end
        });
      });
    }
  }, []);

  return (
    <div>
      {/* Reusable Title passed in as prop */}
      {title}

      <div className="gallery-container">
        {/* Top row: left scrolling */}
        <div className="gallery-scroller" data-direction="left">
          <div className="img-list scroller-inner">
            {topRow.map((src, i) => (
              <img key={`top-${i}`} src={src} alt={`Top Roll ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* Bottom row: right scrolling */}
        <div className="gallery-scroller" data-direction="right">
          <div className="img-list scroller-inner">
            {bottomRow.map((src, i) => (
              <img key={`bottom-${i}`} src={src} alt={`Bottom Roll ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
