import React from "react";
import {
  FaFire,
  FaCamera,
  FaComments,
  FaLock,
  FaGlobe,
  FaBriefcase,
} from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2>Features That Keep You Hooked!</h2>
        <p className="features-subtitle">
          Meet, Chat, Share – Anytime, Anywhere!
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3><span>🔥</span> Seamless Connections</h3>
            <p>
              Stay in touch with friends, family, and like-minded people
              with just a tap.
            </p>
          </div>

          <div className="feature-card">
            <h3><span>📸</span> Share Your Story</h3>
            <p>
              Upload photos, videos, and updates to let the world know
              what’s happening in your life.
            </p>
          </div>

          <div className="feature-card">
            <h3><span>💬</span> Real-Time Chat</h3>
            <p>
              Whether it's a DM or a group conversation, connect instantly
              with smooth, lightning-fast messaging.
            </p>
          </div>

          <div className="feature-card">
            <h3><span>🔓</span> Privacy First</h3>
            <p>
              Your data, your control. We prioritize your privacy with
              world-class security.
            </p>
          </div>

          <div className="feature-card">
            <h3><span>🌏</span> Discover & Explore</h3>
            <p>
              Find trending content, join communities, and follow pages
              that match your interests.
            </p>
          </div>

          <div className="feature-card">
            <h3><span>💼</span> Grow Your Business</h3>
            <p>
              Use our platform to market your brand, connect with customers,
              and build meaningful relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
