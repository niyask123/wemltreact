import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/headerFooter/headers/Header";
import Footer from "../components/headerFooter/footer/Footer";
import PackageHeader from "../components/headerFooter/headers/PackageHeader";

export default function UserLayout() {
  const location = useLocation(); // Get current route

  const isPackageDetailsPage = location.pathname.startsWith("/package/"); // Check if it's PackageDetails

  return (
    <>
      {isPackageDetailsPage ? <PackageHeader /> : <Header />}
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
