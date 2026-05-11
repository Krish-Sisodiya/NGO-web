import { motion } from "framer-motion";
import { 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp 
} from "react-icons/fa";
import { ArrowRight, ShieldCheck, Clock, MessageCircle, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

// ============================================================================
// 📞 CONTACT INFO DATA
// ============================================================================
const CONTACT_CARDS = [
  {
    icon: <FaEnvelope size={20} />,
    title: "Email Us",
    detail: "info@hopengo.org",
    sub: "We reply within 24 hours",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: <FaPhoneAlt size={20} />,
    title: "Call Us",
    detail: "+91 98765 43210",
    sub: "Mon-Sat, 9AM - 6PM",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    title: "Visit Our Office",
    detail: "New Delhi, India",
    sub: "123 Hope Street, Sector 5",
    color: "text-ngo-secondary",
    bg: "bg-orange-50"
  },
  {
    icon: <FaClock size={20} />,
    title: "Working Hours",
    detail: "Monday - Saturday",
    sub: "9:00 AM - 6:00 PM IST",
    color: "text-purple-600",
    bg: "bg-purple-50"
  }
];

// ============================================================================
//  MAIN COMPONENT
// ============================================================================
export default function ContactPage() {
  return (
    <>
      <Header />
      
      {/* 🔹 Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-ngo-primary via-blue-900 to-black overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-ngo-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ngo-primary/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 mb-6"
            >
              <MessageCircle size={14} className="text-ngo-secondary" /> We're Here to Help
            </motion.span>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get In <span className="text-ngo-secondary">Touch</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Have a question, want to volunteer, or need support? Reach out to us. Our team responds within 24 hours with transparency and care.
            </p>
            
            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="mailto:info@hopengo.org"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold border border-white/30 transition-all"
              >
                <FaEnvelope size={16} /> Email Directly
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-lg transition-all"
              >
                <FaWhatsapp size={16} /> Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*  Contact Info Cards */}
      <section className="py-10 md:py-16 bg-white -mt-8 md:-mt-12 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {CONTACT_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.12)" }}
                className="bg-ngo-bg p-6 rounded-2xl border border-gray-100 hover:border-ngo-secondary/30 transition-all group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-ngo-primary mb-1">{card.title}</h3>
                <p className="text-gray-800 font-medium text-sm mb-1">{card.detail}</p>
                <p className="text-gray-500 text-xs">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Main Content: Form + Direct Contact */}
      <section className="py-16 md:py-24 bg-ngo-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            
            {/* Left: Contact Form (Takes 3 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 w-full"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-ngo-primary/10 flex items-center justify-center">
                    <MessageCircle size={20} className="text-ngo-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-ngo-primary">Send Us a Message</h2>
                    <p className="text-gray-500 text-sm">Fill out the form below & we'll get back to you shortly.</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </motion.div>

            {/* Right: Direct Contact & Socials (Takes 2 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-ngo-primary to-blue-900 text-white p-6 md:p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-ngo-secondary" /> Why Reach Out?
                </h3>
                <ul className="space-y-4 text-gray-200 text-sm">
                  {[
                    "Transparent fund utilization reports",
                    "Volunteer onboarding & training details",
                    "Partnership & CSR collaboration queries",
                    "Beneficiary support & grievance redressal"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-ngo-primary mb-4">Follow Our Journey</h3>
                <div className="flex items-center gap-3">
                  {[
                    { icon: <FaFacebookF size={16} />, url: "#", color: "hover:bg-blue-600" },
                    { icon: <FaTwitter size={16} />, url: "#", color: "hover:bg-sky-500" },
                    { icon: <FaInstagram size={16} />, url: "#", color: "hover:bg-pink-600" },
                    { icon: <FaLinkedinIn size={16} />, url: "#", color: "hover:bg-blue-700" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-full bg-gray-100 ${social.color} text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm`}
                      aria-label="Social link"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="flex items-center gap-4 bg-orange-50 border border-orange-200 p-4 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-ngo-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-ngo-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Average Response Time</p>
                  <p className="text-xs text-gray-600">Under 24 hours on business days</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔹 CTA Banner */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-ngo-primary to-blue-800 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_#F59E0B_0%,_transparent_50%)]" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Create Impact Together?
              </h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Join 5,000+ volunteers and donors who are transforming communities across India.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/volunteer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ngo-secondary hover:bg-orange-500 text-white rounded-full font-semibold shadow-lg transition-all"
                >
                  Become a Volunteer <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="/donate"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold border border-white/30 transition-all"
                >
                  Make a Donation
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}