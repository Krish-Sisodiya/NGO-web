import { motion } from "framer-motion";
import { BookOpen, HeartPulse, Sprout, ArrowRight } from "lucide-react";

const causes = [
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Education For All",
    desc: "Providing free schooling, digital literacy, and mentorship to underprivileged children across rural India.",
    impact: "12,000+ Students Enrolled",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    title: "Community Health",
    desc: "Mobile clinics, maternal care, mental health awareness, and sanitation drives for vulnerable families.",
    impact: "50,000+ Beneficiaries",
    gradient: "from-red-500 to-pink-400"
  },
  {
    icon: <Sprout className="w-7 h-7" />,
    title: "Sustainable Livelihood",
    desc: "Skill training, micro-entrepreneurship support, and women empowerment programs for financial independence.",
    impact: "3,500+ Families Empowered",
    gradient: "from-emerald-500 to-teal-400"
  }
];

export default function Causes() {
  return (
    <section className="py-16 md:py-24 bg-ngo-bg relative overflow-hidden">
      {/* 🔹 Soft Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-ngo-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* 🔹 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ngo-primary mb-4">
            Our Core <span className="text-ngo-secondary">Initiatives</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Focused, transparent programs creating measurable impact in education, healthcare, and sustainable livelihoods.
          </p>
        </motion.div>

        {/* 🔹 Causes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {causes.map((cause, i) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-ngo-secondary/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cause.gradient} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {cause.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl md:text-2xl font-bold text-ngo-text mb-3 group-hover:text-ngo-secondary transition-colors">
                {cause.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                {cause.desc}
              </p>

              {/* Impact Badge */}
              <div className="bg-ngo-bg/70 px-4 py-2 rounded-lg mb-6 inline-block backdrop-blur-sm">
                <span className="text-ngo-primary font-semibold text-sm">🎯 {cause.impact}</span>
              </div>

              {/* CTA Link */}
              <button className="flex items-center gap-2 text-ngo-secondary font-semibold group/btn">
                <span className="border-b border-ngo-secondary pb-0.5 group-hover/btn:border-b-2 transition-all">
                  Learn More
                </span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}