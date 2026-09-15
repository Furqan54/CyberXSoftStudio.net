import StatsStrip from "../../components/StatsStrip";

import HomeHero from "./HomeHero";
import ClientsPartners from "./ClientsPartners";
import HomeServices from "./HomeServices";
import WhyChooseUs from "./WhyChooseUs";

import { homeStats } from "./homeData";

import "./home.css";

function HomePage() {
  return (
    <main>
      <HomeHero />
      <ClientsPartners />
      <HomeServices />
      <WhyChooseUs />
      <StatsStrip items={homeStats} />
    </main>
  );
}

export default HomePage;