import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>
        You can reach me at:{" "}
        <a href="mailto:magugukhanyisa@gmail.com">magugukhanyisa@gmail.com</a>
      </p>
      <p>
        Phone:{" "}
        <a href="tel:+2710349514">071 034 9514</a> |{" "}
        <a href="tel:+27695080798">069 508 0798</a>
      </p>
    </section>
  );
}
