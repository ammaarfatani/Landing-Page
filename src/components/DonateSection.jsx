import React from "react";

const DonateSection = () => {
  return (
    <section id="donate" className="donate">
      <div className="donate-inner">
        <div className="donate-content">
          <h2>
            Be the Reason <br />
            Someone Smiles Today!
          </h2>

          <p>
            Your generosity can change lives every donation brings hope,
            support, and a brighter future. Give today and make a difference!
          </p>

          <button className="donate-btn">Donate Now</button>
        </div>

        <div className="donate-phones">
          <img
            src="/phone-1.png"
            alt="Donation App"
            className="Donation-phone phone-back"
          />
          <img
            src="/phone-2.png"
            alt="Thank You Screen"
            className="Donation-phone phone-front"
          />
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
