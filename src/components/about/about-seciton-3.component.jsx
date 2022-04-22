import React from "react";

import "./about-section-3.styles.scss";

function AboutSection3() {
  return (
    <section className="about-section-3">
      <div className="container">
        <div className="hover-card">
          <div className="image-box">
            <div className="image"></div>
          </div>
        </div>
        <div className="info-card">
          <div className="box">
            <h2 className="title">Meet the Owners</h2>
            <div className="statement">
              <p>
                John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to
                get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to
                explore the landscape in Nepal.
              </p>
              <p>
                While on the trip, John and Jane realized that they had one common love — the love for hiking and the
                love for being outdoors.
              </p>
              <p>
                Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store
                centered around their passions.
              </p>
              <p>
                While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side
                of the business, building this website in the best design platform on the web — Webflow!
              </p>
              <p>
                In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts
                around the state.
              </p>
              <p>
                To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where
                they came from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection3;
