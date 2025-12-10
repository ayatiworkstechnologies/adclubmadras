// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layout/MainLayout";

// Pages/Sections
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "./components/NotFoundPage";
import TermsConditions from "./pages/TermsandConditions";
import RefundPolicy from "./pages/RefundandCancellation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GallaryPage from "./pages/GallaryPage";
import GallaryDetailePage from "./pages/Gallary/GallaryDetailsPage";
import MemberLoginApplication from "./pages/MemberLoginApplication";
import EventPages from "./pages/Eventpages";

// Homepage sections
import HeroSection from "@/pages/Home/HeroSection";
import LegacySection from "@/pages/Home/LegacySection";
import CommunityBanner from "@/pages/Home/CommunityBanner";
import WhyJoinUsBanner from "@/pages/Home/WhyJoinUsBanner";
import EventGrid from "@/pages/Home/EventGrid";
import EventSection from "@/pages/Home/EventSection";
import UpcomingEvents from "@/pages/Home/UpcomingEvents";
import LatestNews from "@/pages/Home/LatestNews";
import JoinUsBanner from "@/pages/Home/JoinUsBanner";
import JoinUsSection from "@/pages/Home/JoinUsSection";
import DiscoverMoments from "@/pages/Home/DiscoverMoments";
import AnimatedBackground from "./components/background";
import CareerPages from "./pages/CareerPage";
import ForgotPassword from "./pages/ForgotPassword";
import MembershipPage from "./pages/MembershipPage";
import LoginForm from "./components/LoginForm";
import PgdaCard from "./pages/Home/PGDA";
import MembershipForm from "./components/MembershipForm";
import ProfilePage from "./pages/ProfilePage";
import EventDetailPage from "./pages/Event/EventDetailPage";

import PaymentStatus from "./components/PaymentStatus";
import MembershipRenewalForm from "./components/MembershipReNewForm";
import PressRelease from "./pages/PressRelease";

// 🔁 Scroll to Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function AdminRedirect() {
  React.useEffect(() => {
    window.location.href = "https://www.adclubmadras.com/admin/acm/console/login";
  }, []);

  return null; // You can return a loader here if you want
}
// 🏠 Homepage with sections
function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <HeroSection />
      <LegacySection />
      <CommunityBanner />
      <PgdaCard />
      <WhyJoinUsBanner />
      {/* <EventGrid /> */}
      <EventSection />
      <UpcomingEvents />
      {/* <LatestNews /> */}
      <JoinUsBanner />
      <JoinUsSection />
      <DiscoverMoments />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
        />
        <Route
          path="/events"
          element={
            <MainLayout>
              <EventPages />
            </MainLayout>
          }
        />

        <Route path="/events/:eventSlug" element={<MainLayout><EventDetailPage /></MainLayout>} />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
        />
        <Route
          path="/press-release"
          element={
            <MainLayout>
              <PressRelease />
            </MainLayout>
          }
        />
        <Route
          path="/membership"
          element={
            <MainLayout>
              <MembershipPage />
            </MainLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <MainLayout>
              <GallaryPage />
            </MainLayout>
          }
        />
        <Route
          path="/gallery/:id"
          element={
            <MainLayout>
              <GallaryDetailePage />
            </MainLayout>
          }
        />
        <Route
          path="/career"
          element={
            <MainLayout>
              <CareerPages />
            </MainLayout>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <MainLayout>
              <TermsConditions />
            </MainLayout>
          }
        />
        <Route
          path="/refund-and-cancellation"
          element={
            <MainLayout>
              <RefundPolicy />
            </MainLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <MainLayout>
              <PrivacyPolicy />
            </MainLayout>
          }
        />
        {/* <Route
          path="/forgot-password"
          element={
            <MainLayout>
              <ForgotPassword />
            </MainLayout>
          }
        /> */}
        <Route
          path="forgot/password/reset/:id"
          element={
            <MainLayout>
              <ForgotPassword />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout>
              <LoginForm />
            </MainLayout>
          }
        />
        <Route path="/admin" element={<AdminRedirect />} />

        <Route
          path="/membership-application"
          element={
            <MainLayout>
              <MembershipForm />
            </MainLayout>
          }
        />

        <Route
          path="/membership-renewal"
          element={
            <MainLayout>
              <MembershipRenewalForm />
            </MainLayout>
          }
        />
        
        <Route path="/payment-status" element={ <MainLayout><PaymentStatus /></MainLayout>} />
         <Route
          path="/profile"
          element={
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
