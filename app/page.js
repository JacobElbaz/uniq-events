import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import calendar from "../assets/images/calendar1.jpg";
import faireParts from "@/assets/images/faire-parts.png";
import rsvp from "@/assets/images/rsvp.png";
import ReviewsContainer from "@/components/ReviewsContainer";
import CTA from "@/components/CTA";
import espace from "@/assets/images/espace.png";
import lien from "@/assets/images/lien.png";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="features-container">
        <Feature
          header={"Faire-part personnalisé de l'événement :"}
          description={
            "Partagez votre amour avec style grâce à nos faire-parts personnalisés, conçus pour capturer l'essence de votre journée spéciale."
          }
          image={faireParts}
        />
        <Feature
          height={300}
          header={"Formulaire de réponse pour les invités :"}
          description={
            "Ne laissez aucun invité sans réponse ! Notre formulaire de réponse intégré permet à vos proches de confirmer leur présence en un seul clic."
          }
          image={rsvp}
        />
        <Feature
          header={"Liens pratiques:"}
          description={
            "Facilitez la vie de vos invités avec des liens directs vers WhatsApp pour les messages et Waze pour les itinéraires, afin qu'ils puissent rejoindre votre mariage en toute simplicité."
          }
          image={lien}
        />
        <Feature
          height={500}
          header={"Intégration au calendrier :"}
          description={
            "Ajoutez votre mariage à l'agenda de vos invités en un clin d'œil, pour qu'ils n'oublient jamais le jour où votre amour sera célébré."
          }
          image={calendar}
        />
        <Feature
          header={
            "Espace privé pour les mariés avec accès à la liste des invités et détails des réponses :"
          }
          description={
            "Profitez d'un espace exclusif pour les mariés, où vous pourrez suivre les réponses de vos invités et planifier votre grand jour en toute tranquillité."
          }
          image={espace}
        />
      </div>
      <ReviewsContainer />
      <CTA />
    </main>
  );
}
