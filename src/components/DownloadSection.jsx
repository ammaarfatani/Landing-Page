import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DownloadSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const phonesRef = useRef([]);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
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
    <section id="download" className="download-section" ref={sectionRef}>
      <div className="download-inner">

        <div className="download-content" ref={contentRef}>
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
            <a
              className="store-btn apple"
              href="#"
              ref={(el) => (buttonsRef.current[0] = el)}
            >
              <img src="/appstore.png" alt="Apple" />
              <div>
                <span>Download on the</span>
                <br />
                <strong>App Store</strong>
              </div>
            </a>

            <a
              className="store-btn google"
              href="#"
              ref={(el) => (buttonsRef.current[1] = el)}
            >
              <img src="/playstore.png" alt="Google Play" />
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
            ref={(el) => (phonesRef.current[0] = el)}
          />
          <img
            src="/phone-large.png"
            alt="App Screen"
            className="phone phone-large"
            ref={(el) => (phonesRef.current[1] = el)}
          />
        </div>

      </div>
    </section>
  );
};

export default DownloadSection;
