import React from "react";

const InstallSection = () => {
  return (
    <section className="install">
      <div className="install-container">
        <h2>How to Install Our App</h2>
        <p className="install-subtitle">
          Getting started is quick and easy! Follow these simple steps to
          install and start using MyBindle today.
        </p>

        {/* STEPS HEADER */}
        <div className="steps-line">
          <span className="step active">01</span>
          <span className="line"></span>
          <span className="step">02</span>
          <span className="line"></span>
          <span className="step">03</span>
        </div>

        <div className="install-grid">
          <div className="install-card">
            <h3>Download</h3>
            <p>Open Play Store or App Store</p>
          </div>

          <div className="install-card">
            <h3>Install App</h3>
            <p>The app will install automatically.</p>
          </div>

          <div className="install-card">
            <h3>Ready to Use</h3>
            <p>Sign up or log in to start exploring!</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default InstallSection;
