import { motion } from "framer-motion";

export default function CSRSection() {
  return (
    <section
      className="relative overflow-hidden bg-ngo-bg py-20 md:py-28"
      id="about"
    >
      {/* 🔹 Animated Background Blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] bg-ngo-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 w-[24rem] h-[24rem] md:w-[34rem] md:h-[34rem] bg-ngo-secondary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* 🔹 Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ngo-primary leading-[1.2] tracking-tight">
            CSR Ready for{" "}
            <span className="text-ngo-secondary relative inline-block">
              Social Impact
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We welcome CSR partnerships to create meaningful change through
            education, awareness, community development, and youth empowerment
            initiatives for a better future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}