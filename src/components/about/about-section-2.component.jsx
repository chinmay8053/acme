import React from "react";
import "./about-section-2.styles.scss";

function AboutSection2() {
  return (
    <section className="about-section-2">
      <div className="container">
        <div className="intro">
          <span className="ask">WHY ACME OUTDOORS?</span>
          <h1 className="intro-title">We’re the best in the business.</h1>
          <p className="intro-info">
            From more than 30 years, we’ve been leading the way across Oklahoma — creating the best possible customer
            experience since 1989.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <div className="service-icon">
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84b9ccd071025d67c7e431_verified.svg"
                alt="Lifetime Warranty"
              />
            </div>
            <h2 className="service-title">Lifetime Warranty</h2>
            <p className="service-info">
              All our products — whether we make them or not — are backed by our lifetime warranty.
            </p>
          </div>
          <div className="service">
            <div className="service-icon">
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba18359d4c7fc8ba04d2_cart.svg"
                alt="Shopping Experience"
              />
            </div>
            <h2 className="service-title">Shopping Experience</h2>
            <p className="service-info">
              All our products — whether we make them or not — are backed by our lifetime warranty.
            </p>
          </div>
          <div className="service">
            <div className="service-icon">
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba26d07102b2bcc7e4fb_transport.svg"
                alt="On-time Delivery"
              />
            </div>
            <h2 className="service-title">On-time Delivery</h2>
            <p className="service-info">
              All our products — whether we make them or not — are backed by our lifetime warranty.
            </p>
          </div>
          <div className="service">
            <div className="service-icon">
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg"
                alt="Best in Class Service"
              />
            </div>
            <h2 className="service-title">Best in Class Service</h2>
            <p className="service-info">
              All our products — whether we make them or not — are backed by our lifetime warranty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection2;
