import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

/* ============================================================================
   TEAM DATA
============================================================================ */

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Dr. Appurva Bansal",
    role: "Founder & Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
    quote:
      "Every child deserves education. We create pathways for sustainable change through community empowerment.",
    email: "appurva@hopengo.org",
    phone: "+91 98765 43210",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },

  {
    id: 2,
    name: "Rahul Sharma",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=900&auto=format&fit=crop",
    quote:
      "Transparency and measurable impact drive everything we do. Change happens one community at a time.",
    email: "rahul@hopengo.org",
    phone: "+91 98765 43211",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },

  {
    id: 3,
    name: "Priya Verma",
    role: "Community Lead",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=900&auto=format&fit=crop",
    quote:
      "Real change happens when communities lead their own transformation. We facilitate that journey.",
    email: "priya@hopengo.org",
    phone: "+91 98765 43212",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
];

/* ============================================================================
   COMPONENT
============================================================================ */

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentMember = TEAM_MEMBERS[currentIndex];

  const prevSlide = () => {
    setDirection(-1);

    setCurrentIndex((prev) =>
      prev === 0 ? TEAM_MEMBERS.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setDirection(1);

    setCurrentIndex((prev) =>
      prev === TEAM_MEMBERS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-12 md:py-16">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">

        {/* HEADER */}
        <div className="mb-10 md:mb-14 text-center">

          <p className="mb-3 text-[11px] md:text-xs font-semibold uppercase tracking-[4px] text-orange-400">
            Our Leadership
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Meet Our Team
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-orange-400" />
        </div>

        {/* MAIN GRID */}
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">

          {/* ============================================================
              LEFT SIDE IMAGE SECTION
          ============================================================ */}

          <div className="relative flex items-center justify-center">

            {/* BACK CARD 1 */}
            <div className="absolute left-4 top-8 hidden h-[300px] w-[220px] rotate-[-10deg] rounded-[1.8rem] bg-[#111111] md:block" />

            {/* BACK CARD 2 */}
            <div className="absolute right-4 top-5 hidden h-[300px] w-[220px] rotate-[8deg] rounded-[1.8rem] bg-[#1b1b1b] md:block" />

            {/* ACTIVE CARD */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentMember.id}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 80 : -80,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: direction < 0 ? 80 : -80,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="relative z-20 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]"
              >

                {/* CARD */}
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0f0f0f] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                  {/* IMAGE */}
                  <div className="relative">

                    <img
                      src={currentMember.image}
                      alt={currentMember.name}
                      className="h-[320px] sm:h-[380px] md:h-[450px] w-full object-cover"
                      draggable={false}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* INFO BOX */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">

                      <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">

                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {currentMember.name}
                        </h3>

                        <p className="mt-1 text-xs sm:text-sm font-medium text-orange-400">
                          {currentMember.role}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ============================================================
              RIGHT SIDE CONTENT
          ============================================================ */}

          <div className="flex flex-col justify-center text-center lg:text-left">

            <AnimatePresence mode="wait">

              <motion.div
                key={currentMember.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.4,
                }}
              >

                {/* TOP TEXT */}
                <p className="mb-3 text-[11px] sm:text-xs uppercase tracking-[4px] text-gray-500">
                  Leadership Team
                </p>

                {/* NAME */}
                <h2 className="bg-gradient-to-r from-white via-orange-300 to-blue-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-transparent">
                  {currentMember.name}
                </h2>

                {/* ROLE */}
                <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">

                  <div className="h-[3px] w-10 rounded-full bg-orange-400" />

                  <p className="text-base md:text-lg font-semibold text-orange-400">
                    {currentMember.role}
                  </p>

                </div>

                {/* QUOTE */}
                <div className="relative mt-7 pl-0 lg:pl-8">

                  <Quote className="hidden lg:block absolute left-0 top-0 h-10 w-10 text-white/10" />

                  <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-[1.9] text-gray-300">
                    "{currentMember.quote}"
                  </p>

                </div>

                {/* CONTACT */}
                <div className="mt-7 space-y-3 border-t border-white/10 pt-6">

                  {/* EMAIL */}
                  <a
                    href={`mailto:${currentMember.email}`}
                    className="group flex items-center justify-center lg:justify-start gap-3"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 transition-all duration-300 group-hover:bg-blue-500">

                      <Mail
                        size={16}
                        className="text-blue-400 group-hover:text-white"
                      />

                    </div>

                    <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-white break-all">
                      {currentMember.email}
                    </span>

                  </a>

                  {/* PHONE */}
                  <div className="flex items-center justify-center lg:justify-start gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">

                      <Phone size={16} className="text-green-400" />

                    </div>

                    <span className="text-sm text-gray-300">
                      {currentMember.phone}
                    </span>

                  </div>
                </div>

                {/* SOCIAL ICONS */}
                <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">

                  {[
                    {
                      icon: <FaLinkedin />,
                      link: currentMember.socials.linkedin,
                    },

                    {
                      icon: <FaTwitter />,
                      link: currentMember.socials.twitter,
                    },

                    {
                      icon: <FaInstagram />,
                      link: currentMember.socials.instagram,
                    },

                    {
                      icon: <FaFacebook />,
                      link: currentMember.socials.facebook,
                    },

                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#161616] text-sm text-white transition-all duration-300 hover:border-orange-400 hover:bg-orange-400"
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ============================================================
                NAVIGATION
            ============================================================ */}

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">

              {/* BUTTONS */}
              <div className="flex items-center gap-3">

                {/* PREV */}
                <motion.button
                  onClick={prevSlide}
                  whileHover={{
                    scale: 1.08,
                    x: -3,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-white transition-all duration-300 hover:bg-orange-400"
                >
                  <ChevronLeft size={20} />
                </motion.button>

                {/* NEXT */}
                <motion.button
                  onClick={nextSlide}
                  whileHover={{
                    scale: 1.08,
                    x: 3,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-white transition-all duration-300 hover:bg-orange-400"
                >
                  <ChevronRight size={20} />
                </motion.button>

              </div>

              {/* DOTS */}
              <div className="flex items-center gap-2">

                {TEAM_MEMBERS.map((member, index) => (
                  <button
                    key={member.id}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`transition-all duration-300 ${
                      currentIndex === index
                        ? "h-2 w-8 rounded-full bg-orange-400"
                        : "h-2 w-2 rounded-full bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}