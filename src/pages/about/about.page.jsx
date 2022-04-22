import React from "react";
import AboutSection1 from "../../components/about/about-section-1.component";
import AboutSection2 from "../../components/about/about-section-2.component";
import "./about.styles.scss";

function About() {
  return (
    <div className="about-page">
      <AboutSection1 />
      <AboutSection2 />
    </div>
  );
}

export default About;
