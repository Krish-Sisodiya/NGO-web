import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Users, Heart, Mail, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const navBg = scrolled || !isHome ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-gray-800" : "text-white";
  
  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <Users size={18} /> },
    { name: "Causes", path: "/causes", icon: <Heart size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
         {/* 🔵 Left: Logo */}
<Link
  to="/"
  className="flex items-center gap-3 z-10"
>

  {/* LOGO IMAGE */}
  <img
    src="/assets/fses-logo.png"
    alt="FSES Logo"
    className="h-11 w-11 object-cover"
  />

  {/* TEXT */}
  <span
    className={`text-xl font-bold tracking-wide ${textColor}`}
  >
    FS<span className="text-ngo-secondary">ES</span>
  </span>

</Link>

          {/* 🟡 Center: Navigation Tabs with Icons */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-ngo-secondary bg-white/30 backdrop-blur-sm shadow-sm" 
                      : `${textColor} hover:text-ngo-secondary hover:bg-white/10`
                  }`}
                >
                  <span className="transition-transform duration-300 hover:scale-110">{link.icon}</span>
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* 🟠 Right: Premium Join Us Button */}
         <div className="hidden lg:flex items-center z-10">
  <motion.a
    href="/volunteer"

    whileHover={{
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)",
    }}

    whileTap={{
      scale: 0.95,
    }}

    className="
      relative
      overflow-hidden

      rounded-full

      bg-gradient-to-r
      from-ngo-secondary
      to-orange-500

      px-6
      py-2.5

      text-sm
      font-semibold
      text-white

      shadow-lg

      flex
      items-center
      gap-2

      group
    "
  >

    {/* SHINE EFFECT */}
    <span
      className="
        absolute
        inset-0

        skew-x-12

        bg-white/20

        translate-x-[-100%]

        transition-transform
        duration-700

        group-hover:translate-x-[100%]
      "
    />

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
            {open ? <X className={`w-6 h-6 ${textColor}`} /> : <Menu className={`w-6 h-6 ${textColor}`} />}
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
                  <Link
                    to={link.path}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-colors ${
                      location.pathname === link.path 
                        ? "bg-ngo-secondary/10 text-ngo-secondary font-semibold" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-4 bg-gradient-to-r from-ngo-secondary to-orange-500 text-white py-3 rounded-full font-semibold shadow-md w-full hover:opacity-90 transition"
                onClick={() => setOpen(false)}
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