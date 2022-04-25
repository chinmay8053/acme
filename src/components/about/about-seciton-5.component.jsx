import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./about-section-5.styles.scss";
function AboutSection5() {
  const { t } = useTranslation();
  return (
    <section className="about-seciton-5">
      <div className="bg-image">
        <div className="container">
          <div className="box">
            <h1 className="title">{t("aboutSection5.title")}</h1>
            <p className="statement">{t("aboutSection5.statement")}</p>
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
