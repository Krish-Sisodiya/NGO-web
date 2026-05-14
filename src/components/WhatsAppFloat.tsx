import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// ============================================================================
// CONFIG
// ============================================================================
const WHATSAPP_CONFIG = {
  phoneNumber: "919685958831",

  prefillMessage:
    "Hi FSES Team! 👋 I need information about volunteering/donating.",
};

// ============================================================================
// COMPONENT
// ============================================================================
export default function WhatsAppFloat() {

  const whatsappUrl = `https://wa.me/${
    WHATSAPP_CONFIG.phoneNumber
  }?text=${encodeURIComponent(
    WHATSAPP_CONFIG.prefillMessage
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Chat"

      className="
        fixed 
        bottom-4 
        right-4 
        md:bottom-6 
        md:right-6 
        z-50
      "

      initial={{
        opacity: 0,
        scale: 0.8,
        y: 30,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}

      transition={{
        duration: 0.35,
      }}

      whileHover={{
        scale: 1.06,
      }}

      whileTap={{
        scale: 0.94,
      }}
    >

      {/* BUTTON */}
      <div
        className="
          relative
          flex
          items-center
          justify-center

          h-12
          w-12

          md:h-14
          md:w-14

          rounded-full

          bg-[#25D366]

          shadow-lg

          border-2
          border-white/20

          transition-all
          duration-300

          hover:bg-[#20ba5a]
        "
      >

        {/* ICON */}
        <FaWhatsapp
          className="
            text-white

            text-[26px]
            md:text-[30px]
          "
        />

        {/* ONLINE DOT */}
        <span
          className="
            absolute
            top-1
            right-1

            h-2.5
            w-2.5

            rounded-full
            bg-white
            border
            border-[#25D366]
          "
        />
      </div>
    </motion.a>
  );
}