import React from "react";
import { useTranslation } from "react-i18next";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./home-section-3.styles.scss";
function HomeSection3() {
  const { t } = useTranslation();
  return (
    <section className="home-section-3">
      <div className="bg-image">
        <div className="container">
          <div className="statement">
            <div className="title">{t("homeSection3.title")}</div>
            <div className="instruction">{t("homeSection3.instruction")}</div>
            <div className="statement-btn">
              <BootstrapButton
                sx={{
                  color: "#fff",
                  border: "none",
                  background: "#000",
                  fontSize: "15px",
                  fontFamily: "700",
                  "&:hover": {
                    fontFamily: "700",
                    color: "#ccc",
                    border: "none",
                    background: "#921111",
                  },
                }}
                variant="outlined"
              >
                Read our Statement
              </BootstrapButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection3;
