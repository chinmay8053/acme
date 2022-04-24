import { TextField } from "@mui/material";
import React from "react";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./contact-section-2.styles.scss";
function ContactSection2() {
  return (
    <section className="contact-section-2">
      <div className="container">
        <div className="contact">
          <h2 className="title">Contact Us</h2>
          <p className="address">
            Acme Outdoors
            <br /> 123 Rainy Street <br /> Oklahoma City, OK 73129
          </p>
          <p className="contact-number">
            <b>General Inquiries:</b> (405) 555-5555
            <br />
            <b>Customer Support:</b> (405) 555-5556
          </p>
        </div>
        <div className="form">
          <h2 className="title">Contact Form</h2>
          <p className="statement">Send us a message and we'll get back to you as soon as we can!</p>
          <div className="form-input">
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              label="Name"
              variant="outlined"
            />
            <TextField
              helperText="Please enter your Email Address"
              id="demo-helper-text-aligned"
              label="Email"
              variant="outlined"
            />
            <TextField
              helperText="word between 10 t0 20"
              id="demo-helper-text-aligned"
              label="Message"
              variant="outlined"
            />
          </div>
          <div className="section-btn">
            <BootstrapButton sx={{ color: "#fff", backgroundColor: "rgb(146 17 17 / 87%)" }}>Submit</BootstrapButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection2;
