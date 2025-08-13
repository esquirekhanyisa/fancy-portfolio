import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now, just simulate sending
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent! Thanks for reaching out.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  }

  return (
    <section id="contact" className="contact-form-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message here..."
          />
        </label>
        <button type="submit">Send</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
}
