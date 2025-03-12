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
            <br />
            <span className="value">isi.pcc_localsale@yahoo.com</span>
          </li>

          <li>
            <span className="label">Phone Number:</span>
            <br />
            <span className="value">+63 917 629 7708</span>
          </li>

          <li>
            <span className="label">Address</span>
            <br />
            <span className="value">
              389 Elpidio Quirino Highway, Barangay Talipapa, Novaliches, Quezon
              City, Philippines
            </span>
          </li>
        </ul>
      </div>

      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
