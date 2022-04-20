import { Button } from "@mui/material";
import React from "react";

import "./section-1.styles.scss";

function Section1() {
  return (
    <section className="section-1">
      <div className="section-hero">
        <div className="section-intro">
          <h1>Serving you since 1989.</h1>
          <p>Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
          <div className="section-btn">
            <Button
              sx={{
                color: "white",
                border: "1px solid black",
                "&:hover": {
                  border: "1px solid black",
                  background: "black",
                },
              }}
              variant="outlined"
            >
              Shop Cloth
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
