import { useParams } from "react-router-dom";

import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";

import NotFoundPage from "../../app/NotFoundPage";

import ServiceOverview from "./ServiceOverview";

import BrandStrategyPage from "./BrandStrategyPage";
import CreativeMediaPage from "./CreativeMediaPage";
import AISoftwarePage from "./AISoftwarePage";
import DataCybersecurityPage from "./DataCybersecurityPage";
import StaffAugmentationPage from "./StaffAugmentationPage";

import { getServiceBySlug } from "./servicesData";

import "./services.css";

function ServiceDetailPage() {
  const { serviceSlug } = useParams();

  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <NotFoundPage />;
  }

  /*
   * Dedicated service pages
   *
   * Existing routes remain unchanged.
   */

  switch (serviceSlug) {
    case "brand-strategy-digital-growth":
      return <BrandStrategyPage />;

    case "creative-media-design-animation":
      return <CreativeMediaPage />;

    case "ai-software-digital-solutions":
      return <AISoftwarePage />;

    case "data-cybersecurity-digital-governance":
      return <DataCybersecurityPage />;

    case "talent-augmentation-delivery-support":
      return <StaffAugmentationPage />;

    default:
      break;
  }

  /*
   * Generic fallback template
   *
   * Kept in place for future services
   * or routes that have not yet been
   * moved to dedicated page components.
   */

  const { detail } = service;

  return (
    <main>
      <PageHero
        eyebrow={service.name}
        title={detail.heroTitle}
        description={detail.heroDescription}
        breadcrumbs={[
          {
            label: "Services",
            path: "/services",
          },
          {
            label: service.name,
          },
        ]}
        action={{
          label: "Book a Consultation",
          path: "/contact",
        }}
      />

      <ServiceOverview service={service} />

      <CTASection
        title="Ready to Turn Strategy Into Results?"
        description="Talk to our specialists about your goals, challenges, and the right delivery approach for your organization."
        buttonLabel="Book a Consultation"
        buttonPath="/contact"
      />
    </main>
  );
}

export default ServiceDetailPage;