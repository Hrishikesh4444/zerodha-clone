// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import React,{useState} from 'react';
// import {BrowserRouter, Routes,Route} from "react-router-dom";
// import HomePage from './landing_page/home/HomePage';
// import Signup from './landing_page/signup/Signup';
// import AboutPage from './landing_page/about/AboutPage';
// import ProductsPage from './landing_page/products/ProductsPage';
// import PricingPage from './landing_page/pricing/PricingPage';
// import SupportPage from './landing_page/support/SupportPage'
// import Navbar from './landing_page/Navbar';
// import Footer from './landing_page/Footer';
// import NotFound from './landing_page/NotFound';
// import Login from './landing_page/login/Login';
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//     <Navbar/>
//       <Routes>
//           <Route path="/" element={<HomePage/>} />
//           <Route path="/signup" element={<Signup/>} />
//           <Route path="/login" element={<Login/>} />
//           <Route path="/about" element={<AboutPage/>} />
//           <Route path="/product" element={<ProductsPage/>} />
//           <Route path="/pricing" element={<PricingPage/>} />
//           <Route path="/support" element={<SupportPage/>} />
//           <Route path="*" element={<NotFound/>} />
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   </StrictMode>
// )
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/login/Login";
import { GlobalStateProvider } from './landing_page/GlobalStateContext';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalStateProvider>
  </StrictMode>
);
