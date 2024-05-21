import Card from "@/components/Card";
import React from "react";

function Prices() {
  return (
    <div className="prices">
      <div className="prices-text">
        <h1 style={{paddingTop: '45px'}}>NOS OFFRES</h1>
        <p>
          Nous avons un plan pour chaque besoin
        </p>
      </div>
      <div className="cards-container">
        <Card
          name={"Basic"}
          price={120}
          services={[
            "Design personnalisé",
            "Liens pratiques (Waze/Google Plan/Whatsapp)",
            "Intégration calendrier",
            "Formulaire de réponse",
            "Réception des réponses par mail",
            "1 événement"
          ]}
        />
        <Card
          name={"Premium"}
          price={220}
          services={[
            "Design personnalisé",
            "Liens pratiques (Waze/Google Plan/Whatsapp)",
            "Intégration calendrier",
            "Formulaire de réponse",
            "Reception des réponses par mail et sur la plateforme",
            "Espace privé pour les mariés (accés et gestion de la liste de réponses)",
            "Jusqu'à 2 événements",
            "Musique de fond offerte",
          ]}
        />
        <Card
          name={"Pro"}
          price={290}
          services={[
            "Design personnalisé",
            "Liens pratiques (Waze/Google Plan/Whatsapp)",
            "Intégration calendrier",
            "Formulaire de réponse",
            "Reception des réponses par mail et sur la plateforme",
            "Espace privé pour les mariés (accés et gestion de la liste de réponses)",
            "Nombre d'événements illimités",
            "Musique de fond offerte",
            "Création de logo offerte",
          ]}
        />
      </div>
      <div className="prices-text">
        <h3>Options supplémentaires:</h3>
        <ul>
            <li>Création de logo: +25€</li>
            <li>Ajout d'une musique de fond: +25€</li>
        </ul>
      </div>
    </div>
  );
}

export default Prices;
