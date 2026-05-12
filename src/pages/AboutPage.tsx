import { motion } from "framer-motion";
import {
  FaHeart,
  FaHandHoldingHeart,
  FaGraduationCap,
  FaLeaf,
  FaGlobe,
  FaAward,
  FaChartLine,
  FaQuoteLeft,
} from "react-icons/fa";

import { Target, Shield, ArrowRight } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Story from "../components/Story";
import Team from "../components/Team";

/* ============================================================================
   CORE VALUES
============================================================================ */

const CORE_VALUES = [
  {
    icon: <Target size={28} />,
    title: "Our Mission",
    description:
      "To empower marginalized communities through education, healthcare, and sustainable livelihood programs that create lasting change.",
    color: "from-ngo-primary to-blue-700",
  },

  {
    icon: <FaLeaf size={28} />,
    title: "Our Vision",
    description:
      "A world where every individual has equal opportunity to thrive, regardless of their socioeconomic background.",
    color: "from-ngo-secondary to-orange-600",
  },

  {
    icon: <Shield size={28} />,
    title: "Our Values",
    description:
      "Transparency, compassion, integrity, and community-led development guide every decision we make.",
    color: "from-green-500 to-emerald-600",
  },
];

/* ============================================================================
   TIMELINE
============================================================================ */

const TIMELINE = [
  {
    year: "2015",
    title: "Foundation",
    description:
      "HopeNGO was founded with a mission to provide quality education to underprivileged children.",

    icon: <FaHeart size={18} />,
    color: "bg-ngo-primary",
  },

  {
    year: "2018",
    title: "First Center",
    description:
      "Opened our first community learning hub in Delhi, serving 200+ children daily.",

    icon: <FaGraduationCap size={18} />,
    color: "bg-ngo-secondary",
  },

  {
    year: "2021",
    title: "Digital Expansion",
    description:
      "Launched online learning programs, reaching thousands of students across rural India.",

    icon: <FaGlobe size={18} />,
    color: "bg-green-500",
  },

  {
    year: "2024",
    title: "National Impact",
    description:
      "Now active in multiple states with volunteers creating sustainable change at scale.",

    icon: <FaChartLine size={18} />,
    color: "bg-blue-600",
  },
];

/* ============================================================================
   COMPONENT
============================================================================ */

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ngo-primary via-blue-900 to-black pt-24 pb-16 md:pt-32 md:pb-24">

        {/* BG EFFECT */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-ngo-secondary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-ngo-primary/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
            }}

            className="mx-auto max-w-4xl text-center"
          >

            {/* BADGE */}
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.9,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                delay: 0.2,
              }}

              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-sm
                font-medium
                text-white
                backdrop-blur-sm
              "
            >

              <FaAward
                size={14}
                className="text-ngo-secondary"
              />

              Registered NGO Since 2015

            </motion.span>

            {/* TITLE */}
            <h1
              className="
                mb-6
                text-4xl
                font-bold
                leading-tight
                text-white

                sm:text-5xl
                lg:text-6xl
              "
            >

              About{" "}

              <span className="text-ngo-secondary">
                HopeNGO
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mx-auto
                mb-10
                max-w-3xl
                text-base
                leading-relaxed
                text-gray-300

                sm:text-lg
                md:text-xl
              "
            >

              We are a registered non-profit organization dedicated
              to social upliftment, education, and sustainable
              community development across India.

            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-4

                sm:flex-row
              "
            >

              {/* BTN */}
              <motion.a
                href="/contact"

                whileHover={{
                  scale: 1.05,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-gradient-to-r
                  from-ngo-secondary
                  to-orange-500

                  px-6
                  py-3

                  text-sm
                  font-semibold
                  text-white

                  shadow-lg

                  transition-all
                  hover:from-ngo-primary
                  hover:to-blue-700

                  sm:text-base
                "
              >

                Join Our Mission

                <ArrowRight size={18} />

              </motion.a>

              {/* BTN */}
              <motion.a
                href="/causes"

                whileHover={{
                  scale: 1.05,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-white/30

                  bg-white/10

                  px-6
                  py-3

                  text-sm
                  font-semibold
                  text-white

                  transition-all
                  hover:bg-white/20

                  sm:text-base
                "
              >

                Explore Causes

              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-ngo-bg py-14 md:py-20">

        <div className="container mx-auto px-4 md:px-6">

          {/* HEADER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            className="mb-12 text-center"
          >

            <h2
              className="
                mb-4
                text-3xl
                font-bold
                text-ngo-primary

                md:text-4xl
              "
            >

              Our{" "}

              <span className="text-ngo-secondary">
                Core Values
              </span>

            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">

              Every action we take is guided by these
              fundamental principles.

            </p>
          </motion.div>

          {/* CARDS */}
          <div
            className="
              mx-auto
              grid
              max-w-6xl
              gap-6

              md:grid-cols-3
            "
          >

            {CORE_VALUES.map((value, i) => (
              <motion.div
                key={value.title}

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
                }}

                whileHover={{
                  y: -6,
                }}

                className="
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-6
                  shadow-lg
                  transition-all
                  hover:border-ngo-secondary/30
                "
              >

                {/* ICON */}
                <div
                  className={`
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    ${value.color}
                    text-white
                    shadow-md
                  `}
                >

                  {value.icon}

                </div>

                {/* TITLE */}
                <h3 className="mb-3 text-xl font-bold text-ngo-primary">

                  {value.title}

                </h3>

                {/* TEXT */}
                <p className="leading-relaxed text-gray-600">

                  {value.description}

                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <Story />

      {/* TIMELINE */}
      <section className="relative overflow-hidden bg-white py-14 md:py-20">

        <div className="container relative z-10 mx-auto px-4 md:px-6">

          {/* HEADER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            className="mb-14 text-center"
          >

            <h2
              className="
                mb-4
                text-3xl
                font-bold
                text-ngo-primary

                md:text-4xl
              "
            >

              Our{" "}

              <span className="text-ngo-secondary">
                Journey
              </span>

            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">

              Key milestones that shaped our mission
              and impact.

            </p>
          </motion.div>

          {/* TIMELINE */}
          <div className="relative mx-auto max-w-4xl">

            {/* LINE */}
            <div
              className="
                absolute
                left-5
                top-0
                bottom-0

                w-[2px]

                bg-gradient-to-b
                from-ngo-primary
                via-ngo-secondary
                to-green-500

                md:left-1/2
                md:-translate-x-1/2
              "
            />

            {/* ITEMS */}
            <div className="space-y-10">

              {TIMELINE.map((item, index) => {

                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.year}

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
                      delay: index * 0.15,
                    }}

                    className={`
                      relative
                      flex
                      flex-col
                      gap-5

                      md:items-center

                      ${
                        isEven
                          ? "md:flex-row"
                          : "md:flex-row-reverse"
                      }
                    `}
                  >

                    {/* CARD */}
                    <div
                      className={`
                        ml-14
                        w-[calc(100%-56px)]

                        md:ml-0
                        md:w-5/12

                        ${
                          isEven
                            ? "md:pr-10 md:text-right"
                            : "md:pl-10"
                        }
                      `}
                    >

                      <div
                        className="
                          rounded-2xl
                          border
                          border-gray-100
                          bg-ngo-bg
                          p-5
                          shadow-md
                        "
                      >

                        {/* BADGE */}
                        <span
                          className={`
                            mb-3
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            px-3
                            py-1
                            text-xs
                            font-bold
                            text-white

                            ${item.color}
                          `}
                        >

                          {item.icon}

                          {item.year}

                        </span>

                        {/* TITLE */}
                        <h3 className="mb-2 text-lg font-bold text-ngo-primary">

                          {item.title}

                        </h3>

                        {/* DESC */}
                        <p className="text-sm leading-relaxed text-gray-600">

                          {item.description}

                        </p>
                      </div>
                    </div>

                    {/* NODE */}
                    <div
                      className="
                        absolute
                        left-0
                        top-4

                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-full
                        border-4
                        border-white

                        shadow-lg

                        md:static
                        md:h-12
                        md:w-12

                        ${item.color}
                      "
                    >

                      <div className={`${item.color} flex h-full w-full items-center justify-center rounded-full text-white`}>

                        {item.icon}

                      </div>
                    </div>

                    {/* SPACER */}
                    <div className="hidden md:block md:w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ngo-primary to-blue-900 py-16 md:py-24">

        <div className="absolute inset-0 bg-black/20" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
            }}

            className="mx-auto max-w-4xl text-center"
          >

            <FaQuoteLeft
              size={40}
              className="mx-auto mb-6 text-ngo-secondary/30"
            />

            <blockquote
              className="
                mb-8
                text-xl
                font-medium
                leading-relaxed
                text-white

                md:text-2xl
                lg:text-3xl
              "
            >

              "The best way to find yourself is
              to lose yourself in the service
              of others."

            </blockquote>

            <cite className="flex items-center justify-center gap-3 not-italic">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-ngo-secondary/20
                "
              >

                <FaHeart
                  size={18}
                  className="text-ngo-secondary"
                />

              </div>

              <div className="text-left">

                <span className="block font-semibold text-white">

                  Mahatma Gandhi

                </span>

                <span className="text-sm text-gray-400">

                  Inspiration for our mission

                </span>
              </div>
            </cite>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <Team />

      {/* CTA */}
      <section className="overflow-hidden bg-ngo-bg py-14 md:py-20">

        <div className="container mx-auto px-4 md:px-6">

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

            className="
              relative
              mx-auto
              max-w-4xl
              overflow-hidden
              rounded-[2rem]
              border
              border-gray-100
              bg-white
              p-6
              shadow-xl

              sm:p-8
              md:p-12
            "
          >

            {/* BG */}
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-ngo-secondary/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-ngo-primary/10 blur-3xl" />

            {/* ICON */}
            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: 4,
              }}

              className="
                relative
                z-10
                mx-auto
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-ngo-secondary
                to-orange-500
                text-white
                shadow-xl
              "
            >

              <FaHandHoldingHeart size={28} />

            </motion.div>

            {/* TITLE */}
            <h2
              className="
                relative
                z-10
                text-center
                text-2xl
                font-bold
                leading-tight
                text-ngo-primary

                sm:text-3xl
                md:text-4xl
              "
            >

              Ready to Make a Difference?

            </h2>

            {/* TEXT */}
            <p
              className="
                relative
                z-10
                mx-auto
                mt-4
                max-w-2xl
                text-center
                text-sm
                leading-relaxed
                text-gray-600

                sm:text-base
                md:text-lg
              "
            >

              Join volunteers helping communities
              through education, healthcare,
              and sustainable development.

            </p>

            {/* BUTTON */}
            <div className="relative z-10 mt-8 flex justify-center">

              <motion.a
                href="/volunteer"

                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}

                whileTap={{
                  scale: 0.96,
                }}

                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-gradient-to-r
                  from-ngo-primary
                  to-blue-700

                  px-7
                  py-3.5

                  text-sm
                  font-semibold
                  text-white

                  shadow-lg

                  transition-all
                  duration-300

                  hover:from-ngo-secondary
                  hover:to-orange-500

                  sm:text-base
                "
              >

                Become a Volunteer

                <ArrowRight size={18} />

              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}