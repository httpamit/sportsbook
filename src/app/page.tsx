import HeroBanner from "../components/HeroBanner";
import Header from "../components/layout/Header";
import SportsMatchWrapper from "../components/SportsMatch";
import Categories from "../components/Categories";
import GameSection from "../components/GameSection";
import Footer from "../components/layout/Footer";

export default function App() {
  return (
    <div className="bg-[#07001A] min-h-screen text-white font-sans">
      <Header />
      <main className="px-4 md:px-8 lg:px-16 space-y-12">
        <HeroBanner />
        <SportsMatchWrapper />
        <Categories />
        <GameSection />
      </main>
      <Footer />
    </div>
  );
}
