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
            "Landing page personnalisee",
            "Liens pratiques (waze, google plan, whatsapp..)",
            "Integration calendrier",
            "Formulaire de reponse",
          ]}
        />
        <Card
          name={"Premium"}
          price={220}
          services={[
            "Landing page personnalisee",
            "Liens pratiques (waze, google plan, whatsapp..)",
            "Integration calendrier",
            "Formulaire de reponse",
            "Espace prive pour les maries",
            "Jusqu'a 2 events",
            "Musique de fond offerte",
          ]}
        />
        <Card
          name={"Pro"}
          price={290}
          services={[
            "Landing page personnalisee",
            "Liens pratiques (waze, google plan, whatsapp..)",
            "Integration calendrier",
            "Formulaire de reponse",
            "Espace prive pour les maries",
            "Nombre d'evenements illimites",
            "Musique de fond offerte",
            "Creation de logo offerte",
          ]}
        />
      </div>
      <div className="prices-text">
        <h3>Options supplementaires:</h3>
        <ul>
            <li>Creation de logo: +25€</li>
            <li>Ajout d'une musique de fond: +25€</li>
        </ul>
      </div>
    </div>
  );
}

export default Prices;
