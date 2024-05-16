import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import img from "../assets/images/hero.jpg";
import waze from "../assets/images/waze.jpg";
import calendar from "../assets/images/calendar.jpg";

import faireParts from '@/assets/images/faire-parts.png'
import rsvp from '@/assets/images/rsvp.png'
import ReviewsContainer from "@/components/ReviewsContainer";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Feature header={"Faire-part personnalisé de l'événement :"} description={"Partagez votre amour avec style grâce à nos faire-parts personnalisés, conçus pour capturer l'essence de votre journée spéciale."} image={img}/>
      <Feature inverted header={"Liens pratiques:"} description={"Facilitez la vie de vos invités avec des liens directs vers WhatsApp pour les messages et Waze pour les itinéraires, afin qu'ils puissent rejoindre votre mariage en toute simplicité."} image={waze}/>
      <Feature header={"Formulaire de réponse pour les invités :"} description={"Ne laissez aucun invité sans réponse ! Notre formulaire de réponse intégré permet à vos proches de confirmer leur présence en un seul clic."} image={img}/>
      <Feature inverted header={"Intégration au calendrier :"} description={"Ajoutez votre mariage à l'agenda de vos invités en un clin d'œil, pour qu'ils n'oublient jamais le jour où votre amour sera célébré."} image={calendar}/>
      <Feature header={"Faire-part personnalisé de l'événement :"} description={"Partagez votre amour avec style grâce à nos faire-parts personnalisés, conçus pour capturer l'essence de votre journée spéciale."} image={faireParts}/>
      <Feature inverted header={"Liens pratiques:"} description={"Facilitez la vie de vos invités avec des liens directs vers WhatsApp pour les messages et Waze pour les itinéraires, afin qu'ils puissent rejoindre votre mariage en toute simplicité."} image={img}/>
      <Feature header={"Formulaire de réponse pour les invités :"} description={"Ne laissez aucun invité sans réponse ! Notre formulaire de réponse intégré permet à vos proches de confirmer leur présence en un seul clic."} image={rsvp}/>
      <Feature inverted header={"Intégration au calendrier :"} description={"Ajoutez votre mariage à l'agenda de vos invités en un clin d'œil, pour qu'ils n'oublient jamais le jour où votre amour sera célébré."} image={img}/>
      <Feature header={"Espace privé pour les mariés avec accès à la liste des invités et détails des réponses :"} description={"Profitez d'un espace exclusif pour les mariés, où vous pourrez suivre les réponses de vos invités et planifier votre grand jour en toute tranquillité."} image={img}/>
      <ReviewsContainer/>
      <div style={{padding: '5rem 1rem'}}>
        <h2 style={{maxWidth: '883px'}}>Prêt à faire de votre mariage un événement unique ? Commencez dès aujourd'hui avec Uniq Events et créez votre site de mariage en un seul clic !</h2>
        <Link href={'/nos-offres'} style={{textDecoration: 'none', color: 'inherit'}} className="button">Voir nos offres</Link>
      </div>
    </main>
  );
}