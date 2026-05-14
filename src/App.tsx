import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CausesPage from "./pages/CausesPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import VolunteerPage from "./pages/VolunteerPage";

import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      {/* AUTO SCROLL TOP ON PAGE CHANGE */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/causes" element={<CausesPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/donate" element={<DonatePage />} />

        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppFloat />
    </>
  );
}