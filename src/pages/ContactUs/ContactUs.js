import React, { useState } from "react";
import { Header } from "../../Header";
import "./ContactUs.css";
import telephoneIcon from "../../icons/telephone-svgrepo-com.svg";
import emailIcon from "../../icons/email-1-svgrepo-com.svg";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove all characters except digits and +
      let cleaned = value.replace(/[^0-9+]/g, "");

      // Ensure + is only at the start
      if (cleaned.includes("+")) {
        cleaned = "+" + cleaned.replace(/\+/g, ""); // Keep only one + at the start
      }

      setFormData((prev) => ({ ...prev, [name]: cleaned }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in the required fields.");
      return;
    }

    emailjs
      .send(
        "service_n6edujk", // service ID
        "template_cdvll1k", // template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "c4MSVbZuBc6653KeV" // Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSubmitted(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email failed:", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <Header />
      <div className="contact-content ">
        <div className="contact-text-section contact-slide-in ">
          <h2>Contact Us</h2>
          <p>
            Feel free to use the form or send us an email. You can also give us
            a call.
          </p>
          <div className="icon-div">
            <img src={telephoneIcon} alt="telephone"></img>
            <span>+234 802 930 0776</span>
          </div>
          <div className="icon-div">
            <img src={emailIcon} alt="email"></img>
            <span>Feempipo@gmail.com</span>
          </div>
        </div>
        <div className="contact-us-form contact-slide-in ">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            {/* First Name */}
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form-input"
              />
              {/* Last Name */}
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <label>Email</label>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <label>Phone number</label>
            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                inputMode="tel"
                title="Only numbers and an optional + are allowed"
                required
              />
            </div>

            <label>Message</label>
            <div className="form-row">
              <textarea
                name="message"
                placeholder="Type your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
            {submitted && (
              <p className="success-msg">Thanks! We’ll be in touch soon.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
