import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/headerFooter/headers/Header";
import Footer from "../components/headerFooter/footer/Footer";
import PackageHeader from "../components/headerFooter/headers/PackageHeader";
import SmFooterPayment from "../components/Payments/SmFooterPayment";
import ScrollBack from "../components/ScrollBack";

export default function UserLayout() {
  const location = useLocation(); // Get current route

  // Check if it's PackageDetails page or Cart page
  const isPackageOrCartPage = location.pathname.startsWith("/package/") || location.pathname === "/cart";

  return (
    <>
      <ScrollBack />
      {isPackageOrCartPage ? <PackageHeader /> : <Header />}
      <div className="">
        <Outlet />
      </div>
      {isPackageOrCartPage ? "" : <Footer />}
    </>
  );
}
