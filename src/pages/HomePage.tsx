import Header from "../components/Header";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Causes from "../components/Causes";
import Team from "../components/Team";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Causes />
      <Team />
    
      <ContactForm />
      <Footer />
    </>
  );
}