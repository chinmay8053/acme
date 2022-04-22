import React from "react";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./home-section-3.styles.scss";
function HomeSection3() {
  return (
    <section className="home-section-3">
      <div className="bg-image">
        <div className="container">
          <div className="statement">
            <div className="title">How we're keeping you safe during COVID-19</div>
            <div className="instruction">
              As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team
              members.
            </div>
            <div className="statement-btn">
              <BootstrapButton
                sx={{
                  color: "#fff",
                  border: "none",
                  background: "#000",
                  fontSize: "15px",
                  fontFamily: "700",
                  "&:hover": {
                    fontFamily: "700",
                    color: "#ccc",
                    border: "none",
                    background: "#921111",
                  },
                }}
                variant="outlined"
              >
                Read our Statement
              </BootstrapButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection3;
