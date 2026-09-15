import HomeHero from "./HomeHero";
import ClientsPartners from "./ClientsPartners";
import HomeServices from "./HomeServices";
import WhyChooseUs from "./WhyChooseUs";

import "./home.css";

function HomePage() {
  return (
    <main>
      <HomeHero />
      <ClientsPartners />
      <HomeServices />
      <WhyChooseUs />
    </main>
  );
}

export default HomePage;