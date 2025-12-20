import React from "react";

const DownloadSection = () => {
  return (
    <section id="download" className="download-section">
      <div className="download-inner">
        <div className="download-content">
          <h2>
            Join the Fun – Download
            <br />
            MyBindle Now!
          </h2>

          <p>
            Your Social Network, Your Way
            <br />
            Download MyBindle Now and Be a Part
            <br />
            of a Community That’s Always Evolving!
          </p>

          <div className="store-buttons">
  <a className="store-btn apple" href="#">
    <img src="/appstore.png" alt="Apple" />
    <div>
      <span>Download on the</span>
      <br />
      <strong>App Store</strong>
    </div>
  </a>

  <a className="store-btn google" href="#">
    <img src="playstore.png" alt="Google Play" />
    <div>
      <span>GET IT ON</span>
      <br />
      <strong>Google Play</strong>
    </div>
  </a>
</div>

        </div>

        <div className="download-phones">
          <img
            src="/phone-small.png"
            alt="App Screen"
            className="phone phone-small"
          />
          <img
            src="/phone-large.png"
            alt="App Screen"
            className="phone phone-large"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
