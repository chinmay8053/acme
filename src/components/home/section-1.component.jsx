import React from "react";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./section-1.styles.scss";

function HomeSection1() {
  return (
    <section className="section-1">
      <div className="section-hero">
        <div className="section-intro">
          <h1>Serving you since 1989.</h1>
          <p>Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
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
    </section>
  );
}

export default HomeSection1;
