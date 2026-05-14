import { motion } from "framer-motion";
import {
  FaHeart,
} from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function VolunteerPage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ngo-primary via-blue-900 to-black pt-28 pb-20 md:pt-36 md:pb-28">

        {/* Background Blur Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-ngo-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >

            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md"
            >
              <FaHeart className="text-ngo-secondary animate-pulse" />
              Join Our Volunteer Community
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Become a{" "}
              <span className="text-ngo-secondary">
                Volunteer
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
              Your time, skills, and passion can create real impact in
              education, healthcare, and community development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* APPLY FORM SECTION */}
      <section
        id="apply"
        className="relative bg-ngo-bg py-16 md:py-24"
      >

        {/* Background Design */}
        <div className="absolute top-0 left-1/2 h-40 w-[90%] -translate-x-1/2 rounded-full bg-ngo-primary/5 blur-3xl" />

        <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl"
          >

            {/* Card */}
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

              {/* Top Banner */}
              <div className="bg-gradient-to-r from-ngo-primary to-blue-800 px-6 py-10 text-center md:px-10">

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm"
                >
                  <FaHeart className="text-3xl text-ngo-secondary" />
                </motion.div>

                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Apply As a Volunteer
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 md:text-base">
                  Fill out the form below and become a part of our
                  mission to transform lives and communities.
                </p>
              </div>

              {/* Form Area */}
              <div className="p-5 sm:p-8 md:p-10">
                <ContactForm />
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}