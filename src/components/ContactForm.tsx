import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Phone, MessageSquare, Send, 
  CheckCircle, AlertCircle, Loader2, MapPin 
} from "lucide-react";

// ============================================================================
// 📋 TYPE DEFINITION
// ============================================================================
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ============================================================================
// 🧩 MAIN COMPONENT
// ============================================================================
export default function ContactForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors}, 
    reset 
  } = useForm<FormData>({
    mode: "onChange"
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      //  Professional EmailJS Payload
      const templateParams = {
        to_name: "FSES Team",
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        subject: data.subject || "General Inquiry",
        message: data.message,
        submitted_at: new Date().toLocaleString("en-IN"),
        form_source: "Website Contact Page"
      };

      await emailjs.send(
        "service_c8uu5yc",
        "template_w7mszkd",
        templateParams,
        "CPjeCHu4QUKR6zrVj"
      );

      setStatus("success");
      reset();
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="w-full bg-ngo-bg py-16 md:py-24 relative overflow-hidden" id="contact">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-ngo-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-ngo-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ngo-primary/10 text-ngo-primary rounded-full text-sm font-semibold mb-4">
            <MapPin size={14} /> Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-3">
            Let's Build A <span className="text-ngo-secondary">Better Future Together</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
             Have a question, want to volunteer, collaborate, or support our mission? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User size={14} className="text-ngo-primary" /> Full Name
                </label>
                <div className="relative">
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20'} outline-none transition-all`}
                  />
                  <User size={18} className="absolute left-3 top-3.5 text-gray-400" />
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0 }}
                      className="text-red-500 text-xs flex items-center gap-1"
                    >
                      <AlertCircle size={12} /> {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail size={14} className="text-ngo-primary" /> Email Address
                </label>
                <div className="relative">
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                    })}
                    type="email"
                    placeholder="you@example.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20'} outline-none transition-all`}
                  />
                  <Mail size={18} className="absolute left-3 top-3.5 text-gray-400" />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0 }}
                      className="text-red-500 text-xs flex items-center gap-1"
                    >
                      <AlertCircle size={12} /> {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Row 2: Phone & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone size={14} className="text-ngo-primary" /> Phone Number
                </label>
                <div className="relative">
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+91 98******10"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none transition-all"
                  />
                  <Phone size={18} className="absolute left-3 top-3.5 text-gray-400" />
                </div>
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MessageSquare size={14} className="text-ngo-primary" /> Subject
                </label>
                <div className="relative">
                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="How can we help?"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20 outline-none transition-all"
                  />
                  <MessageSquare size={18} className="absolute left-3 top-3.5 text-gray-400" />
                </div>
              </motion.div>
            </div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MessageSquare size={14} className="text-ngo-primary" /> Your Message
              </label>
              <div className="relative">
                <textarea
                  {...register("message", { required: "Message cannot be empty" })}
                  rows={4}
                  placeholder="Tell us about your inquiry, volunteer interest, or partnership idea..."
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-ngo-secondary focus:ring-2 focus:ring-ngo-secondary/20'} outline-none transition-all resize-none`}
                />
                <MessageSquare size={18} className="absolute left-3 top-3.5 text-gray-400" />
              </div>
              <AnimatePresence>
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-xs flex items-center gap-1"
                  >
                    <AlertCircle size={12} /> {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden bg-gradient-to-r from-ngo-primary to-blue-700 hover:from-ngo-secondary hover:to-orange-500 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {/* Shine Effect */}
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                
                {status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" /> Send Message
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Status Feedback */}
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-200"
                >
                  <CheckCircle size={18} /> Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200"
                >
                  <AlertCircle size={18} /> Failed to send. Please check your connection or try again.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}