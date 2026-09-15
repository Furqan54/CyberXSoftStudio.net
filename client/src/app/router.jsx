import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layout/PublicLayout";

import HomePage from "../features/home/HomePage";
import ServicesPage from "../features/services/ServicesPage";
import ServiceDetailPage from "../features/services/ServiceDetailPage";
import CaseStudiesPage from "../features/case-studies/CaseStudiesPage";
import InsightsPage from "../features/insights/InsightsPage";
import AboutPage from "../features/about/AboutPage";
import ContactPage from "../features/contact/ContactPage";

import NotFoundPage from "./NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/:serviceSlug",
        element: <ServiceDetailPage />,
      },
      {
        path: "case-studies",
        element: <CaseStudiesPage />,
      },
      {
        path: "insights",
        element: <InsightsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);