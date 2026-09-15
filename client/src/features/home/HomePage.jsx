import HomeHero from "./HomeHero";
import ClientsPartners from "./ClientsPartners";
import HomeServices from "./HomeServices";

import "./home.css";

function HomePage() {
  return (
    <main>
      <HomeHero />
      <ClientsPartners />
      <HomeServices />
    </main>
  );
}

export default HomePage;