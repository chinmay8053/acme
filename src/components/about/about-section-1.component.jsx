import React from "react";
import { useTranslation } from "react-i18next";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./about-section-1.styles.scss";
function AboutSection1() {
  const { t } = useTranslation();

  return (
    <section className="about-section-1">
      <div className="bg-image">
        <div className="container">
          <div className="box">
            <h1 className="title">{t("aboutSection1.title")}</h1>
            <p className="extra">{t("aboutSection1.Statement")}</p>
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
