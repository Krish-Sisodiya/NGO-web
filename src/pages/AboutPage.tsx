import { motion } from "framer-motion";
import { 
  FaHeart, FaUsers, FaHandHoldingHeart, FaGraduationCap,
  FaLeaf, FaGlobe, FaAward, FaChartLine, FaQuoteLeft
} from "react-icons/fa";
import { Target, Shield, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Story from "../components/Story";
import Team from "../components/Team";

// ============================================================================
// 📊 IMPACT STATS DATA
// ============================================================================
const IMPACT_STATS = [
  { icon: <FaUsers size={24} />, value: "50K+", label: "Lives Impacted", color: "text-blue-600" },
  { icon: <FaGraduationCap size={24} />, value: "12K+", label: "Students Educated", color: "text-ngo-secondary" },
  { icon: <FaHandHoldingHeart size={24} />, value: "200+", label: "Active Volunteers", color: "text-green-600" },
  { icon: <FaGlobe size={24} />, value: "8", label: "States Covered", color: "text-purple-600" }
];

// ============================================================================
// 🎯 MISSION & VISION DATA
// ============================================================================
const CORE_VALUES = [
  {
    icon: <Target size={28} />,
    title: "Our Mission",
    description: "To empower marginalized communities through education, healthcare, and sustainable livelihood programs that create lasting change.",
    color: "from-ngo-primary to-blue-700"
  },
  {
    icon: <FaLeaf size={28} />,
    title: "Our Vision",
    description: "A world where every individual has equal opportunity to thrive, regardless of their socioeconomic background.",
    color: "from-ngo-secondary to-orange-600"
  },
  {
    icon: <Shield size={28} />,
    title: "Our Values",
    description: "Transparency, compassion, integrity, and community-led development guide every decision we make.",
    color: "from-green-500 to-emerald-600"
  }
];

// ============================================================================
// 🗓️ TIMELINE DATA
// ============================================================================
const TIMELINE = [
  {
    year: "2015",
    title: "Foundation",
    description: "HopeNGO was founded with a mission to provide quality education to underprivileged children.",
    icon: <FaHeart size={20} />,
    color: "bg-ngo-primary"
  },
  {
    year: "2018",
    title: "First Center",
    description: "Opened our first community learning hub in Delhi, serving 200+ children daily.",
    icon: <FaGraduationCap size={20} />,
    color: "bg-ngo-secondary"
  },
  {
    year: "2021",
    title: "Digital Expansion",
    description: "Launched online learning programs, reaching 10,000+ students across rural India.",
    icon: <FaGlobe size={20} />,
    color: "bg-green-500"
  },
  {
    year: "2024",
    title: "National Impact",
    description: "Now active in 8 states with 200+ volunteers, creating sustainable change at scale.",
    icon: <FaChartLine size={20} />,
    color: "bg-blue-600"
  }
];

// ============================================================================
// 🧩 MAIN COMPONENT
// ============================================================================
export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* 🔹 Page Hero Section */}
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
              <FaAward size={14} className="text-ngo-secondary" /> Registered NGO Since 2015
            </motion.span>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About <span className="text-ngo-secondary">HopeNGO</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              We are a registered non-profit organization dedicated to social upliftment, education, and sustainable community development across India.
            </p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ngo-secondary to-orange-500 hover:from-ngo-primary hover:to-blue-700 text-white rounded-full font-semibold shadow-lg transition-all"
              >
                Join Our Mission <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/causes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold border border-white/30 transition-all"
              >
                Explore Causes
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Impact Stats Section */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {IMPACT_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-ngo-bg hover:shadow-lg transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-md mb-4 group-hover:shadow-lg transition-shadow ${stat.color}`}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Mission & Vision Cards */}
      <section className="py-16 md:py-24 bg-ngo-bg">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-4">
              Our <span className="text-ngo-secondary">Core Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every action we take is guided by these fundamental principles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {CORE_VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-ngo-secondary/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-ngo-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Story Section (Existing Component) */}
      <Story />

      {/* 🔹 Timeline Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
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
              Our <span className="text-ngo-secondary">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a small initiative to a nationwide movement — key milestones that shaped our path
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ngo-primary via-ngo-secondary to-green-500 rounded-full" />
            
            {/* Mobile Line */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ngo-primary via-ngo-secondary to-green-500 rounded-full" />

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {TIMELINE.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15 }}
                    className={`relative flex flex-col md:flex-row items-start gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                      <div className="bg-ngo-bg p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${item.color} text-white text-xs font-bold mb-3`}>
                          {item.icon} {item.year}
                        </span>
                        <h3 className="text-lg font-bold text-ngo-primary mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10 flex items-center justify-center md:static ml-16 md:ml-0">
                      <motion.div
                        className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center shadow-lg border-4 border-white`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Quote/Testimonial Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ngo-primary to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <FaQuoteLeft size={40} className="text-ngo-secondary/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
              "The best way to find yourself is to lose yourself in the service of others."
            </blockquote>
            <cite className="text-gray-300 not-italic flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-ngo-secondary/20 flex items-center justify-center">
                <FaHeart size={18} className="text-ngo-secondary" />
              </div>
              <div className="text-left">
                <span className="block font-semibold text-white">Mahatma Gandhi</span>
                <span className="text-sm text-gray-400">Inspiration for our mission</span>
              </div>
            </cite>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Team Section (Existing Component) */}
      <Team />

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
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of volunteers and donors who are creating sustainable change in communities across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/volunteer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-ngo-primary to-blue-700 hover:from-ngo-secondary hover:to-orange-500 text-white rounded-full font-semibold shadow-lg transition-all"
              >
                Become a Volunteer <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-ngo-primary text-ngo-primary hover:bg-ngo-primary hover:text-white rounded-full font-semibold transition-all"
              >
                Donate Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}