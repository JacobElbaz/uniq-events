"use client";
import React from "react";
import Review from "./Review";
import Slider from "react-slick";

function ReviewsContainer() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="reviews-container">
      <Slider {...settings}>
        <Review
          name={"Rebeccah & Moti"}
          review={
            "Un grand merci pour cette prestation exceptionnelle ! La création du site a été rapide et simple, et le résultat final a vraiment reflété notre style. Nos invités ont adoré."
          }
        />
        <Review
          name={"Shany & Ran"}
          review={
            "Nous ne pourrions pas être plus satisfaits. Le site a été un moyen merveilleux de partager les détails de notre mariage avec nos proches. Tout était parfait !"
          }
        />
        <Review
          name={"Itay & Ortal"}
          review={
            "Le site a été un outil fantastique pour organiser notre mariage. De plus les photos en arrière-plan ont ajouté une touche personnelle et élégante."
          }
        />
        <Review
          name={"Sarah & Dan"}
          review={
            "Le design élégant et les fonctionnalités intuitives ont vraiment rendu la préparation de notre mariage plus agréable. Le compte à rebours jusqu'au jour J était une touche parfaite !"
          }
        />
        <Review
          name={"Salome & Ben"}
          review={
            "Outre la qualité exceptionnelle du site, nous tenons à souligner le relationnel avec les prestataires. L'équipe a été incroyablement réactive et à l'écoute de nos besoins, rendant toute l'expérience encore plus agréable."
          }
        />
      </Slider>
    </div>
  );
}

export default ReviewsContainer;
