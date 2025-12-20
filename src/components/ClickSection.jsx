import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClickSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const phonesRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(phonesRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="click-section" ref={sectionRef}>
      <div className="click-container">

        <div className="click-visual">
          <div className="red-circle"></div>

          <img
            src="../phone-left.png"
            alt="App screen left"
            className="phone phone-left"
            ref={(el) => (phonesRef.current[0] = el)}
          />

          <img
            src="../phone-right.png"
            alt="App screen right"
            className="phone phone-right"
            ref={(el) => (phonesRef.current[1] = el)}
          />
        </div>

        <div className="click-content" ref={contentRef}>
          <h2>
            Where Every Click
            <br />
            Sparks a Connection!
          </h2>

          <p className="subtitle">
            A small act of kindness today can create a lifetime of impact for
            someone in need.
          </p>

          {[
            {
              title: "🎬 Short Videos & Reels",
              text:
                "Share engaging, bite-sized content that keeps everyone entertained.",
            },
            {
              title: "🔔 Smart Notifications",
              text: "Stay updated on what matters without the noise.",
            },
            {
              title: "👥 Interest-Based Communities",
              text:
                "Join groups and discussions that match your passion.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="info-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClickSection;
