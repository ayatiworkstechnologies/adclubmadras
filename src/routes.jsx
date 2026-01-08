import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SEO from "./components/SEO";

/* Pages */
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EventPages from "./pages/Eventpages";
import EventDetailPage from "./pages/Event/EventDetailPage";
import PressRelease from "./pages/PressRelease";
import MembershipPage from "./pages/MembershipPage";
import GallaryPage from "./pages/GallaryPage";
import GallaryDetailePage from "./pages/Gallary/GallaryDetailsPage";
import CareerPages from "./pages/CareerPage";
import TermsConditions from "./pages/TermsandConditions";
import RefundPolicy from "./pages/RefundandCancellation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ForgotPassword from "./pages/ForgotPassword";
import LoginForm from "./components/LoginForm";
import MembershipForm from "./components/MembershipForm";
import MembershipRenewalForm from "./components/MembershipReNewForm";
import ProfilePage from "./pages/ProfilePage";
import PaymentStatus from "./components/PaymentStatus";
import NotFoundPage from "./components/NotFoundPage";

/* Home sections */
import AnimatedBackground from "./components/background";
import HeroSection from "./pages/Home/HeroSection";
import LegacySection from "./pages/Home/LegacySection";
import CommunityBanner from "./pages/Home/CommunityBanner";
import WhyJoinUsBanner from "./pages/Home/WhyJoinUsBanner";
import EventSection from "./pages/Home/EventSection";
import UpcomingEvents from "./pages/Home/UpcomingEvents";
import JoinUsBanner from "./pages/Home/JoinUsBanner";
import JoinUsSection from "./pages/Home/JoinUsSection";
import DiscoverMoments from "./pages/Home/DiscoverMoments";
import PgdaCard from "./pages/Home/PGDA";

/* Admin Redirect */
function AdminRedirect() {
  React.useEffect(() => {
    window.location.href =
      "https://www.adclubmadras.com/admin/acm/console/login";
  }, []);
  return null;
}

/* Home Page */
function HomePage() {
  return (
    <>
      <SEO
        title="Home | Ad Club Madras"
        description="Ad Club Madras is a creative advertising agency delivering branding and digital solutions."
      />
      <AnimatedBackground />
      <HeroSection />
      <LegacySection />
      <CommunityBanner />
      <PgdaCard />
      <WhyJoinUsBanner />
      <EventSection />
      <UpcomingEvents />
      <JoinUsBanner />
      <JoinUsSection />
      <DiscoverMoments />
    </>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/about-us" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/events" element={<MainLayout><EventPages /></MainLayout>} />
      <Route path="/events/:eventSlug" element={<MainLayout><EventDetailPage /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
      <Route path="/press-release" element={<MainLayout><PressRelease /></MainLayout>} />
      <Route path="/membership" element={<MainLayout><MembershipPage /></MainLayout>} />
      <Route path="/gallery" element={<MainLayout><GallaryPage /></MainLayout>} />
      <Route path="/gallery/:id" element={<MainLayout><GallaryDetailePage /></MainLayout>} />
      <Route path="/career" element={<MainLayout><CareerPages /></MainLayout>} />
      <Route path="/terms-conditions" element={<MainLayout><TermsConditions /></MainLayout>} />
      <Route path="/refund-and-cancellation" element={<MainLayout><RefundPolicy /></MainLayout>} />
      <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
      <Route path="forgot/password/reset/:id" element={<MainLayout><ForgotPassword /></MainLayout>} />
      <Route path="/login" element={<MainLayout><LoginForm /></MainLayout>} />
      <Route path="/membership-application" element={<MainLayout><MembershipForm /></MainLayout>} />
      <Route path="/membership-renewal" element={<MainLayout><MembershipRenewalForm /></MainLayout>} />
      <Route path="/payment-status" element={<MainLayout><PaymentStatus /></MainLayout>} />
      <Route path="/profile" element={<MainLayout><ProfilePage /></MainLayout>} />
      <Route path="/admin" element={<AdminRedirect />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
