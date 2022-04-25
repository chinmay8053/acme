import React from "react";
import { useTranslation } from "react-i18next";

import "./about-section-4.styles.scss";
function AboutSection4() {
  const { t } = useTranslation();
  return (
    <section className="about-section-4">
      <div className="container">
        <div className="card">
          <div className="image-box">
            <img className="image" src={require("../../assests/jane2.png")} alt="face" />
          </div>
          <h2 className="name">John Doe</h2>
          <p className="statement">{t("aboutSection4.statement")}</p>
        </div>

        <div className="card">
          <div className="image-box">
            <img className="image" src={require("../../assests/jane1.png")} alt="face" />
          </div>
          <h2 className="name">John Doe</h2>
          <p className="statement">{t("aboutSection4.statement")}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection4;
