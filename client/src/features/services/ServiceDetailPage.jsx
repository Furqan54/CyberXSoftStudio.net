import { useParams } from "react-router-dom";

import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";

import NotFoundPage from "../../app/NotFoundPage";

import ServiceOverview from "./ServiceOverview";

import BrandStrategyPage from "./BrandStrategyPage";
import CreativeMediaPage from "./CreativeMediaPage";
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
   * =========================================
   * DEDICATED BRAND STRATEGY PAGE
   * =========================================
   *
   * Existing route:
   * /services/brand-strategy-digital-growth
   */

  if (
    serviceSlug ===
    "brand-strategy-digital-growth"
  ) {
    return <BrandStrategyPage />;
  }

  /*
   * =========================================
   * DEDICATED CREATIVE MEDIA PAGE
   * =========================================
   *
   * Existing route:
   * /services/creative-media-design-animation
   */

  if (
    serviceSlug ===
    "creative-media-design-animation"
  ) {
    return <CreativeMediaPage />;
  }

  /*
   * =========================================
   * DEDICATED STAFF AUGMENTATION PAGE
   * =========================================
   *
   * Existing route:
   * /services/talent-augmentation-delivery-support
   */

  if (
    serviceSlug ===
    "talent-augmentation-delivery-support"
  ) {
    return <StaffAugmentationPage />;
  }

  /*
   * =========================================
   * DEFAULT SERVICE TEMPLATE
   * =========================================
   *
   * These pages continue using the shared
   * service-detail structure for now:
   *
   * - AI, Software & Digital Solutions
   * - Data, Cybersecurity & Digital Governance
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