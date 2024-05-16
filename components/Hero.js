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
        <h1 style={{ paddingTop: "75px" }}>
          La magie de votre mariage commence par une simple page web.
        </h1>
        <p>Créez un site de mariage unique en un seul clic.</p>
        <p>
          Faites de votre mariage un événement inoubliable avec notre solution
          de sites web personnalisés.
        </p>
        <button
          onClick={handleScrollTo}
          className="button"
          style={{ color: "black" }}
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
