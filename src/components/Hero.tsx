import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-ngo-primary pt-20 overflow-hidden">
      {/* 🔹 Background Image + Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
          alt="Community learning"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ngo-primary/95 via-ngo-primary/80 to-ngo-primary/60"></div>
      </div>

      {/* 🔹 Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-8 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-7rem)] gap-10 lg:gap-16">
          {/* Left: Text & CTAs */}
          <div className="text-white text-center lg:text-left max-w-2xl mx-auto lg:mx-0 w-full">
            {/* Trust Badge 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium border border-white/20 mb-6"
            >
              <ShieldCheck size={14} /> Registered NGO | Impact Since 2015
            </motion.div>
            */}

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            >
              Empowering Communities,
              <br />
              <span className="text-ngo-secondary">
                Building Brighter Futures
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
            >
              Every child deserves education. Every family deserves dignity.
              Join 5,000+ volunteers creating sustainable change across India.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary Button 
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-ngo-secondary to-orange-500 text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 group shadow-lg"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                Donate Now <Heart size={18} className="group-hover:scale-110 transition-transform" />
              </motion.button>
              */}

              {/* Secondary Button */}
              <motion.button
  onClick={() => navigate("/volunteer")}

  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}

  className="
    border-2
    border-white/40
    backdrop-blur-sm
    hover:bg-white/10
    text-white
    px-8
    py-3.5
    rounded-full
    font-semibold
    flex
    items-center
    justify-center
    gap-2
    transition
    group
  "
>
  Become a Volunteer

  <ArrowRight
    size={18}
    className="group-hover:translate-x-1 transition-transform"
  />
</motion.button>

            {/* Trust Stats 
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-300"
            >

              
              <div className="flex items-center gap-2">
                <Users size={16} className="text-ngo-secondary" />
                <span>5,000+ Volunteers</span>
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-ngo-secondary" />
                <span>12 States Covered</span>
              </div>
            </motion.div>
            */}
          </div>

          {/* Right: Image & Floating Elements (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block relative w-full max-w-md"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop"
                alt="Community support"
                className="rounded-3xl shadow-2xl border-4 border-white/10 w-full h-[480px] object-cover"
              />

              {/* Floating Stats Card 
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
              >
                
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-ngo-primary">50K+</p>
                    <p className="text-xs text-gray-500 font-medium">Lives Impacted</p>
                  </div>
                </div>
               
              </motion.div>
 */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔹 Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
