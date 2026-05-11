import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// ============================================================================
// ⚙️ CONFIGURATION (Update with your actual NGO number)
// ============================================================================
const WHATSAPP_CONFIG = {
  phoneNumber: "919876543210", // Format: CountryCode + Number (NO + or spaces)
  prefillMessage: "Hi HopeNGO Team! 👋 I need information about volunteering/donating.",
  tooltip: "Chat with us on WhatsApp"
};

// ============================================================================
// 🧩 MAIN COMPONENT
// ============================================================================
export default function WhatsAppFloat() {
  // Build WhatsApp URL with encoded message
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.prefillMessage)}`;

  return (
    <>
      {/* 🔹 Tooltip Label (Desktop Hover) */}
      <motion.span
        className="hidden md:block fixed bottom-20 right-6 z-40 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium border border-gray-200 pointer-events-none"
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        {WHATSAPP_CONFIG.tooltip}
        {/* Tooltip Arrow */}
        <span className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45" />
      </motion.span>

      {/* 🔹 Main WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
        
        // Pulse animation on mount
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        
        // Hover: Slight lift + glow
        whileHover={{ 
          scale: 1.1, 
          y: -4,
          boxShadow: "0 20px 40px -10px rgba(37, 211, 102, 0.5)"
        }}
        
        // Tap: Subtle press effect
        whileTap={{ scale: 0.95 }}
      >
        {/* Outer Glow Ring (Animated) */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500/30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Main Button Container */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-500 via-green-400 to-emerald-500 flex items-center justify-center shadow-2xl border-2 border-white/30 overflow-hidden">
          
          {/* Shine Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          
          {/* WhatsApp Icon */}
          <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-sm" />
          
          {/* NGO Badge (Small Orange Dot) */}
          <motion.span
            className="absolute -top-1 -right-1 w-4 h-4 bg-ngo-secondary rounded-full border-2 border-white flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.span>
        </div>

        {/* Mobile Tooltip (Brief, appears after 2s) */}
        <motion.span
          className="md:hidden absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.3 }}
        >
          Chat with us
          {/* Arrow */}
          <span className="absolute top-full right-4 w-2 h-2 bg-gray-900 rotate-45" />
        </motion.span>
      </motion.a>

      {/* 🔹 Optional: Click Counter Badge (Shows "New" or count) */}
      <motion.div
        className="fixed bottom-6 right-20 z-40 hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-gray-700">We're online!</span>
      </motion.div>
    </>
  );
}