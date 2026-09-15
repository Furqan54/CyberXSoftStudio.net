import { useParams } from "react-router-dom";

import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";

import NotFoundPage from "../../app/NotFoundPage";

import ServiceOverview from "./ServiceOverview";

import { getServiceBySlug } from "./servicesData";

import "./services.css";

function ServiceDetailPage() {
  const { serviceSlug } = useParams();

  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <NotFoundPage />;
  }

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
          label: "Book Free Consultation",
          path: "/contact",
        }}
        showImagePlaceholder
      />

      <ServiceOverview service={service} />

      <CTASection
        title="Ready to Turn Strategy Into Results?"
        description="Talk to our specialists about your goals, challenges, and the right delivery approach for your organization."
        buttonLabel="Book Free Consultation"
        buttonPath="/contact"
      />
    </main>
  );
}

export default ServiceDetailPage;