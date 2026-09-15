import { Link } from "react-router-dom";
import {
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  serviceNavigation,
  mainNavigation,
} from "../config/navigation";

import { siteConfig } from "../config/siteConfig";

function Footer() {
  const companyLinks = mainNavigation.filter(
    (item) => item.label !== "Services"
  );

  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__brand">
          {/*
            LOGO PLACEHOLDER
            Replace with final CyberX Soft logo later.
          */}
          <Link
            to="/"
            className="site-footer__logo"
            aria-label="CyberX Soft home"
          >
            <span className="site-footer__logo-main">
              {siteConfig.shortName}
            </span>

            <span className="site-footer__logo-sub">
              CYBERX SOFT
            </span>
          </Link>

          <p className="site-footer__description">
            {siteConfig.description}
          </p>

          <div className="site-footer__contact">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail size={15} aria-hidden="true" />
              <span>{siteConfig.email}</span>
            </a>

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            >
              <Phone size={15} aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>

            <div className="site-footer__address">
              <MapPin size={15} aria-hidden="true" />

              <span>{siteConfig.address}</span>
            </div>
          </div>

          <div className="site-footer__socials">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className="site-footer__social-link"
                aria-label={social.label}
              >
                <ExternalLink
                  size={15}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__column">
          <Link
            to="/services"
            className="site-footer__heading-link"
          >
            Services
          </Link>

          <nav aria-label="Footer services navigation">
            <ul className="site-footer__links">
              {serviceNavigation.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="site-footer__nav-link"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__column">
          <h2 className="site-footer__heading">
            Company
          </h2>

          <nav aria-label="Footer company navigation">
            <ul className="site-footer__links">
              {companyLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="site-footer__nav-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <h2 className="site-footer__heading site-footer__heading--legal">
            Legal
          </h2>

          <nav aria-label="Footer legal navigation">
            <ul className="site-footer__links">
              {siteConfig.legalLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="site-footer__nav-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} CyberX Soft (CXS).
            All rights reserved.
          </p>

          <div className="site-footer__bottom-links">
            {siteConfig.legalLinks.map((item) => (
              <Link key={item.id} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;