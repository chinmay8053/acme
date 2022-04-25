import React from "react";
import { useTranslation } from "react-i18next";
import { chatWarning } from "../../assests/chat-warning";
import { Message } from "../../assests/message";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./contact-section-1.styles.scss";

function ContactSection1() {
  const { t } = useTranslation();
  return (
    <section className="contact-section-1">
      <div className="wrapper">
        <div className="postion">
          <div className="container">
            <h1 className="title">{t("contactSection1.title")}</h1>
            <div className="boxes">
              <div className="contact-box">
                <div className="icons">{Message}</div>
                <h2 className="subtitle">{t("contactSection1.contact")}</h2>
                <p className="statement">{t("contactSection1.contact-statement")}</p>
                <div className="section-btn">
                  <BootstrapButton
                    sx={{ backgroundColor: "rgb(146 17 17 / 97%)", color: "#fff", padding: "10px 18px" }}
                  >
                    Send Us A Message
                  </BootstrapButton>
                </div>
              </div>
              <div className="contact-box">
                <div className="icons">{chatWarning}</div>
                <h2 className="subtitle">{t("contactSection1.support")}</h2>
                <p className="statement">{t("contactSection1.support-statement")}</p>
                <div className="section-btn">
                  <BootstrapButton
                    sx={{ backgroundColor: "rgb(146 17 17 / 97%)", color: "#fff", padding: "10px 18px" }}
                  >
                    Contact Support
                  </BootstrapButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-image"></div>
      </div>
    </section>
  );
}

export default ContactSection1;
