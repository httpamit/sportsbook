import HeroBanner from "../components/HeroBanner";
import Header from "../components/layout/Header";
import SportsMatchWrapper from "../components/SportsMatch";

export default function App() {
  return (
    <div className="bg-[#07001A] min-h-screen text-white font-sans">
      <Header />
      <main className="px-4 md:px-8 lg:px-16 space-y-12">
        <HeroBanner />
        <SportsMatchWrapper />
        {/* <SectionCards />
        <GameSlider title="Casino" gamesKey="casino" />
        <GameSlider title="Top Rated Games" gamesKey="topRated" />
        <LiveCasinoSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
