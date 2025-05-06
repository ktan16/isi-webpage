/* 
  File: Contact.jsx
  Description: Contact Us section with contact info and Formspree form submission.
  Author: Kendrick Tan
*/

import React from "react";
import "./Contact.css";

const Contact = ({ title }) => {
  return (
    <div>
      {/* Reusable Title passed in as prop */}
      {title}

      <div className="contact">
        {/* ===== Contact Information Column ==== */}
        <div className="contact-col">
          <h3>Send us a message</h3>
          <p>
            Inquire using our contact form, or use our contact information
            below. Your feedback, questions, and suggestions are essential to
            our ability to provide exceptional service.
          </p>

          <ul>
            <li>
              <span className="label">Email:</span>
              <span className="value">isi.pcc_localsale@yahoo.com</span>
            </li>

            <li>
              <span className="label">Phone Number:</span>
              <span className="value">+63 917 629 7708</span>
            </li>

            <li>
              <span className="label">Address:</span>
              <span className="value">
                389 Elpidio Quirino Highway, Barangay Talipapa, Novaliches,
                Quezon City, Philippines
              </span>
            </li>
          </ul>
        </div>

        {/* ==== Contact form column ==== */}
        <div className="contact-col">
          {/* Form submits to Formspree API to handle backend for client messages */}
          <form action="https://formspree.io/f/xgvkavkb" method="POST">
            <label>Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              required
            />

            <label>Message</label>
            <textarea
              name="Message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
