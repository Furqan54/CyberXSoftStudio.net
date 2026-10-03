import { useParams } from "react-router-dom";

import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";

import NotFoundPage from "../../app/NotFoundPage";

import ServiceOverview from "./ServiceOverview";
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
   * Dedicated Staff Augmentation page
   *
   * We keep the existing route:
   * /services/talent-augmentation-delivery-support
   *
   * This prevents broken links and keeps the
   * current website architecture intact.
   */
  if (
    serviceSlug ===
    "talent-augmentation-delivery-support"
  ) {
    return <StaffAugmentationPage />;
  }

  /*
   * All other service pages continue using
   * the existing reusable service template.
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