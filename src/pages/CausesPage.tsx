import { motion } from "framer-motion";
import { 
  FaHeart, FaGraduationCap, FaHandHoldingHeart,
  FaUsers, FaGlobe, FaAward, FaCamera, FaPlayCircle,
  FaQuoteLeft, FaArrowRight, FaCheckCircle
} from "react-icons/fa";
import { Target, Shield, Lightbulb, ArrowRight as ArrowRightLucide } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Causes from "../components/Causes";

// ============================================================================
// 📊 VISION & MISSION DATA
// ============================================================================
const CORE_PURPOSE = {
  mission: {
    icon: <Target size={32} />,
    title: "Our Mission",
    description: "To create sustainable, measurable impact in education, healthcare, and livelihoods through community-driven programs that empower marginalized groups across India.",
    points: [
      "Provide quality education to 100K+ underprivileged children by 2030",
      "Establish 50+ community health centers in rural areas",
      "Empower 10K+ women through skill development & micro-entrepreneurship",
      "Ensure 100% transparency in fund utilization & impact reporting"
    ],
    gradient: "from-ngo-primary to-blue-700"
  },
  vision: {
    icon: <Lightbulb size={32} />,
    title: "Our Vision",
    description: "A world where every individual, regardless of their background, has equal access to opportunities that enable them to live with dignity, purpose, and hope.",
    points: [
      "Zero child dropout rates in our operational regions",
      "Self-sustaining communities leading their own development",
      "Nationwide network of empowered volunteers & partners",
      "Systemic change through advocacy & policy engagement"
    ],
    gradient: "from-ngo-secondary to-orange-600"
  },
  values: {
    icon: <Shield size={32} />,
    title: "Our Values",
    description: "Every decision we make is guided by these non-negotiable principles that define who we are and how we work.",
    points: [
      "Transparency: Open books, open hearts, open impact",
      "Compassion: People first, always",
      "Integrity: Doing right, even when no one is watching",
      "Innovation: Creative solutions for complex challenges"
    ],
    gradient: "from-green-500 to-emerald-600"
  }
};

// ============================================================================
// 🖼️ GALLERY DATA (Replace with actual NGO photos)
// ============================================================================
const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    title: "Education Program",
    category: "Education",
    description: "Children learning in our community center"
  },
  {
    src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=800&auto=format&fit=crop",
    title: "Health Camp",
    category: "Healthcare",
    description: "Free medical checkup camp in rural village"
  },
  {
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop",
    title: "Women Empowerment",
    category: "Livelihood",
    description: "Skill training session for women entrepreneurs"
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop",
    title: "Community Building",
    category: "Impact",
    description: "Volunteers working together for local development"
  },
  {
    src: "https://images.unsplash.com/photo-1529390003868-6c640a9376c8?q=80&w=800&auto=format&fit=crop",
    title: "Digital Literacy",
    category: "Education",
    description: "Teaching computer skills to rural youth"
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-64a4aa10a671?q=80&w=800&auto=format&fit=crop",
    title: "Clean Water Initiative",
    category: "Healthcare",
    description: "Installing water purification systems"
  }
];

// ============================================================================
// 📈 IMPACT METRICS
// ============================================================================
const IMPACT_METRICS = [
  { icon: <FaGraduationCap size={24} />, value: "12,000+", label: "Students Educated", color: "text-blue-600" },
  { icon: <FaHandHoldingHeart size={24} />, value: "50,000+", label: "Health Checkups", color: "text-green-600" },
  { icon: <FaUsers size={24} />, value: "3,500+", label: "Women Empowered", color: "text-ngo-secondary" },
  { icon: <FaGlobe size={24} />, value: "8", label: "States Active", color: "text-purple-600" }
];

// ============================================================================
// 🧩 MAIN COMPONENT
// ============================================================================
export default function CausesPage() {
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
              <FaAward size={14} className="text-ngo-secondary" /> Impact-Driven Initiatives
            </motion.span>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-ngo-secondary">Causes</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Every initiative is designed for long-term, measurable impact. Explore our programs and choose how you'd like to make a difference.
            </p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#causes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ngo-secondary to-orange-500 hover:from-ngo-primary hover:to-blue-700 text-white rounded-full font-semibold shadow-lg transition-all"
              >
                Explore Programs <ArrowRightLucide size={18} />
              </motion.a>
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold border border-white/30 transition-all"
              >
                <FaCamera size={16} /> View Gallery
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Impact Metrics Section */}
      <section className="py-10 md:py-14 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {IMPACT_METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4 md:p-6 rounded-xl bg-ngo-bg hover:shadow-md transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white shadow-sm mb-3 ${metric.color}`}
                >
                  {metric.icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-ngo-primary mb-0.5">{metric.value}</h3>
                <p className="text-gray-600 text-xs md:text-sm font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-ngo-bg">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-4">
              Our <span className="text-ngo-secondary">Purpose</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by clear mission, inspired by bold vision, grounded in unwavering values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {[CORE_PURPOSE.mission, CORE_PURPOSE.vision, CORE_PURPOSE.values].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-ngo-secondary/30 transition-all group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-ngo-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.description}</p>
                
                {/* Points List */}
                <ul className="space-y-2.5">
                  {item.points.map((point, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + idx * 0.05 }}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <FaCheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Causes Section (Existing Component) */}
      <div id="causes">
        <Causes />
      </div>

      {/* 🔹 Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-ngo-bg to-white pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-4">
              Impact <span className="text-ngo-secondary">In Action</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real moments from our programs — see the change we're creating together
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {GALLERY_IMAGES.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer"
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2 py-1 bg-ngo-secondary/90 text-white text-xs rounded-full mb-2">
                    {image.category}
                  </span>
                  <h4 className="text-white font-semibold text-sm mb-1">{image.title}</h4>
                  <p className="text-gray-300 text-xs">{image.description}</p>
                </div>
                
                {/* Play Icon (for video hint) */}
                <motion.div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaPlayCircle size={16} className="text-ngo-primary" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ngo-primary hover:bg-blue-800 text-white rounded-full font-medium transition-all shadow-md"
            >
              View Full Gallery <FaArrowRight size={14} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Quote/Testimonial Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-ngo-primary to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <FaQuoteLeft size={40} className="text-ngo-secondary/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8">
              "We make a living by what we get, but we make a life by what we give."
            </blockquote>
            <cite className="text-gray-300 not-italic flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-ngo-secondary/20 flex items-center justify-center">
                <FaHeart size={18} className="text-ngo-secondary" />
              </div>
              <div className="text-left">
                <span className="block font-semibold text-white">Winston Churchill</span>
                <span className="text-sm text-gray-400">Inspiring our giving spirit</span>
              </div>
            </cite>
          </motion.div>
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="py-16 md:py-24 bg-ngo-bg">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-ngo-secondary to-orange-500 text-white mb-6 shadow-lg"
            >
              <FaHandHoldingHeart size={28} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-4">
              Which Cause Resonates With You?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Your support — whether through volunteering, donating, or spreading awareness — creates ripples of change that transform lives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/volunteer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-ngo-primary to-blue-700 hover:from-ngo-secondary hover:to-orange-500 text-white rounded-full font-semibold shadow-lg transition-all"
              >
                Volunteer With Us <ArrowRightLucide size={18} />
              </motion.a>
              <motion.a
                href="/donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-ngo-primary text-ngo-primary hover:bg-ngo-primary hover:text-white rounded-full font-semibold transition-all"
              >
                Donate to a Cause
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}