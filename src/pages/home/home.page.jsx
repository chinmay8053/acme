import React from "react";
import HomeSection1 from "../../components/home/section-1.component";
import HomeSection2 from "../../components/home/section-2.component";
import HomeSection3 from "../../components/home/section-3.component";

import "./home.styles.scss";

function HomePage() {
  return (
    <div className="home-page">
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
    </div>
  );
}

export default HomePage;
