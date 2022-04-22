import React from "react";
import { Link } from "react-router-dom";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./about-section-5.styles.scss";
function AboutSection5() {
  return (
    <section className="about-seciton-5">
      <div className="bg-image">
        <div className="container">
          <div className="box">
            <h1 className="title">Need Help?</h1>
            <p className="statement">
              Need help or assistance? Our team is standing by to make sure you get the help you need. Whether you need
              to adjust an order or delivery details, we're ready to help!
            </p>
            <div className="seciton-btn">
              <Link to={"/about"}>
                <BootstrapButton>Contact Support</BootstrapButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection5;
