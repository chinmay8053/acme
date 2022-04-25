import React from "react";
import { useTranslation } from "react-i18next";
import "./donations-section-1.styles.scss";

function DonationSection1() {
  const { t } = useTranslation();
  return (
    <section className="donate-section-1">
      <div className="bg-image">
        <div className="container">
          <div className="box">
            <h1 className="title">{t("donateSection1.title")}</h1>
            <span className="sub-title">{t("donateSection1.sub-title")}</span>
            <p className="statement">{t("donateSection1.statement")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationSection1;
