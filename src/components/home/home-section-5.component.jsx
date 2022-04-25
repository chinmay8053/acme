import React from "react";
import { useTranslation } from "react-i18next";
import "./home-section-5.styles.scss";
function HomeSection5() {
  const { t } = useTranslation();
  return (
    <section className="home-section-5">
      <div className="container">
        {/* ---------------------------hover-------------- */}
        <div className="hover-card">
          <div className="bg-image"></div>
        </div>
        {/* ---------------------------hover-------------- */}
        <div className="covid-box">
          <div className="box">
            <div className="title">{t("homeSection5.title")}</div>
            <div className="instruction">
              <p>{t("homeSection5.p1")}</p>
              <p>{t("homeSection5.p2")}</p>
              <p>{t("homeSection5.p3")}</p>
              <hr />
              <p className="names">Jane & John Doe Acme Outdoors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection5;
