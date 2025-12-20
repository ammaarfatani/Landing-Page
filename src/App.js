import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
