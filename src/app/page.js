import HomePageContent from "./components/HomePageContent";

export const metadata = {
  title: "Premium African Movies, Series & Comedy",
  description:
    "Explore premium African movies, series, documentaries, and comedy by Feempipo. Stream engaging stories from Africa to the world.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return <HomePageContent />;
}
