import React from "react";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";
import { useTranslation } from "react-i18next";

import "./home-section-1.styles.scss";

function HomeSection1() {
  const { t } = useTranslation();

  return (
    <section className="home-section-1">
      <div className="section-hero">
        <div className="section-intro">
          <h1>{t("homeSection1.title")}</h1>
          <p>{t("homeSection1.Statement")}</p>
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
    </section>
  );
}

export default HomeSection1;
