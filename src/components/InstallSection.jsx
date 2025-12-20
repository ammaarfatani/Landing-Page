import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InstallSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(stepsRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
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
    <section className="install" ref={sectionRef}>
      <div className="install-container">

        <div ref={headerRef}>
          <h2>How to Install Our App</h2>
          <p className="install-subtitle">
            Getting started is quick and easy! Follow these simple steps to
            install and start using MyBindle today.
          </p>
        </div>

        {/* STEPS HEADER */}
        <div className="steps-line">
          <span className="step active" ref={(el) => (stepsRef.current[0] = el)}>01</span>
          <span className="line"></span>
          <span className="step" ref={(el) => (stepsRef.current[1] = el)}>02</span>
          <span className="line"></span>
          <span className="step" ref={(el) => (stepsRef.current[2] = el)}>03</span>
        </div>

        <div className="install-grid">
          {[
            {
              title: "Download",
              text: "Open Play Store or App Store",
            },
            {
              title: "Install App",
              text: "The app will install automatically.",
            },
            {
              title: "Ready to Use",
              text: "Sign up or log in to start exploring!",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="install-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallSection;
