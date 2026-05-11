import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHeart, FaHandHoldingHeart, FaGraduationCap, FaStethoscope, FaUsers,
  FaShieldAlt, FaCreditCard, FaMobileAlt, FaLandmark, FaLock, FaCheckCircle,
  FaRupeeSign, FaArrowRight, FaReceipt, FaClock, FaChartPie,
  FaWallet
} from "react-icons/fa";
import {  ChevronDown, ChevronUp, } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ============================================================================
//  IMPACT TIERS DATA
// ============================================================================
const IMPACT_TIERS = [
  {
    amount: 500,
    title: "Education Kit",
    description: "Provides notebooks, books, and stationery for 1 child for an entire year.",
    icon: <FaGraduationCap size={24} />,
    progress: 72,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    amount: 1500,
    title: "Health Shield",
    description: "Covers complete medical checkup, medicines, and nutrition for a rural family.",
    icon: <FaStethoscope size={24} />,
    progress: 58,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    amount: 3000,
    title: "Skill Builder",
    description: "Funds 3-month vocational training for a woman to become financially independent.",
    icon: <FaUsers size={24} />,
    progress: 41,
    color: "text-ngo-secondary",
    bg: "bg-orange-50"
  }
];

// ============================================================================
// ️ TRUST BADGES DATA
// ============================================================================
const TRUST_BADGES = [
  { icon: <FaReceipt size={20} />, title: "80G Tax Exemption", desc: "Claim 50% tax deduction on donations" },
  { icon: <FaShieldAlt size={20} />, title: "100% Transparent", desc: "Public fund utilization reports quarterly" },
  { icon: <FaLock size={20} />, title: "SSL Secure Payment", desc: "256-bit encryption for all transactions" },
  { icon: <FaChartPie size={20} />, title: "FCRA Registered", desc: "Compliant with Indian NGO regulations" }
];

// ============================================================================
// ❓ FAQ DATA
// ============================================================================
const FAQS = [
  { q: "Is my donation tax-deductible?", a: "Yes! We are registered under Section 80G. You'll receive a digital receipt within 48 hours for tax filing." },
  { q: "Can I choose a specific cause?", a: "Absolutely. Use the dropdown in the form or contact us to direct your donation to education, health, or livelihood programs." },
  { q: "How is fund transparency ensured?", a: "We publish quarterly impact reports, audited financials, and real-time project updates on our website." },
  { q: "Can I cancel my monthly donation?", a: "Yes, you can pause or cancel anytime from your donor dashboard or by emailing us at support@hopengo.org." }
];

// ============================================================================
// 🧩 MAIN COMPONENT
// ============================================================================
export default function DonatePage() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("✅ Thank you! Redirecting to secure payment gateway...");
    }, 1500);
  };

  const finalAmount = selectedAmount || (customAmount ? Number(customAmount) : 0);

  return (
    <>
      <Header />
      
      {/* 🔹 Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-ngo-primary via-blue-900 to-black overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-ngo-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ngo-primary/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 mb-6"
            >
              <FaHeart size={14} className="text-ngo-secondary animate-pulse" /> Transparent & Impact-Driven
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empower a Life <span className="text-ngo-secondary">Today</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Every rupee you donate creates measurable, transparent impact. Join 5,000+ changemakers building hope across India.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white/80 text-sm md:text-base">
              {[
                { label: "Funds Utilized", value: "94%" },
                { label: "Lives Impacted", value: "50K+" },
                { label: "Avg Response", value: "<24h" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" size={16} />
                  <span><strong className="text-white">{stat.value}</strong> {stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Impact Tiers Section */}
      <section className="py-12 md:py-20 bg-white -mt-8 md:-mt-12 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-3">
              How Your Donation <span className="text-ngo-secondary">Helps</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose an impact tier or enter a custom amount. Every contribution matters.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {IMPACT_TIERS.map((tier, i) => (
              <motion.div
                key={tier.amount}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-ngo-bg p-6 rounded-2xl border border-gray-100 hover:border-ngo-secondary/30 shadow-md transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${tier.bg} ${tier.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-ngo-primary mb-2">{tier.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tier.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                    <span>Funded</span>
                    <span>{tier.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tier.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full rounded-full ${tier.color.replace('text-', 'bg-')}`}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-lg font-bold text-ngo-primary">{tier.amount}</span>
                  <button
                    onClick={() => setSelectedAmount(tier.amount)}
                    className="text-sm font-semibold text-ngo-secondary hover:text-ngo-primary transition-colors flex items-center gap-1"
                  >
                    Select <FaArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Donation Form Section */}
      <section className="py-16 md:py-24 bg-ngo-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            
            {/* Form Header */}
            <div className="bg-gradient-to-r from-ngo-primary to-blue-800 p-6 md:p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <FaHandHoldingHeart size={24} className="text-ngo-secondary" />
                <h2 className="text-2xl md:text-3xl font-bold">Secure Donation</h2>
              </div>
              <p className="text-blue-100 text-sm">Your payment is protected with 256-bit SSL encryption. 80G receipt auto-generated.</p>
            </div>

            <form onSubmit={handleDonate} className="p-6 md:p-8 space-y-8">
              
              {/* Frequency Toggle */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Donation Frequency</label>
                <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-xl">
                  {(["one-time", "monthly"] as const).map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                        frequency === freq 
                          ? "bg-white text-ngo-primary shadow-md" 
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {freq === "one-time" ? "One-Time" : "Monthly Recurring"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Amount</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                  {[500, 1000, 2000, 5000, 10000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                      className={`py-2.5 rounded-lg text-sm font-semibold transition-all border ${
                        selectedAmount === amt
                          ? "bg-ngo-primary text-white border-ngo-primary"
                          : "bg-white text-gray-700 border-gray-200 hover:border-ngo-secondary"
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <FaRupeeSign size={16} className="absolute left-4 top-3.5 text-gray-400" />
                  <input
                    type="number"
                    placeholder="Or enter custom amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none" />
                <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none" />
                <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none" />
                <input type="text" placeholder="PAN (For 80G Receipt)" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none uppercase" />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Method</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "upi", icon: <FaMobileAlt />, label: "UPI" },
                    { id: "card", icon: <FaCreditCard />, label: "Cards" },
                    { id: "netbanking", icon: <FaLandmark />, label: "Net Banking" },
                    { id: "wallet", icon: <FaWallet />, label: "Wallets" }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex flex-col items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                        paymentMethod === method.id
                          ? "bg-ngo-primary/5 border-ngo-primary text-ngo-primary"
                          : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      {method.icon}
                      <span className="text-xs font-medium">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isProcessing || finalAmount <= 0}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden bg-gradient-to-r from-ngo-primary to-blue-700 hover:from-ngo-secondary hover:to-orange-500 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                {isProcessing ? (
                  <>
                    <FaClock className="animate-spin" size={20} /> Processing...
                  </>
                ) : (
                  <>
                    <FaLock size={18} /> Donate ₹{finalAmount || 0} Securely
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                <FaLock size={10} /> 256-bit SSL Secured • Instant 80G Receipt • Cancel Anytime
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 🔹 Trust & Transparency Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_BADGES.map((badge, i) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 rounded-2xl bg-ngo-bg border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center text-ngo-primary mb-3">
                  {badge.icon}
                </div>
                <h4 className="font-bold text-ngo-primary text-sm mb-1">{badge.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 FAQ Section */}
      <section className="py-16 md:py-24 bg-ngo-bg">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-ngo-primary mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about donating securely.</p>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-ngo-primary pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-ngo-secondary flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Final CTA */}
      <section className="py-16 bg-gradient-to-br from-ngo-primary to-blue-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <FaHeart size={32} className="text-ngo-secondary mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Generosity Changes Lives</h2>
            <p className="text-blue-100 mb-8">Join our community of changemakers. Every contribution, big or small, builds a brighter tomorrow.</p>
            <a href="#donate-form" className="inline-flex items-center gap-2 px-8 py-3.5 bg-ngo-secondary hover:bg-orange-500 text-white rounded-full font-semibold shadow-lg transition-all">
              Start Donating <FaArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}