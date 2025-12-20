import React from "react";

const ClickSection = () => {
  return (
    <section className="click-section">
      <div className="click-container">
        
        <div className="click-visual">
          <div className="red-circle"></div>

          <img
            src="../phone-left.png"
            alt="App screen left"
            className="phone phone-left"
          />

          <img
            src="../phone-right.png"
            alt="App screen right"
            className="phone phone-right"
          />
        </div>

        <div className="click-content">
          <h2>
            Where Every Click
            <br />
            Sparks a Connection!
          </h2>

          <p className="subtitle">
            A small act of kindness today can create a lifetime of impact for
            someone in need. Give from the heart and change a life!
          </p>

          <div className="info-card">
            <h4>🎬 Short Videos & Reels</h4>
            <p>
              Share engaging, bite-sized content that keeps everyone
              entertained.
            </p>
          </div>

          <div className="info-card">
            <h4>🔔 Smart Notifications</h4>
            <p>
              Stay updated on what matters without the noise.
            </p>
          </div>

          <div className="info-card">
            <h4>👥 Interest-Based Communities</h4>
            <p>
              Join groups and discussions that match your passion.
            </p>
          </div>
        </div>
      </div>
     

    </section>
  );
};

export default ClickSection;
