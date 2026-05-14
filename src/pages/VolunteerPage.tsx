import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function VolunteerPage() {
  return (
    <>
      <Header />

      {/* FORM SECTION */}
      <section className="min-h-screen bg-ngo-bg py-24 md:py-32">

        <div className="container mx-auto px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-5 shadow-xl sm:p-8 md:p-10">

            <ContactForm />

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}