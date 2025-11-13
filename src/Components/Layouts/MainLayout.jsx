import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import FabMenu from "../UI/FabMenu";
import ScrollToTop from "../UI/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-7xl mx-auto bg-gray-50 text-gray-900">
        <Outlet />
      </main>
      <Footer />
      <FabMenu />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
