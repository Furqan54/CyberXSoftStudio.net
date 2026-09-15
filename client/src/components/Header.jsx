import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

import { mainNavigation } from "../config/navigation";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink
          to="/"
          className="site-header__logo"
          aria-label="CyberX Soft home"
          onClick={closeMobileMenu}
        >
          <span className="site-header__logo-main">CXS</span>
          <span className="site-header__logo-sub">CYBERX SOFT</span>
        </NavLink>

        <nav className="site-header__desktop-nav" aria-label="Main navigation">
          {mainNavigation.map((item) => {
            if (item.children) {
              return (
                <div className="site-header__dropdown" key={item.label}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `site-header__nav-link ${
                        isActive ? "site-header__nav-link--active" : ""
                      }`
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </NavLink>

                  <div className="site-header__dropdown-menu">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `site-header__dropdown-link ${
                            isActive
                              ? "site-header__dropdown-link--active"
                              : ""
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `site-header__nav-link ${
                    isActive ? "site-header__nav-link--active" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <NavLink to="/contact" className="site-header__cta">
            Book Free Consultation
          </NavLink>

          <button
            type="button"
            className="site-header__menu-button"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`site-header__mobile-menu ${
          isMobileMenuOpen ? "site-header__mobile-menu--open" : ""
        }`}
      >
        <nav
          className="container site-header__mobile-nav"
          aria-label="Mobile navigation"
        >
          {mainNavigation.map((item) => {
            if (item.children) {
              return (
                <div className="site-header__mobile-group" key={item.label}>
                  <div className="site-header__mobile-service-row">
                    <NavLink
                      to={item.path}
                      className="site-header__mobile-link"
                    >
                      {item.label}
                    </NavLink>

                    <button
                      type="button"
                      className="site-header__mobile-service-toggle"
                      aria-label="Toggle services menu"
                      aria-expanded={isMobileServicesOpen}
                      onClick={() =>
                        setIsMobileServicesOpen((current) => !current)
                      }
                    >
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={
                          isMobileServicesOpen
                            ? "site-header__mobile-chevron--open"
                            : ""
                        }
                      />
                    </button>
                  </div>

                  {isMobileServicesOpen && (
                    <div className="site-header__mobile-submenu">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className="site-header__mobile-sublink"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="site-header__mobile-link"
              >
                {item.label}
              </NavLink>
            );
          })}

          <NavLink
            to="/contact"
            className="site-header__mobile-cta"
          >
            Book Free Consultation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;