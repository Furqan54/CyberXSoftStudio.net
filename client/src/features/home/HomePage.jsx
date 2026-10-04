import FAQSection from "../../components/FAQSection";

import HomeHero from "./HomeHero";
import ClientsPartners from "./ClientsPartners";
import HomeServices from "./HomeServices";
import AudienceNeeds from "./AudienceNeeds";
import WhyChooseUs from "./WhyChooseUs";

import { homeFaqs } from "./homeData";

import "./home.css";

function HomePage() {
  return (
    <main>
      <HomeHero />

      <ClientsPartners />

      <HomeServices />

      <AudienceNeeds />

      <WhyChooseUs />

      <FAQSection items={homeFaqs} />
    </main>
  );
}

export default HomePage;