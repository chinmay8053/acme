import React from "react";

import "./home-section-2.styles.scss";

function HomeSection2() {
  return (
    <section className="home-section-2">
      <div className="container">
        <div className="grid-5">
          <div className="intro">
            <span>WAYS TO SUPPORT</span>
            <p>Support Acme Outdoors.</p>
          </div>
          <div className="covid">
            COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more
            than ever. Below, we’ve listed the best ways to help us through this season.
          </div>
          <div className="card-info">
            <div className="square" data-01>
              <div className="number">01</div>
              <div className="title">SHOP PRODUCTS</div>
              <div className="shape">
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
                  alt="circle"
                />
              </div>
            </div>
            <p className="message">
              Our full product line is still available online here on our site! Getting outside and hiking is still
              something you can do. Get your gear now!
            </p>
          </div>

          <div className="card-info">
            <div className="square">
              <div className="number">02</div>
              <div className="title">DONATE</div>
              <div className="shape">
                <img
                  data-tri
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg"
                  alt="circle"
                />
              </div>
            </div>
            <p className="message">
              Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is
              working. Donate to keep them afloat.
            </p>
          </div>

          <div className="card-info">
            <div className="square">
              <div className="number">03</div>
              <div className="title">BUY GIFT CARDS</div>
              <div className="shape">
                <img
                  data-square
                  src="	https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg"
                  alt="circle"
                />
              </div>
            </div>
            <p className="message">
              Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and
              family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection2;
