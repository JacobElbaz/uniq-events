import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <div
      style={{
        padding: "5rem 1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
      }}
    >
      <h2 style={{ maxWidth: "883px" }}>
        Prêt à faire de votre mariage un événement unique ? Commencez dès
        aujourd'hui avec Uniq Events et créez votre site de mariage en un seul
        clic !
      </h2>
      <Link
        href={"/nos-offres"}
        style={{ textDecoration: "none", color: "inherit" }}
        className="button"
      >
        Voir nos offres
      </Link>
    </div>
  );
}

export default CTA;
