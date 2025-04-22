import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Inquire using our contact form, or use our contact information below.
          Your feedback, questions, and suggestions are essential to our ability
          to provide exceptional service.
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
              389 Elpidio Quirino Highway, Barangay Talipapa, Novaliches, Quezon
              City, Philippines
            </span>
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>

        <span></span>
      </div>
    </div>
  );
};

export default Contact;
