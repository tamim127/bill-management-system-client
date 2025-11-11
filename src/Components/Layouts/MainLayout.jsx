import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import FabMenu from "../UI/FabMenu";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <Outlet />
      </main>
      <Footer />
      <FabMenu />
    </>
  );
};

export default MainLayout;
