import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SEO from "./components/SEO";

/* Pages */
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./components/NotFoundPage";

/* Home Sections */
import HeroSection from "./pages/Home/HeroSection";

function HomePage() {
  return (
    <>
      <SEO
        title="Home | Ad Club Madras"
        description="Ad Club Madras is a creative advertising agency."
      />
      <HeroSection />
    </>
  );
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/about-us" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
