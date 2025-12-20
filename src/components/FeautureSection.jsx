import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section id="features" className="features" ref={sectionRef}>
      <div className="features-container">
        <h2>Features That Keep You Hooked!</h2>
        <p className="features-subtitle">
          Meet, Chat, Share – Anytime, Anywhere!
        </p>

        <div className="features-grid">
          {[
            {
              icon: "🔥",
              title: "Seamless Connections",
              text:
                "Stay in touch with friends, family, and like-minded people with just a tap.",
            },
            {
              icon: "📸",
              title: "Share Your Story",
              text:
                "Upload photos, videos, and updates to let the world know what’s happening in your life.",
            },
            {
              icon: "💬",
              title: "Real-Time Chat",
              text:
                "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
            },
            {
              icon: "🔓",
              title: "Privacy First",
              text:
                "Your data, your control. We prioritize your privacy with world-class security.",
            },
            {
              icon: "🌏",
              title: "Discover & Explore",
              text:
                "Find trending content, join communities, and follow pages that match your interests.",
            },
            {
              icon: "💼",
              title: "Grow Your Business",
              text:
                "Use our platform to market your brand, connect with customers, and build meaningful relationships.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="feature-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h3>
                <span>{item.icon}</span> {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
