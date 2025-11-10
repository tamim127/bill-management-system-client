import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./Components/Layouts/PrivateRoutes";
import BillDetails from "./Pages/BillDetails";

import MyPayBills from "./Pages/MyBills";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import Profile from "./Pages/Profile";
import FAQ from "./Pages/FAQ";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Layouts/Footer";
import Navbar from "./Components/Layouts/Navbar";
import ForgotPassword from "./Pages/ForgotPassword";
import Bills from "./Pages/Bills";
import About from "./Pages/About";
import Help from "./Pages/Help";
import Contact from "./Pages/Contact";
import TermsPrivacy from "./Pages/TermsPrivacy";
import Home from "./Pages/Home/Home";
 // Make sure file name matches

// Pages

export default function App() {
 const [bills, setBills] = useState([]);
  useEffect(() => {
  fetch("http://localhost:3000/bills")
    .then((response) => response.json())
    .then((data) => setBills(data))
    .catch((error) => console.error("Error fetching bills:", error));
}, []);
  


  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bills/:id"
            element={
              <PrivateRoute>
                <BillDetails bills={bills} />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-bills"
            element={
              <PrivateRoute>
                <MyPayBills />
              </PrivateRoute>
            }
          />
         
          <Route path="/login" element={<Login />} />,
          <Route
            path="/bills"
            element={<Bills bills={bills} setBills={setBills} />}
          />
          ,
          <Route path="/register" element={<Register />} />,
          <Route path="/about" element={<About />} />,
          <Route path="/contact" element={<Contact />} />,
          <Route path="/termsPrivacy" element={<TermsPrivacy />} />,

          <Route path="/help" element={<Help />} />,
          <Route path="/forgot-password" element={<ForgotPassword />} />,
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
