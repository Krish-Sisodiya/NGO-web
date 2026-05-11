import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CausesPage from './pages/CausesPage';
import ContactPage from './pages/ContactPage';
import WhatsAppFloat from './components/WhatsAppFloat';
import DonatePage from './pages/DonatePage';
import VolunteerPage from './pages/VolunteerPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/causes" element={<CausesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
      <WhatsAppFloat />
    </>
  );
}