import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">
          <span>MyBindle</span>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#testimonials">Reviews</a>
          <a href="#donate">Donate</a>
          <a href="#download" className="nav-btn">
            Get App
          </a>
        </nav>

        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
