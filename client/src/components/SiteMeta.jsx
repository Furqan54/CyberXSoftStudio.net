import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { services } from "../features/services/servicesData";
import { getLegalPage } from "../features/legal/legalData";

const staticMeta = {
  "/": {
    title:
      "CyberX Soft | Enterprise Technology & Digital Solutions",

    description:
      "CyberX Soft delivers enterprise technology, software, AI, cybersecurity, creative, digital growth, and talent solutions.",
  },

  "/services": {
    title:
      "Enterprise Digital Services | CyberX Soft",

    description:
      "Explore CyberX Soft services across brand strategy, creative media, AI, software, cybersecurity, data, digital governance, and talent augmentation.",
  },

  "/case-studies": {
    title:
      "Case Studies | CyberX Soft",

    description:
      "Explore enterprise technology, digital transformation, software, cybersecurity, cloud, and AI case studies from CyberX Soft.",
  },

  "/insights": {
    title:
      "Insights | CyberX Soft",

    description:
      "Read research, analysis, and practical guidance from CyberX Soft experts covering AI, cybersecurity, cloud, ERP, and digital strategy.",
  },

  "/about": {
    title:
      "About CyberX Soft | Enterprise Technology Partner",

    description:
      "Learn about CyberX Soft, our mission, leadership, capabilities, delivery model, and approach to enterprise digital transformation.",
  },

  "/contact": {
    title:
      "Contact CyberX Soft | Start a Conversation",

    description:
      "Contact CyberX Soft to discuss technology, software, AI, cybersecurity, creative, digital growth, or enterprise delivery requirements.",
  },
};

function getPageMeta(pathname) {
  const staticPage = staticMeta[pathname];

  if (staticPage) {
    return staticPage;
  }

  if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "");

    const service = services.find(
      (item) => item.slug === slug
    );

    if (service) {
      return {
        title: `${service.name} | CyberX Soft`,

        description:
          service.detail?.heroDescription ||
          service.homeDescription,
      };
    }
  }

  const legalSlug = pathname.replace("/", "");

  const legalPage = getLegalPage(legalSlug);

  if (legalPage) {
    return {
      title: `${legalPage.title} | CyberX Soft`,
      description: legalPage.intro,
    };
  }

  return {
    title: "Page Not Found | CyberX Soft",

    description:
      "The page you requested could not be found on the CyberX Soft website.",
  };
}

function SiteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);

    document.title = meta.title;

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");

      descriptionTag.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute(
      "content",
      meta.description
    );
  }, [pathname]);

  return null;
}

export default SiteMeta;