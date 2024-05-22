"use client";
import React from "react";
import instagram from "@/assets/icons/instagram.png";
import whatsapp from "@/assets/icons/whatsapp.png";
import tel from "@/assets/icons/mobile.png";
import email from "@/assets/icons/enveloppe.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

function Footer() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const form = React.useRef();
  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("service_b7kgv7k", "template_xharss9", form.current, {
        publicKey: "mEYfRDD7YhHd42iLG",
      })
      .then(
        () => {
          toast.success("Message envoye!");
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Un probleme est survenue.", error);
        }
      );
  };
  return (
    <div style={{position: 'relative'}}>
    <div className="custom-shape-divider-top-1716371668">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer">
        <div className="footer-links">
          <h5>Liens du site</h5>
          <ul>
            <li>
              <a href="#faire-part">Faire-part personnalisé</a>
            </li>
            <li>
              <a href="#liens">Liens pratiques</a>
            </li>
            <li>
              <a href="#formulaire">Formulaire de réponse</a>
            </li>
            <li>
              <a href="#intégration">Intégration calendrier</a>
            </li>
            <li>
              <a href="#espace">Espace privé pour les mariés</a>
            </li>
            <li>
              <a href="/nos-offres">Nos offres</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact" id="contact">
          <h5>Contact</h5>
          <a href="tel:+33782786228">
            <Image src={tel} alt="tel" height={16} /> 0782786228
          </a>
          <a href="mailto:contact@uniq-web.dev">
            <Image src={email} alt="email" height={16} /> contact@uniq-web.dev
          </a>
          <div className="footer-social">
            <Image src={instagram} alt="insta" />
            <Image src={whatsapp} alt="whatsapp" />
          </div>
        </div>
        <form ref={form} className="footer-form" onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            id="1"
            placeholder="Nom"
            onChange={handleOnChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            id="2"
            placeholder="E-mail"
            onChange={handleOnChange}
          />
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            id="3"
            placeholder="Message"
            onChange={handleOnChange}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Envoi..." : "ENVOYER"}
          </button>
        </form>
        <Toaster />
      </div>
      <div className="footer">
        <Link href={"/"} style={{ fontSize: "small" }}>
          Mentions légales
        </Link>
        <Link href={"/"} style={{ fontSize: "small" }}>
          Conditions d'utilisation
        </Link>
        <p style={{ fontSize: "small" }}>
          Copyright 2024 - Uniq Web - Tous droits reservés
        </p>
      </div>
    </div>
  );
}

export default Footer;
