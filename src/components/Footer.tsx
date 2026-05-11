import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHeart, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp,
  FaArrowUp, FaCheckCircle
} from "react-icons/fa";

// ============================================================================
// 📊 FOOTER DATA CONFIGURATION
// ============================================================================
const FOOTER_LINKS = {
  quick: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Causes", path: "/causes" },
    { name: "Success Stories", path: "/stories" },
    { name: "Contact", path: "/contact" },
    { name: "Volunteer", path: "/volunteer" }
  ],
  causes: [
    "Education For All",
    "Community Health",
    "Women Empowerment",
    "Sustainable Livelihood",
    "Child Protection"
  ],
  social: [
    { icon: <FaFacebookF size={16} />, url: "#", label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: <FaTwitter size={16} />, url: "#", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
    { icon: <FaInstagram size={16} />, url: "#", label: "Instagram", color: "hover:bg-[#E4405F]" },
    { icon: <FaLinkedinIn size={16} />, url: "#", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
    { icon: <FaYoutube size={16} />, url: "#", label: "YouTube", color: "hover:bg-[#FF0000]" },
    { icon: <FaWhatsapp size={16} />, url: "#", label: "WhatsApp", color: "hover:bg-[#25D366]" }
  ]
};

// ============================================================================
// ✨ PRE-DEFINED SPARKLE POSITIONS (Fixes Math.random() error)
// ============================================================================
const SPARKLE_POSITIONS = [
  { top: "15%", left: "10%" },
  { top: "35%", left: "85%" },
  { top: "60%", left: "5%" },
  { top: "80%", left: "75%" },
  { top: "25%", left: "50%" }
] as const;

// ============================================================================
// 🧩 MAIN COMPONENT
// ============================================================================
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-ngo-primary via-blue-900 to-black text-white relative overflow-hidden">
      
      {/* 🔹 Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-ngo-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-ngo-primary/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* ✨ Floating Sparkles (Pre-defined positions - No Math.random in render) */}
      {SPARKLE_POSITIONS.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-ngo-secondary/20 pointer-events-none hidden sm:block"
          style={{ top: pos.top, left: pos.left }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4
          }}
        >
         
        </motion.div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 🔹 Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 py-10 md:py-16 border-b border-white/10">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center gap-3 mb-2 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-ngo-secondary to-orange-500 flex items-center justify-center shadow-lg"
              >
                <FaHeart className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-xl font-bold tracking-wide">
                Hope<span className="text-ngo-secondary">NGO</span>
              </span>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities through education, healthcare, and sustainable development since 2015.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                <FaCheckCircle size={10} className="text-green-400" /> Registered NGO
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                <FaCheckCircle size={10} className="text-green-400" /> 80G Certified
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-base md:text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaArrowUp size={14} className="text-ngo-secondary -rotate-45" /> Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.quick.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 4 }}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-ngo-secondary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ngo-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Causes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base md:text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaHeart size={14} className="text-ngo-secondary" /> Our Causes
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.causes.map((cause) => (
                <motion.li key={cause} whileHover={{ x: 4 }}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-ngo-secondary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ngo-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {cause}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter + Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Newsletter */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-2">
                <FaEnvelope size={14} className="text-ngo-secondary" /> Stay Updated
              </h4>
              <p className="text-gray-400 text-xs mb-4">Subscribe for impact stories & updates.</p>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-ngo-secondary/50 focus:border-ngo-secondary transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-ngo-secondary to-orange-500 hover:from-ngo-primary hover:to-blue-700 text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <FaPaperPlane size={12} /> Subscribe
                </motion.button>
              </form>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-2">
                <FaPhoneAlt size={14} className="text-ngo-secondary" /> Contact Us
              </h4>
              <ul className="space-y-3 text-sm">
                <motion.li whileHover={{ x: 3 }} className="flex items-start gap-3 text-gray-300">
                  <FaEnvelope size={14} className="text-ngo-secondary mt-1 flex-shrink-0" />
                  <a href="mailto:info@hopengo.org" className="hover:text-ngo-secondary transition-colors break-all">
                    info@hopengo.org
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 3 }} className="flex items-start gap-3 text-gray-300">
                  <FaPhoneAlt size={14} className="text-ngo-secondary mt-1 flex-shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-ngo-secondary transition-colors">
                    +91 98765 43210
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 3 }} className="flex items-start gap-3 text-gray-300">
                  <FaMapMarkerAlt size={14} className="text-ngo-secondary mt-1 flex-shrink-0" />
                  <span>New Delhi, India</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 🔹 Middle Section: Social Links */}
        <div className="py-6 md:py-8 border-b border-white/10">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-4">Follow our journey</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {FOOTER_LINKS.social.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-white/10 hover:bg-ngo-primary ${social.color} text-white flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-sm border border-white/20`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* WhatsApp CTA - Full width on mobile */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm font-medium transition-all shadow-lg w-full sm:w-auto"
            >
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </motion.a>
          </div>
        </div>

        {/* 🔹 Bottom Section: Copyright */}
        <div className="py-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} HopeNGO. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
            Made with <FaHeart size={10} className="text-ngo-secondary" /> for humanity
          </p>
          
          {/* Legal Links - Stack on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-ngo-secondary transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/terms" className="hover:text-ngo-secondary transition-colors">Terms of Use</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/donate" className="text-ngo-secondary font-medium hover:underline">Donate Now</Link>
          </div>
        </div>
      </div>

      {/* 🔹 Back to Top Button - Hide on very small screens */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-ngo-primary to-blue-700 hover:from-ngo-secondary hover:to-orange-500 text-white flex items-center justify-center shadow-xl transition-all duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp size={16} />
      </motion.button>
    </footer>
  );
}