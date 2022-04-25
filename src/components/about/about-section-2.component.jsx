import React from "react";
import { useTranslation } from "react-i18next";
import "./about-section-2.styles.scss";

function AboutSection2() {
  const { t } = useTranslation();

  return (
    <section className="about-section-2">
      <div className="container">
        <div className="intro">
          <span className="ask">{t("aboutSection2.ask")}</span>
          <h1 className="intro-title">{t("aboutSection2.intro-title")}</h1>
          <p className="intro-info">{t("aboutSection2.intro-info")}</p>
        </div>
        <div className="services">
          <div className="service">
            <div className="service-icon">
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84b9ccd071025d67c7e431_verified.svg"
                alt="Lifetime Warranty"
              />
            </div>
            <h2 className="service-title">{t("aboutSection2.service-title-1")}</h2>
            <p className="service-info">{t("aboutSection2.service-info")}</p>
          </div>
          <div className="service">
            <div className="service-icon">
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba18359d4c7fc8ba04d2_cart.svg"
                alt="Shopping Experience"
              />
            </div>
            <h2 className="service-title">{t("aboutSection2.service-title-2")}</h2>
            <p className="service-info">{t("aboutSection2.service-info")}</p>
          </div>
          <div className="service">
            <div className="service-icon">
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba26d07102b2bcc7e4fb_transport.svg"
                alt="On-time Delivery"
              />
            </div>
            <h2 className="service-title">{t("aboutSection2.service-title-3")}</h2>
            <p className="service-info">{t("aboutSection2.service-info")}</p>
          </div>
          <div className="service">
            <div className="service-icon">
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg"
                alt="Best in Class Service"
              />
            </div>
            <h2 className="service-title">{t("aboutSection2.service-title-4")}</h2>
            <p className="service-info">{t("aboutSection2.service-info")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection2;
