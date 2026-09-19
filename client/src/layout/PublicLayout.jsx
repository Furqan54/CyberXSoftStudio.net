import { useEffect } from "react";
import {
  Outlet,
  useLocation,
} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteMeta from "../components/SiteMeta";

function PublicLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
      <SiteMeta />

      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default PublicLayout;