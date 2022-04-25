import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

import "./donations-section-2.styles.scss";

function DonationsSection2() {
  const { t } = useTranslation();
  const dolar = [100, 50, 25, 15, 5];
  return (
    <section className="donate-section-2">
      <div className="container">
        <div className="box">
          {dolar.map((item, idx) => (
            <Link to={"/donations"} key={idx} className="link">
              <BootstrapButton
                sx={{
                  display: "block",
                  width: "100%",
                  color: "#fff",
                  backgroundColor: "rgb(146 17 17 / 97%)",
                  padding: "15px 30px",
                  fontSize: "18px",
                }}
              >
                {t("donateSection2.donate")} ${item}
              </BootstrapButton>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DonationsSection2;
