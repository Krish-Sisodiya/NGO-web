import { motion } from "framer-motion";
import { FaHandHoldingHeart,} from "react-icons/fa";

import { ArrowRight } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Story from "../components/Story";

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
            {/* BADGE 
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
            */}

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
              About Falcon Social and{" "}
              <span className="text-ngo-secondary">Educational Society</span>
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
              Falcon Social and Educational Society is a non-profit organization
              dedicated to empowering children and communities through
              education, awareness, and social development initiatives. We work
              to create equal learning opportunities and inspire positive change
              in society.
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

      {/* STORY */}
      <Story />

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
              Join us in empowering children and communities through education,
              awareness, and social development initiatives.
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
