import React from "react";
import { chatWarning } from "../../assests/chat-warning";
import { Message } from "../../assests/message";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./contact-section-1.styles.scss";

function ContactSection1() {
  return (
    <section className="contact-section-1">
      <div className="wrapper">
        <div className="postion">
          <div className="container">
            <h1 className="title">Contact Acme Outdoors</h1>
            <div className="boxes">
              <div className="contact-box">
                <div className="icons">{Message}</div>
                <h2 className="subtitle">Contact Us</h2>
                <p className="statement">
                  Just want to say hi? We'd love to hear from you. We love our customers and community!
                </p>
                <div className="section-btn">
                  <BootstrapButton
                    sx={{ backgroundColor: "rgb(146 17 17 / 97%)", color: "#fff", padding: "10px 18px" }}
                  >
                    Send Us A Message
                  </BootstrapButton>
                </div>
              </div>
              <div className="contact-box">
                <div className="icons">{chatWarning}</div>
                <h2 className="subtitle">Get Support</h2>
                <p className="statement">
                  Have an issue with an order or with a product you purchased from us? Fill out our support form.
                </p>
                <div className="section-btn">
                  <BootstrapButton
                    sx={{ backgroundColor: "rgb(146 17 17 / 97%)", color: "#fff", padding: "10px 18px" }}
                  >
                    Contact Support
                  </BootstrapButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-image"></div>
      </div>
    </section>
  );
}

export default ContactSection1;
