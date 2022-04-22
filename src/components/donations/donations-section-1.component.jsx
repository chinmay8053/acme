import React from "react";
import "./donations-section-1.styles.scss";

function DonationSection1() {
  return (
    <section className="donate-section-1">
      <div className="bg-image">
        <div className="container">
          <div className="box">
            <h1 className="title">Here at Acme Outdoors</h1>
            <span className="sub-title">every dollar counts</span>
            <p className="statement">
              Acme Outdoors is more than just a company, we're a community of people who care for one another and for
              our city. During this time, due to shelter in place orders, only a select few of our staff are able to
              work. Any donations you make to Acme will help make sure our employees are cared for and can stay safe in
              these uncertain times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationSection1;
