import { motion } from "framer-motion";

import {
  Flag,
  Building2,
  Laptop,
  Globe,
  Users,
  Heart,
  ArrowRight,
  MapPin,
} from "lucide-react";

/* ============================================================================
   ROADMAP DATA
============================================================================ */

const MILESTONES = [
  {
    year: "2015",
    title: "The First Step",
    description:
      "Started with 5 passionate volunteers teaching children.",
    icon: Flag,
    color: "from-blue-600 to-blue-500",
    stats: "5 Volunteers",
  },

  {
    year: "2018",
    title: "First Learning Hub",
    description:
      "Opened our first learning center serving 200+ children.",
    icon: Building2,
    color: "from-orange-500 to-orange-400",
    stats: "200+ Children",
  },

  {
    year: "2021",
    title: "Digital Bridge",
    description:
      "Launched online learning programs across rural India.",
    icon: Laptop,
    color: "from-green-500 to-green-400",
    stats: "10K+ Students",
  },

  {
    year: "2024",
    title: "National Impact",
    description:
      "Now active in 8 states with 200+ volunteers.",
    icon: Globe,
    color: "from-purple-600 to-indigo-500",
    stats: "8 States",
  },
];

/* ============================================================================
   COMPONENT
============================================================================ */

export default function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white py-14 md:py-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">

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
          className="mb-14 text-center md:mb-20"
        >

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

            <MapPin size={15} />

            Our Journey

          </div>

          <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl md:text-5xl">

            The Road to{" "}

            <span className="text-orange-500">
              Impact
            </span>

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">

            Follow our journey from a small initiative to a nationwide movement.

          </p>
        </motion.div>

        {/* ROADMAP */}
        <div className="relative">

          {/* CENTER ROAD LINE */}
          <div className="absolute left-[20px] top-0 h-full w-[4px] rounded-full bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

          {/* ACTIVE LINE */}
          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.6,
            }}
            className="absolute left-[20px] top-0 h-full w-[4px] origin-top rounded-full bg-gradient-to-b from-blue-600 via-orange-400 to-green-500 md:left-1/2 md:-translate-x-1/2"
          />

          {/* ITEMS */}
          <div className="space-y-10 md:space-y-20">

            {MILESTONES.map((item, index) => {
              const Icon = item.icon;

              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex w-full ${
                    isEven
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* ICON NODE */}
                  <div className="absolute left-[20px] top-6 z-20 -translate-x-1/2 md:left-1/2">

                    {/* PULSE */}
                    <div className="absolute inset-0 animate-ping rounded-full bg-orange-300 opacity-20" />

                    {/* ICON */}
                    <div
                      className={`relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-lg md:h-14 md:w-14`}
                    >
                      <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
                    </div>
                  </div>

                  {/* CARD */}
                  <motion.div
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
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className={`ml-14 w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-lg transition-all duration-300 md:ml-0 md:w-[44%] ${
                      isEven
                        ? "md:mr-auto md:text-right"
                        : "md:ml-auto"
                    }`}
                  >

                    {/* YEAR */}
                    <div
                      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${item.color} px-3 py-1.5 text-xs font-bold text-white shadow-sm`}
                    >

                      <span className="h-2 w-2 animate-pulse rounded-full bg-white" />

                      {item.year}

                    </div>

                    {/* TITLE */}
                    <h3 className="mt-4 text-xl font-bold text-[#0f172a] md:text-2xl">

                      {item.title}

                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">

                      {item.description}

                    </p>

                    {/* FOOTER */}
                    <div
                      className={`mt-5 flex items-center justify-between border-t border-gray-100 pt-4 ${
                        isEven
                          ? "md:flex-row-reverse"
                          : ""
                      }`}
                    >

                      {/* STATS */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">

                        <Users
                          size={15}
                          className="text-orange-500"
                        />

                        {item.stats}

                      </div>

                      {/* BUTTON */}
                      <button className="group flex items-center gap-1 text-sm font-medium text-orange-500 transition-all hover:gap-2">

                        Explore

                        <ArrowRight
                          size={15}
                          className="transition-transform"
                        />

                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* FINAL POINT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
            }}
            className="relative mt-10 flex flex-col items-center"
          >

            <div className="h-5 w-5 animate-pulse rounded-full bg-green-500 shadow-lg ring-4 ring-green-200" />

            <div className="mt-4 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">

              🚀 Current Milestone & Beyond

            </div>
          </motion.div>
        </div>

        {/* CTA */}
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
            delay: 0.4,
          }}
          className="mt-16 text-center"
        >

          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-lg sm:flex-row">

            <Heart className="h-5 w-5 text-orange-500" />

            <span className="text-sm font-medium text-gray-700 md:text-base">

              Ready to walk this journey with us?

            </span>

            <button className="rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105">

              Join The Journey

            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}