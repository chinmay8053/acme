import React from "react";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./about-section-1.styles.scss";
function AboutSection1() {
  return (
    <section className="about-section-1">
      <div className="bg-image">
        <div className="container">
          <div className="box">
            <h1 className="title">Your Adventure Awaits</h1>
            <p className="extra">
              Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of
              gear that will make your next adventure complete.
            </p>
            <div className="section-btn">
              <BootstrapButton
                sx={{
                  color: "#ddd",
                  border: "1px solid #ddd",
                  fontWeight: "700",
                  "&:hover": {
                    color: "#000",
                    border: "1px solid #ddd",
                    background: "#ddd",
                  },
                }}
                variant="outlined"
              >
                Shop Cloth
              </BootstrapButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection1;
