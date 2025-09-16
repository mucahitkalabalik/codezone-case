import HeroSection from "../components/Home/HeroSection";
import LiveSection from "../components/Home/LiveSection";
import Trends from "../components/Home/Trends";
import Favorites from "../components/Home/Favorites";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LiveSection />
      <Trends />
      <Favorites />
    </div>
  );
}
