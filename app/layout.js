import { Montserrat_Alternates } from "next/font/google";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const inter = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["italic", "normal"],
});

export const metadata = {
  title: "Uniq Events",
  description: "Creer ton site de mariage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
