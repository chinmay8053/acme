import React from "react";
import { useTranslation } from "react-i18next";

import "./about-section-3.styles.scss";

function AboutSection3() {
  const { t } = useTranslation();
  return (
    <section className="about-section-3">
      <div className="container">
        <div className="hover-card">
          <div className="image-box">
            <div className="image"></div>
          </div>
        </div>
        <div className="info-card">
          <div className="box">
            <h2 className="title">{t("aboutSection3.title")}</h2>
            <div className="statement">
              <p>{t("aboutSection3.p1")}</p>
              <p>{t("aboutSection3.p2")}</p>
              <p>{t("aboutSection3.p3")}</p>
              <p>{t("aboutSection3.p4")}</p>
              <p>{t("aboutSection3.p5")}</p>
              <p>{t("aboutSection3.p6")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection3;
