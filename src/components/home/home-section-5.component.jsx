import React from "react";
import "./home-section-5.styles.scss";
function HomeSection5() {
  return (
    <section className="home-section-5">
      <div className="container">
        {/* ---------------------------hover-------------- */}
        <div className="hover-card">
          <div className="bg-image"></div>
        </div>
        {/* ---------------------------hover-------------- */}
        <div className="covid-box">
          <div className="box">
            <div className="title">Shop Local.</div>
            <div className="instruction">
              <p>
                We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the
                future - we’re not sure what the future holds either.
              </p>
              <p>
                That said: we know that we love making sure you have the gear you need for your adventures, and we’re
                going to keep doing that - with our team - until the city tells us we can’t.
              </p>
              <p>
                But as long as folks like yourself support small businesses around the city, then we’ll be here — every
                day, making sure your orders arrive on time.
              </p>
              <hr />
              <p className="names">Jane & John Doe Acme Outdoors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection5;
