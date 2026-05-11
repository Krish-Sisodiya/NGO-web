import { motion } from "framer-motion";
import { 
  Flag, Building2, Laptop, Globe, 
  Users, Heart, ArrowRight, MapPin 
} from "lucide-react";

// ============================================================================
// 📊 MILESTONE DATA
// ============================================================================
const MILESTONES = [
  {
    year: "2015",
    title: "The First Step",
    description: "Started with 5 passionate volunteers teaching underprivileged children in a small community center.",
    icon: Flag,
    color: "bg-ngo-primary",
    stats: "5 Volunteers"
  },
  {
    year: "2018",
    title: "First Learning Hub",
    description: "Opened our first dedicated community center in Delhi, serving 200+ children with education & meals.",
    icon: Building2,
    color: "bg-ngo-secondary",
    stats: "200+ Children"
  },
  {
    year: "2021",
    title: "Digital Bridge",
    description: "Launched online learning programs during pandemic, reaching 10,000+ students across rural India.",
    icon: Laptop,
    color: "bg-green-500",
    stats: "10K+ Students"
  },
  {
    year: "2024",
    title: "National Impact",
    description: "Now active in 8 states with 200+ full-time volunteers, creating sustainable change at scale.",
    icon: Globe,
    color: "bg-blue-600",
    stats: "8 States, 200+ Volunteers"
  }
];

// ============================================================================
// 🧩 MAIN COMPONENT
// ============================================================================
export default function Roadmap() {
  return (
    <section className="w-full bg-gradient-to-b from-ngo-bg to-white py-16 md:py-24 overflow-hidden relative">
      
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-ngo-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-ngo-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ngo-primary/10 text-ngo-primary rounded-full text-sm font-semibold mb-4">
            <MapPin size={14} /> Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ngo-primary mb-4">
            The Road to <span className="text-ngo-secondary">Impact</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Follow our path from a small local initiative to a nationwide movement transforming lives.
          </p>
        </motion.div>

        {/* Roadmap Container */}
        <div className="relative">
          
          {/* 🔹 Background Track (Dashed Road) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full border-l-2 border-dashed border-gray-300" />

          {/* 🔹 Active Progress Line (Animated) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-ngo-primary via-ngo-secondary to-green-500 rounded-full origin-top"
          />

          {/* 🔹 Milestone Items */}
          <div className="space-y-0">
            {MILESTONES.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={item.year} 
                  className={`relative flex items-start mb-16 md:mb-24 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* --- Milestone Node (Center/Left) --- */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 pt-2">
                    {/* Outer Pulsing Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-ngo-secondary/20"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                    />
                    
                    {/* Icon Circle */}
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.2, type: "spring", stiffness: 180 }}
                      className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full ${item.color} flex items-center justify-center shadow-lg border-4 border-white`}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* --- Content Card --- */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 30 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                      whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(30, 58, 138, 0.15)" }}
                      className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 group cursor-default"
                    >
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${item.color} text-white text-sm font-bold mb-4 shadow-sm`}>
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        {item.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-ngo-primary mb-3 group-hover:text-ngo-secondary transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Stats & Link */}
                      <div className={`flex items-center justify-between pt-4 border-t border-gray-100 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex items-center gap-2 text-ngo-primary font-semibold text-sm">
                          <Users size={14} className="text-ngo-secondary" />
                          <span>{item.stats}</span>
                        </div>
                        <button className="inline-flex items-center gap-1.5 text-ngo-secondary font-medium text-sm group/link hover:gap-2.5 transition-all">
                          Explore
                          <ArrowRight size={14} className="transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* --- Spacer (Desktop) --- */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>

          {/*  Final Destination Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative left-6 md:left-1/2 -translate-x-1/2 mt-8 text-center"
          >
            <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3 shadow-lg ring-4 ring-green-500/20 animate-pulse" />
            <p className="text-green-600 font-semibold text-sm bg-green-50 inline-block px-4 py-2 rounded-full border border-green-200">
              🚀 Current Milestone & Beyond
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-6 py-5 rounded-2xl shadow-lg border border-gray-100">
            <Heart className="w-5 h-5 text-ngo-secondary" />
            <span className="text-gray-700 font-medium text-center sm:text-left">
              Ready to walk this path with us?
            </span>
            <button className="px-6 py-2.5 bg-gradient-to-r from-ngo-primary to-ngo-secondary text-white rounded-full text-sm font-semibold hover:opacity-90 transition shadow-md hover:shadow-lg">
              Join the Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}