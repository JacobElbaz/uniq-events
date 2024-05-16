"use client";
import React from "react";
import instagram from "@/assets/icons/instagram.png";
import whatsapp from "@/assets/icons/whatsapp.png";
import tel from "@/assets/icons/mobile.png";
import email from "@/assets/icons/enveloppe.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

function Footer() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
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
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          toast.error("Un probleme est survenue.", error);
        }
      );
  };
  return (
    <div className="footer">
      <div className="footer-links">
        <h5>Liens du site</h5>
        <ul>
          <li>
            <a href="">Faire-part personnalisé</a>
          </li>
          <li>
            <a href="">Liens pratiques</a>
          </li>
          <li>
            <a href="">Formulaire de reponse</a>
          </li>
          <li>
            <a href="">Integration calendrier</a>
          </li>
          <li>
            <a href="">Espace prive pour les maries</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <h5>Contact</h5>
          <a href="tel:+33782786228"><Image src={tel} alt="tel" height={16} /> 0782786228</a>
          <a href="mailto:contact@uniq-web.dev"><Image src={email} alt="email" height={16} /> contact@uniq-web.dev</a>
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
      <Toaster/>
    </div>
  );
}

export default Footer;
