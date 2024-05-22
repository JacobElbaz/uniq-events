"use client";
import React from "react";
import heroBg from "@/assets/images/hero.jpg";

function Hero() {
  const handleScrollTo = (e) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="text-focus-in" style={{color: '#FCD8D4'}}>
          La magie de votre mariage commence par une simple page web.
        </h1>
        <p className="text-focus-in" style={{animation: 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}}>Créez un site de mariage unique en un seul clic.</p>
        <p className="text-focus-in" style={{animation: 'text-focus-in 1.1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}}>
          Faites de votre mariage un événement inoubliable avec notre solution
          de sites web personnalisés.
        </p>
        <button
          onClick={handleScrollTo}
          className="button text-focus-in"
          style={{ color: "#313131", marginTop: '1rem', animation: 'text-focus-in 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both' }}
        >
          Créer mon site
        </button>
      </div>
      <div
      className="hero-bg"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          backgroundPosition: "bottom",
          backgroundImage: `url(${heroBg.src})`,
        }}
      />
    </div>
  );
}

export default Hero;
