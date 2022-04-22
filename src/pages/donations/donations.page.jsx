import React from "react";
import DonationSection1 from "../../components/donations/donations-section-1.component";
import DonationsSection2 from "../../components/donations/donations-section-2.component";

function Donations() {
  return (
    <div className="donations-section">
      <DonationSection1 />
      <DonationsSection2 />
    </div>
  );
}

export default Donations;
