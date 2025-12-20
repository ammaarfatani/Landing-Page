import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DonateSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const phonesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="donate" className="donate" ref={sectionRef}>
      <div className="donate-inner">
        
        <div className="donate-content" ref={contentRef}>
          <h2>
            Be the Reason <br />
            Someone Smiles Today!
          </h2>

          <p>
            Your generosity can change lives — every donation brings hope,
            support, and a brighter future.
          </p>

          <button className="donate-btn">Donate Now</button>
        </div>

        <div className="donate-phones">
          <img
            src="/phone-1.png"
            alt="Donation App"
            className="Donation-phone phone-back"
            ref={(el) => (phonesRef.current[0] = el)}
          />
          <img
            src="/phone-2.png"
            alt="Thank You Screen"
            className="Donation-phone phone-front"
            ref={(el) => (phonesRef.current[1] = el)}
          />
        </div>

      </div>
    </section>
  );
};

export default DonateSection;
