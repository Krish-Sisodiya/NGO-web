import { motion } from "framer-motion";
import {  Eye, Target, } from "lucide-react";

export default function Story() {
  return (
    <section className="py-16 md:py-24 bg-ngo-bg relative overflow-hidden">
      {/* 🔹 Decorative Background Blobs (NGO Vibe) */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-ngo-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ngo-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 🔹 Left: Story, Vision & Stats */}
          <div className="space-y-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ngo-primary leading-tight mb-4">
                Our Story & <span className="text-ngo-secondary">Vision</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2015, HopeNGO began with a simple yet powerful belief: every child deserves quality education, and every family deserves dignity. What started as a weekend teaching initiative by 5 volunteers has grown into a nationwide movement touching thousands of lives.
              </p>
            </motion.div>

            {/* Vision & Mission Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition group">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition">
                  <Eye className="w-5 h-5 text-ngo-primary" />
                </div>
                <h3 className="font-bold text-ngo-text mb-2">Our Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">A world where poverty doesn't dictate potential, and every community thrives through education and opportunity.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition group">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition">
                  <Target className="w-5 h-5 text-ngo-secondary" />
                </div>
                <h3 className="font-bold text-ngo-text mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">To deliver transparent, community-driven programs that empower marginalized groups and create sustainable change.</p>
              </div>
            </motion.div>
      

            {/* Impact Stats 
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200"
            >
              {[
                { icon: <Users className="w-6 h-6 text-ngo-secondary" />, num: "50K+", label: "Lives Impacted" },
                { icon: <Globe className="w-6 h-6 text-ngo-secondary" />, num: "12", label: "States Covered" },
                { icon: <CalendarDays className="w-6 h-6 text-ngo-secondary" />, num: "10+", label: "Years Active" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-ngo-primary">{stat.num}</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
             */}
             
          </div>

         

          {/* 🔹 Right: Image & Floating Elements (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60">
              <img
                src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1000&auto=format&fit=crop"
                alt="Volunteers teaching children in rural India"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ngo-primary/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Quote Card 
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100 max-w-xs"
            >
              <div className="flex items-start gap-3">
                <HeartHandshake className="w-6 h-6 text-ngo-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-ngo-text italic leading-snug">
                    "Service to others is the rent you pay for your room here on earth."
                  </p>
                  <p className="text-xs text-gray-500 mt-2 font-semibold">— Muhammad Ali</p>
                </div>
              </div>
            </motion.div>
            */}


          </motion.div>
        </div>
      </div>
    </section>
  );
}