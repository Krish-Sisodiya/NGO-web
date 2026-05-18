import { motion } from "framer-motion";

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
                Our <span className="text-ngo-secondary">Vision</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Falcon Social and Educational Society was started with a simple
                vision to make quality education to every Indian, especially
                those who are deprived of proper learning opportunities. Through
                community teaching, awareness sessions, and social initiatives,
                we are working to create a better and brighter future.
              </p>
            </motion.div>
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
                src="/assets/img-7.jpeg"
                alt="Volunteers teaching children in rural India"
                className="w-full h-[32.5rem] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ngo-primary/40 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
