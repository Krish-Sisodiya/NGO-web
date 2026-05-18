import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Users, Heart, Mail, ArrowRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section based on scroll position
      const sections = ["home", "about", "causes", "contact"];
      const scrollPosition = window.scrollY + 150; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false); // Close mobile menu after click
  };

  const isHome = activeSection === "home";
  const navBg = scrolled || !isHome 
    ? "bg-white/95 backdrop-blur-md shadow-sm" 
    : "bg-transparent";
  const textColor = scrolled || !isHome 
    ? "text-gray-800" 
    : "text-white";
  
  const navLinks = [
    { name: "Home", id: "home", icon: <Home size={18} /> },
    { name: "About", id: "about", icon: <Users size={18} /> },
    { name: "Our Projects", id: "causes", icon: <Heart size={18} /> },
    { name: "Contact", id: "contact", icon: <Mail size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" >
        <nav className="flex items-center justify-between h-20">
          
          {/* 🔵 Left: Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-3 z-10"
          >
            <img
              src="/assets/fses-logo.png"
              alt="FSES Logo"
              className="h-11 w-11 object-cover"
            />
            <span className={`text-xl font-bold tracking-wide ${textColor}`}>
              FS<span className="text-ngo-secondary">ES</span>
            </span>
          </a>

          {/* 🟡 Center: Navigation Tabs with Icons */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-ngo-secondary bg-white/30 backdrop-blur-sm shadow-sm" 
                      : `${textColor} hover:text-ngo-secondary hover:bg-white/10`
                  }`}
                >
                  <span className="transition-transform duration-300 hover:scale-110">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* 🟠 Right: Premium Join Us Button */}
          <div className="hidden lg:flex items-center z-10">
  <motion.a
    href="#contact"
    onClick={(e) => {
      e.preventDefault();

      const element = document.getElementById("contact");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)",
    }}
    whileTap={{ scale: 0.95 }}
    className="
      relative overflow-hidden rounded-full
      bg-gradient-to-r from-ngo-secondary to-orange-500
      px-6 py-2.5 text-sm font-semibold text-white shadow-lg
      flex items-center gap-2 group
    "
  >
    {/* Shine Effect */}
    <span className="absolute inset-0 skew-x-12 bg-white/20 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />

    <span className="relative z-10 flex items-center gap-2">
      Join Us

      <ArrowRight
        size={16}
        className="transition-transform group-hover:translate-x-1"
      />
    </span>
  </motion.a>
</div>

          {/* 📱 Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-200/20 transition z-10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className={`w-6 h-6 ${textColor}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textColor}`} />
            )}
          </button>
        </nav>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden border-t border-gray-100"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-colors ${
                      activeSection === link.id
                        ? "bg-ngo-secondary/10 text-ngo-secondary font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </motion.div>
              ))}
              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const element = document.getElementById("volunteer");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="mt-4 bg-gradient-to-r from-ngo-secondary to-orange-500 text-white py-3 rounded-full font-semibold shadow-md w-full hover:opacity-90 transition"
              >
                Join Us Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}