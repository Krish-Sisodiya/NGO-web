import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart, FaUsers, FaGlobe, FaAward, FaClipboardList, FaVideo, FaHandshake, FaRocket,
  FaGraduationCap, FaStethoscope, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCheckCircle,
  FaChevronDown, FaChevronUp, FaUserCircle, FaPaperPlane, FaLock
} from "react-icons/fa";
import { ArrowRight, } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ============================================================================
// 📊 VOLUNTEER ROLES DATA
// ============================================================================
const VOLUNTEER_ROLES = [
  {
    title: "Education Mentor",
    icon: <FaGraduationCap size={24} />,
    description: "Teach underprivileged children, design learning modules, or conduct digital literacy workshops.",
    commitment: "4-6 hrs/week",
    location: "On-site & Remote",
    color: "text-blue-600",
    bg: "bg-blue-50",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Healthcare Support",
    icon: <FaStethoscope size={24} />,
    description: "Assist in rural health camps, awareness drives, mental health counseling, or sanitation projects.",
    commitment: "6-8 hrs/week",
    location: "On-site",
    color: "text-green-600",
    bg: "bg-green-50",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    title: "Event & Outreach",
    icon: <FaCalendarAlt size={24} />,
    description: "Coordinate fundraising events, community drives, volunteer onboarding, and field logistics.",
    commitment: "Flexible",
    location: "Hybrid",
    color: "text-ngo-secondary",
    bg: "bg-orange-50",
    gradient: "from-orange-500 to-amber-400"
  },
  {
    title: "Digital & Tech",
    icon: <FaGlobe size={24} />,
    description: "Manage website, social media, data analysis, CRM tools, or develop apps for field teams.",
    commitment: "3-5 hrs/week",
    location: "Remote",
    color: "text-purple-600",
    bg: "bg-purple-50",
    gradient: "from-purple-500 to-pink-400"
  }
];

// ============================================================================
// 🛣️ PROCESS STEPS DATA
// ============================================================================
const PROCESS_STEPS = [
  { icon: <FaClipboardList size={20} />, title: "Apply Online", desc: "Fill the quick form with your skills & availability." },
  { icon: <FaVideo size={20} />, title: "Virtual Orientation", desc: "Join a 30-min session to understand our mission & safety protocols." },
  { icon: <FaHandshake size={20} />, title: "Role Matching", desc: "We pair you with a team based on your expertise & location." },
  { icon: <FaRocket size={20} />, title: "Start Impacting", desc: "Begin your journey with mentorship & real-time impact tracking." }
];

// ============================================================================
// 💬 TESTIMONIALS DATA
// ============================================================================
const TESTIMONIALS = [
  { name: "Ananya Sharma", role: "Education Mentor (2 yrs)", quote: "Volunteering here transformed my perspective. Seeing a child read their first book is a feeling no salary can match." },
  { name: "Rohan Mehta", role: "Tech Volunteer (1 yr)", quote: "The transparency is unmatched. I built a dashboard for field data, and now I see exactly how my code saves lives." },
  { name: "Priya Nair", role: "Healthcare Support (6 mos)", quote: "Flexible hours, incredible team, and real community impact. Best decision I made post-graduation." }
];

// ============================================================================
// ❓ FAQ DATA
// ============================================================================
const FAQS = [
  { q: "Who can volunteer?", a: "Anyone aged 16+. Students, professionals, retirees, and corporates are welcome. No prior experience needed for most roles." },
  { q: "Is there a minimum time commitment?", a: "Yes, 3 hours/week for 3 months ensures consistency and measurable impact. Flexible schedules available." },
  { q: "Do I get a certificate?", a: "Absolutely. You'll receive a digital volunteer certificate, LinkedIn recommendation, and impact report after 50+ hours." },
  { q: "Are there safety guidelines for field work?", a: "Yes. All field volunteers undergo mandatory safety training, receive ID cards, and are covered under our NGO insurance policy." }
];

// ============================================================================
// 🧩 MAIN COMPONENT
// ============================================================================
export default function VolunteerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("✅ Application submitted! Our team will contact you within 48 hours.");
    }, 1500);
  };

  return (
    <>
      <Header />
      
      {/* 🔹 Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-ngo-primary via-blue-900 to-black overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-ngo-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ngo-primary/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 mb-6">
              <FaHeart size={14} className="text-ngo-secondary animate-pulse" /> Join 2,000+ Changemakers
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Volunteer With <span className="text-ngo-secondary">Purpose</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Lend your time, skills, and passion. Create measurable impact in education, healthcare, and community development across India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm md:text-base">
              {[{ label: "Active Volunteers", value: "2,000+" }, { label: "Hours Contributed", value: "45K+" }, { label: "Communities Reached", value: "120+" }].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" size={16} />
                  <span><strong className="text-white">{stat.value}</strong> {stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Why Volunteer? (Impact Cards) */}
      <section className="py-12 md:py-20 bg-white -mt-8 md:-mt-12 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-3">Why <span className="text-ngo-secondary">Volunteer?</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">More than just service — it's growth, connection, and real-world impact.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <FaAward size={24} />, title: "Skill Development", desc: "Gain leadership, project management & communication skills." },
              { icon: <FaUsers size={24} />, title: "Community Network", desc: "Connect with passionate changemakers & industry mentors." },
              { icon: <FaGlobe size={24} />, title: "Real Impact", desc: "See exactly how your hours translate into lives transformed." },
              { icon: <FaHeart size={24} />, title: "Personal Growth", desc: "Build empathy, resilience & a deeper sense of purpose." }
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }} className="bg-ngo-bg p-6 rounded-2xl border border-gray-100 hover:border-ngo-secondary/30 shadow-md transition-all group">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-ngo-primary mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-ngo-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Volunteer Roles Grid */}
      <section className="py-16 md:py-24 bg-ngo-bg">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-3">Explore <span className="text-ngo-secondary">Roles</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect fit for your skills, schedule, and passion.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {VOLUNTEER_ROLES.map((role, i) => (
              <motion.div key={role.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-ngo-secondary/30 transition-all group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-5 text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-ngo-primary mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{role.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                    <FaClock size={10} /> {role.commitment}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                    <FaMapMarkerAlt size={10} /> {role.location}
                  </span>
                </div>

                <button className="w-full py-2.5 rounded-xl border-2 border-ngo-primary text-ngo-primary font-semibold text-sm hover:bg-ngo-primary hover:text-white transition-all flex items-center justify-center gap-2">
                  Apply for This Role <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 How It Works (Steps) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-3">Your <span className="text-ngo-secondary">Journey</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple, transparent, and supportive from day one.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10" />
            
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center group">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gray-100 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-2 rounded-full bg-white shadow-md flex items-center justify-center text-ngo-primary group-hover:text-ngo-secondary transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-ngo-secondary text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-bold text-ngo-primary mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ngo-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Voices of <span className="text-ngo-secondary">Impact</span></h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Hear from volunteers who turned passion into purpose.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                <p className="text-gray-200 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ngo-secondary/30 flex items-center justify-center">
                    <FaUserCircle size={20} className="text-ngo-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{t.name}</h4>
                    <p className="text-blue-200 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 FAQ Section */}
      <section className="py-16 md:py-24 bg-ngo-bg">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ngo-primary mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to help you get started.</p>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-ngo-primary pr-4">{faq.q}</span>
                  {openFaq === i ? <FaChevronUp size={16} className="text-ngo-secondary flex-shrink-0" /> : <FaChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Quick Apply Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-ngo-bg rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-ngo-primary mb-2">Ready to Volunteer?</h2>
              <p className="text-gray-600 text-sm">Fill this quick form. We'll match you with the right team within 48 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none bg-white" />
                <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none bg-white" />
                <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none bg-white" />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none bg-white text-gray-600">
                  <option value="">Preferred Role</option>
                  <option>Education Mentor</option>
                  <option>Healthcare Support</option>
                  <option>Event & Outreach</option>
                  <option>Digital & Tech</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
              <textarea required rows={3} placeholder="Tell us about your skills & why you want to volunteer..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none bg-white resize-none" />
              
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full relative overflow-hidden bg-gradient-to-r from-ngo-primary to-blue-700 hover:from-ngo-secondary hover:to-orange-500 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg disabled:opacity-60 transition-all">
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                {isSubmitting ? "Submitting..." : <><FaPaperPlane size={18} /> Submit Application</>}
              </motion.button>
              <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1"><FaLock size={10} /> Your data is secure & never shared with third parties.</p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Final CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-ngo-secondary to-orange-500 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Start Your Impact Journey Today</h2>
            <p className="text-orange-100 mb-6">Every hour you give creates ripples of change. Join us.</p>
            <a href="#apply" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-ngo-secondary hover:bg-gray-50 rounded-full font-semibold shadow-lg transition-all">
              Apply Now <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}