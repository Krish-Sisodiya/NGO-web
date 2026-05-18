import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowUp,
  FaCheckCircle,
} from "react-icons/fa";

/* ============================================================================
   DATA
============================================================================ */

const FOOTER_LINKS = {
  quick: [
    { name: "Home", hash: "#home" },
    { name: "About Us", hash: "#about" },
    { name: "Our Projects", hash: "#causes" },
    { name: "Contact", hash: "#contact" },
  ],

  causes: [
    {
      name: "School of Second Chance",
      hash: "#causes",
    },
    {
      name: "Guest Lectures",
      hash: "#causes",
    },
    {
      name: "Sunday Shikshak",
      hash: "#causes",
    },
  ],

  social: [
    {
      icon: <FaInstagram size={15} />,
      url: "https://www.instagram.com/fses.ngo?igsh=Mm1lNmQ2cTQydGlv",
      label: "Instagram",
      color: "hover:bg-[#E4405F]",
    },
    {
      icon: <FaLinkedinIn size={15} />,
      url: "https://www.linkedin.com/company/falconarmyngo/",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2]",
    },
  ],
};

/* ============================================================================
   HELPER: Smooth Scroll Function
============================================================================ */
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
  e.preventDefault();
  const element = document.querySelector(hash);
  if (element) {
    const headerOffset = 80; // Adjust based on your header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/* ============================================================================
   COMPONENT
============================================================================ */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#071226] via-[#08182f] to-black text-white">
      {/* BACKGROUND EFFECT */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            {/* LOGO */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="group mb-5 flex items-center gap-3"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                className="overflow-hidden rounded-full shadow-lg"
              >
                <img
                  src="/assets/fses-logo.png"
                  alt="FSES Logo"
                  className="h-11 w-11 object-cover"
                />
              </motion.div>
              <h2 className="text-2xl font-bold tracking-wide text-white">
                FS<span className="text-orange-400">ES</span>
              </h2>
            </a>

            {/* TEXT */}
            <p className="text-sm leading-relaxed text-gray-300">
              Empowering communities through education, healthcare,
              and sustainable development since 2015.
            </p>

            {/* CERTIFICATES */}
            <div className="mt-6">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[2px] text-white">
                Our Certificates
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Registered NGO", file: "/docs/NGO Registration Certificate.pdf" },
                  { name: "12A", file: "/docs/12A ORDER FALCON SOCIAL AND EDUCATIONAL SOCIETY.pdf" },
                  { name: "80G", file: "/docs/80G ORDER FALCON SOCIAL AND EDUCATIONAL SOCIETY.pdf" },
                  { name: "CSR-1", file: "/certificates/csr1.pdf" },
                  { name: "NGO-Darpan", file: "/docs/ngo-drama.jpeg" },
                ].map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.file}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-gray-300 transition-all hover:border-orange-400 hover:bg-white/15"
                  >
                    <FaCheckCircle size={10} className="text-green-400" />
                    {cert.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.quick.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 4 }}>
                  <a
                    href={link.hash}
                    onClick={(e) => scrollToSection(e, link.hash)}
                    className="group flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CAUSES / PROJECTS */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Our Projects</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.causes.map((cause) => (
                <motion.li key={cause.name} whileHover={{ x: 4 }}>
                  <a
                    href={cause.hash}
                    onClick={(e) => scrollToSection(e, cause.hash)}
                    className="group flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    {cause.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Contact Us</h4>
            <ul className="space-y-4">
              {/* EMAIL */}
              <motion.li whileHover={{ x: 3 }} className="flex items-start gap-3 text-sm text-gray-300">
                <FaEnvelope className="mt-1 text-orange-400" />
                <a
                  href="mailto:falconarmy.ngo@gmail.com"
                  className="break-all transition-colors hover:text-orange-400"
                >
                  falconarmy.ngo@gmail.com
                </a>
              </motion.li>

              {/* PHONE */}
              <motion.li whileHover={{ x: 3 }} className="flex items-start gap-3 text-sm text-gray-300">
                <FaPhoneAlt className="mt-1 text-orange-400" />
                <a
                  href="tel:+919685958831"
                  className="transition-colors hover:text-orange-400"
                >
                  +91 9685958831
                </a>
              </motion.li>

              {/* WHATSAPP BUTTON */}
              <motion.a
                href="https://wa.me/919685958831"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-green-600 sm:w-auto"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </motion.a>
            </ul>
          </div>
        </div>

        {/* SOCIAL SECTION */}
        <div className="border-b border-white/10 py-7">
          <div className="flex flex-col items-center gap-5">
            <p className="text-sm text-gray-300">Follow Our Journey</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {FOOTER_LINKS.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-md backdrop-blur-sm transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="py-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} FSES. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Made by <span className="font-semibold text-orange-400">Sylekt Us</span>
          </p>
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      <motion.button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl transition-all duration-300 hover:from-orange-500 hover:to-orange-400 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
        aria-label="Back to top"
      >
        <FaArrowUp size={15} />
      </motion.button>
    </footer>
  );
}