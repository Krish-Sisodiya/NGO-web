import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  BookOpen,
  HeartPulse,
  Sprout,
  ArrowRight,
  X,
  Users,
  CheckCircle2,
} from "lucide-react";

/* ============================================================================
   DATA
============================================================================ */

const causes = [
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Education For All",

    desc:
      "Providing free schooling, digital literacy, and mentorship to underprivileged children.",

    impact: "12,000+ Students Enrolled",

    details:
      "Our education initiative provides free learning resources, digital classrooms, mentorship programs, scholarship guidance, and career support for children in rural and urban communities.",

    benefits: [
      "Free School Support",
      "Digital Literacy",
      "Scholarship Guidance",
      "Career Mentorship",
    ],

    gradient: "from-blue-500 to-cyan-400",
  },

  {
    icon: <HeartPulse className="w-7 h-7" />,
    title: "Community Health",

    desc:
      "Mobile clinics, mental health awareness, and healthcare support for vulnerable families.",

    impact: "50,000+ Beneficiaries",

    details:
      "Our health programs focus on preventive healthcare, women wellness, mental health awareness, sanitation drives, and accessible medical support in remote regions.",

    benefits: [
      "Medical Camps",
      "Mental Health Awareness",
      "Sanitation Drives",
      "Women Healthcare",
    ],

    gradient: "from-red-500 to-pink-400",
  },

  {
    icon: <Sprout className="w-7 h-7" />,
    title: "Sustainable Livelihood",

    desc:
      "Skill training and women empowerment programs for financial independence.",

    impact: "3,500+ Families Empowered",

    details:
      "We provide entrepreneurship training, skill development workshops, self-employment support, and financial literacy programs for sustainable livelihoods.",

    benefits: [
      "Skill Training",
      "Women Empowerment",
      "Self Employment",
      "Financial Literacy",
    ],

    gradient: "from-emerald-500 to-teal-400",
  },
];

/* ============================================================================
   COMPONENT
============================================================================ */

export default function Causes() {
  const [selectedCause, setSelectedCause] = useState<
    (typeof causes)[0] | null
  >(null);

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-14 md:py-20">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-12 text-center md:mb-16"
        >

          <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl md:text-5xl">

            Our Core{" "}

            <span className="text-orange-500">
              Initiatives
            </span>

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">

            Focused programs creating measurable impact in education,
            healthcare, and sustainable livelihoods.

          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {causes.map((cause, i) => (
            <motion.div
              key={cause.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.15,
                duration: 0.45,
              }}
              whileHover={{
                y: -6,
              }}
              className="group rounded-3xl border border-gray-100 bg-white p-5 shadow-lg transition-all duration-300 hover:border-orange-300 hover:shadow-2xl md:p-7"
            >

              {/* ICON */}
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cause.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {cause.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-orange-500 md:text-2xl">

                {cause.title}

              </h3>

              {/* DESC */}
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">

                {cause.desc}

              </p>

              {/* IMPACT */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2">

                <Users
                  size={15}
                  className="text-orange-500"
                />

                <span className="text-sm font-semibold text-[#0f172a]">

                  {cause.impact}

                </span>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setSelectedCause(cause)}
                className="group/btn mt-6 flex items-center gap-2 font-semibold text-orange-500"
              >

                Learn More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />

              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ============================================================================
          MODAL
      ============================================================================ */}

      <AnimatePresence>

        {selectedCause && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          >

            {/* MODAL BOX */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              transition={{
                duration: 0.35,
              }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
            >

              {/* TOP GRADIENT */}
              <div
                className={`h-2 w-full bg-gradient-to-r ${selectedCause.gradient}`}
              />

              {/* CONTENT */}
              <div className="p-5 sm:p-7">

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedCause(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-red-500 hover:text-white"
                >

                  <X size={18} />

                </button>

                {/* ICON */}
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedCause.gradient} text-white shadow-lg`}
                >

                  {selectedCause.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-[#0f172a] md:text-3xl">

                  {selectedCause.title}

                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">

                  {selectedCause.details}

                </p>

                {/* BENEFITS */}
                <div className="mt-6 space-y-3">

                  {selectedCause.benefits.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
                    >

                      <CheckCircle2
                        size={18}
                        className="text-green-500"
                      />

                      <span className="text-sm font-medium text-gray-700">

                        {item}

                      </span>

                    </div>
                  ))}
                </div>

                {/* FOOTER BUTTON */}
                <button
                  onClick={() => setSelectedCause(null)}
                  className="mt-7 w-full rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >

                  Close Details

                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}