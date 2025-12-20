import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* TOP LOGO */}
      <div className="hero-top">
        <div className="hero-logo">
        <img src="../logo.png" alt="Mybindle Logo" className="logo-icon" />
          <span>Mybindle</span>
        </div>
      </div>

      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-content">
          <h1>
            Stay Connected
            <br />
            Stay Social
            <br />
            Stay You!
          </h1>

          <p>
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect
            with old friends, build new relationships, or share what matters most
            to you – MyBindle is your home on the internet.
          </p>

          <button className="hero-btn">Get Started</button>
        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <img src="../phone.png" alt="App Preview" />

          {/* FLOATING TAGS */}
          <div className="floating-tag top">
            🔥 Seamless Connections
          </div>

          <div className="floating-tag bottom">
            🌍 Discover & Explore
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
