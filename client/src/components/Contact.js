import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-boxs">
        <div className="contact-box">
          <div className="contact-icons">
            <i class="zmdi zmdi-map contact-icon"></i>
          </div>

          <div className="contact-content">
            <h5>Phone</h5>
            <p>+91 9310427982</p>
          </div>
        </div>

        <div className="contact-box">
          <div className="contact-icons">
            <i class="zmdi zmdi-map contact-icon"></i>
          </div>

          <div className="contact-content">
            <h5>Email</h5>
            <p>sarthakkumar360@gmail.com</p>
          </div>
        </div>

        <div className="contact-box">
          <div className="contact-icons">
            <i class="zmdi zmdi-map contact-icon"></i>
          </div>

          <div className="contact-content">
            <h5>Address</h5>
            <p>Najafgarh, DL, 110043</p>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <h5 className="form-title">Get in Touch</h5>
        <div className="input-boxs">
          <div className="input-box">
            <input
              type="text"
              name="name"
              className="contact-input"
              placeholder="Your name"
              id="name"
              autocomplete="off"
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              name="email"
              className="contact-input"
              placeholder="Your email"
              id="name"
              autocomplete="off"
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              name="phone-number"
              className="contact-input"
              placeholder="Your phone number"
              id="name"
              autocomplete="off"
            />
          </div>
        </div>
        <textarea name="text" id="textarea" cols="30" rows="10" placeholder="Message"></textarea>
      <button className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
