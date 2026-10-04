import FAQSection from "../../components/FAQSection";

import HomeHero from "./HomeHero";
import ClientsPartners from "./ClientsPartners";
import HomeServices from "./HomeServices";
import AudienceNeeds from "./AudienceNeeds";
import StaffAugmentationHighlight from "./StaffAugmentationHighlight";
import WhyChooseUs from "./WhyChooseUs";
import HomeProof from "./HomeProof";
import HomeApproach from "./HomeApproach";
import HomeFinalCTA from "./HomeFinalCTA";

import { homeFaqs } from "./homeData";

import "./home.css";

function HomePage() {
  return (
    <main>
      <HomeHero />

      <ClientsPartners />

      <HomeServices />

      <AudienceNeeds />

      <StaffAugmentationHighlight />

      <WhyChooseUs />

      <HomeProof />

      <HomeApproach />

      <FAQSection items={homeFaqs} />

      <HomeFinalCTA />
    </main>
  );
}

export default HomePage;