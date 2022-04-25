import React from "react";
import { useTranslation } from "react-i18next";

import "./home-section-2.styles.scss";

function HomeSection2() {
  const { t } = useTranslation();
  return (
    <section className="home-section-2">
      <div className="container">
        <div className="grid-5">
          <div className="intro">
            <span>{t("homeSection2.intro.span")}</span>
            <p>{t("homeSection2.intro.p")}</p>
          </div>
          <div className="covid">{t("homeSection2.covid")}</div>
          <div className="card-info">
            <div className="square" data-01>
              <div className="number">{t("homeSection2.card-info-1.no")}</div>
              <div className="title">{t("homeSection2.card-info-1.title")}</div>
              <div className="shape">
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
                  alt="circle"
                />
              </div>
            </div>
            <p className="message">{t("homeSection2.card-info-1.message")}</p>
          </div>

          <div className="card-info">
            <div className="square">
              <div className="number">{t("homeSection2.card-info-2.no")}</div>
              <div className="title">{t("homeSection2.card-info-2.title")}</div>
              <div className="shape">
                <img
                  data-tri
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg"
                  alt="circle"
                />
              </div>
            </div>
            <p className="message">{t("homeSection2.card-info-2.message")}</p>
          </div>

          <div className="card-info">
            <div className="square">
              <div className="number">{t("homeSection2.card-info-3.no")}</div>
              <div className="title">{t("homeSection2.card-info-3.title")}</div>
              <div className="shape">
                <img
                  data-square
                  src="	https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg"
                  alt="circle"
                />
              </div>
            </div>
            <p className="message">{t("homeSection2.card-info-3.message")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection2;
