import React, { useEffect } from "react";
import AboutSection3 from "../../components/about/about-seciton-3.component";
import AboutSection5 from "../../components/about/about-seciton-5.component";
import AboutSection1 from "../../components/about/about-section-1.component";
import AboutSection2 from "../../components/about/about-section-2.component";
import AboutSection4 from "../../components/about/about-section-4.component";
import "./about.styles.scss";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-page">
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
    </div>
  );
}

export default About;
