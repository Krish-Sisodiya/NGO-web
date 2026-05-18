import Header from "../components/Header";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Causes from "../components/Causes";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import CSR from "../components/CSR";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Causes />
      <CSR/>
      <ContactForm />
      <Footer />
    </>
  );
}