import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Emily R", country: "USA", text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!", img: "https://i.pravatar.cc/100?img=32" },
  { name: "Amit K", country: "India", text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.", img: "https://i.pravatar.cc/100?img=12" },
  { name: "Sophie M", country: "UK", text: "I joined just to explore, but now I can’t imagine my day without it. The real-time chat and engaging communities make every interaction special!", img: "https://i.pravatar.cc/100?img=47" },
  { name: "Javier L", country: "Spain", text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.", img: "https://i.pravatar.cc/100?img=56" },
  { name: "Lucas T", country: "Brazil", text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!", img: "https://i.pravatar.cc/100?img=60" },
  { name: "Nora S", country: "Canada", text: "I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.", img: "https://i.pravatar.cc/100?img=5" },
  { name: "Extra 1", country: "Germany", text: "Hidden testimonial sample text.", img: "https://i.pravatar.cc/100?img=20" },
  { name: "Extra 2", country: "France", text: "Another hidden testimonial sample.", img: "https://i.pravatar.cc/100?img=21" },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
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
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="testimonials-container">
        <h2>What Our Users Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`testimonial-card ${
                index >= 6 ? "blur-card" : ""
              }`}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-user">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="see-more-btn" disabled>
          See More
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
