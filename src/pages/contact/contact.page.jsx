import React from "react";
import ContactSection1 from "../../components/contact/contact-section-1.component";
import ContactSection2 from "../../components/contact/contact-section-2.component";
import "./contact.styles.scss";
function Contact() {
  return (
    <div className="contact-section">
      <ContactSection1 />
      <ContactSection2 />
    </div>
  );
}

export default Contact;
