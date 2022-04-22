import React from "react";

import "./about-section-4.styles.scss";
function AboutSection4() {
  return (
    <section className="about-section-4">
      <div className="container">
        <div className="card">
          <div className="image-box">
            <img className="image" src={require("../../assests/jane2.png")} alt="face" />
          </div>
          <h2 className="name">John Doe</h2>
          <p className="statement">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
        </div>

        <div className="card">
          <div className="image-box">
            <img className="image" src={require("../../assests/jane1.png")} alt="face" />
          </div>
          <h2 className="name">John Doe</h2>
          <p className="statement">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection4;
