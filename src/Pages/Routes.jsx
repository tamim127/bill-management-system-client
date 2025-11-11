
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";



// Pages
import Home from "./Home/Home";
import Bills from "./Bills";
import MyPayBills from "./MyBills";
import BillDetails from "./BillDetails";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import About from "./About";
import Help from "./Help";
import Contact from "./Contact";
import TermsPrivacy from "./TermsPrivacy";
import ForgotPassword from "./ForgotPassword";
import FAQ from "./FAQ";
import NotFound from "./NotFound";
import MainLayout from "../Components/Layouts/MainLayout";
import PrivateRoutes from "../Components/Layouts/PrivateRoutes"

export default function AppRoutes() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("https://bill-management-system-servers.vercel.app/bills")
      .then((response) => response.json())
      .then((data) => setBills(data))
      .catch((error) => console.error("Error fetching bills:", error));
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/bills"
          element={<Bills bills={bills} setBills={setBills} />}
        />
        <Route
          path="/bills/:id"
          element={
            <PrivateRoutes>
              <BillDetails bills={bills} />
            </PrivateRoutes>
          }
        />
        <Route
          path="/my-bills"
          element={
            <PrivateRoutes>
              <MyPayBills />
            </PrivateRoutes>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsPrivacy" element={<TermsPrivacy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>

    
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}
