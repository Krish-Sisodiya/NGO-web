import { motion } from "framer-motion";

import { FaHandHoldingHeart, FaAward } from "react-icons/fa";

import { ArrowRight as ArrowRightLucide } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Causes from "../components/Causes";

/* ============================================================================
   GALLERY
============================================================================ */

const GALLERY_IMAGES = [
  {
    src: "/assets/img-6.jpg",

    title: "School of Second Chance",

    category: "Evening Learning Initiative",
  },

  {
    src: "/assets/img-5.jpeg",

    title: "Guest Lecture Sessions",

    category: "Technology & Awareness Program",
  },

  {
    src: "/assets/img-7.jpeg",

    title: "Sunday Shikshak",

    category: "Community Education Drive",
  },

  {
    src: "/assets/img-2.jpg",

    title: "Community Connect",

    category: "Social Engagement Initiative",
  },

  {
    src: "/assets/img-4.jpg",

    title: "Cleanliness Drive",

    category: "Hygiene & Civic Awareness",
  },

  {
    src: "/assets/img-3.JPG",

    title: "Colors For Change",

    category: "Creativity & Happiness Campaign",
  },
];

/* ============================================================================
   COMPONENT
============================================================================ */

export default function CausesPage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ngo-primary via-blue-900 to-black pt-24 pb-16 md:pt-32 md:pb-24">
        {/* BG EFFECTS */}
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
                text-xs
                font-medium
                text-white
                backdrop-blur-sm

                sm:text-sm
              "
            >
              <FaAward size={14} className="text-ngo-secondary" />
              Impact-Driven Initiatives
            </motion.span>

            {/* TITLE */}
            <h1
              className="
                mb-5
                text-4xl
                font-bold
                leading-tight
                text-white

                sm:text-5xl
                lg:text-6xl
              "
            >
              Our <span className="text-ngo-secondary">Causes</span>
            </h1>

            {/* DESC */}
            <p
              className="
                mx-auto
                mb-8
                max-w-3xl
                text-base
                leading-relaxed
                text-gray-300

                md:text-xl
              "
            >
              Every initiative is focused on creating meaningful impact through
              education, awareness, and community support.
            </p>

            {/* BUTTON */}
            <motion.a
              href="#causes"
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
              Explore Programs
              <ArrowRightLucide size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CAUSES */}
      <div id="causes" >
        <Causes />
      </div>

      {/* GALLERY */}
      <section
        id="gallery"
        className="
          relative
          overflow-hidden
          bg-white
          py-14

          md:py-20
        "
      >
        {/* BG */}
        <div
          className="
            absolute
            top-0
            left-1/2
            h-32
            w-full
            -translate-x-1/2

            bg-gradient-to-b
            from-ngo-bg
            to-white
          "
        />

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
              Impact <span className="text-ngo-secondary">In Action</span>
            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              Real moments from our initiatives and community programs.
            </p>
          </motion.div>

          {/* GRID */}
          <div
            className="
              mx-auto
              grid
              max-w-6xl
              grid-cols-1
              gap-4

              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {GALLERY_IMAGES.map((image, i) => (
              <motion.div
                key={i}
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
                transition={{
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-2xl
                  shadow-md
                "
              >
                {/* IMAGE */}
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover

                    transition-transform
                    duration-500

                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent

                    opacity-0

                    transition-opacity
                    duration-300

                    group-hover:opacity-100
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0

                    translate-y-4
                    p-4

                    opacity-0

                    transition-all
                    duration-300

                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <span
                    className="
                      mb-2
                      inline-block
                      rounded-full
                      bg-ngo-secondary/90
                      px-2
                      py-1
                      text-xs
                      text-white
                    "
                  >
                    {image.category}
                  </span>

                  <h4 className="mb-1 text-sm font-semibold text-white">
                    {image.title}
                  </h4>
                </div>

                {/* PLAY ICON 
                <div
                  className="
                    absolute
                    top-3
                    right-3

                    flex
                    h-8
                    w-8
                    items-center
                    justify-center

                    rounded-full
                    bg-white/90

                    opacity-0

                    transition-opacity

                    group-hover:opacity-100
                  "
                >
                  

                  <FaPlayCircle
                    size={16}
                    className="text-ngo-primary"
                  />

                </div>
                */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE 
      <section
        className="
          relative
          overflow-hidden

          bg-gradient-to-br
          from-ngo-primary
          to-blue-900

          py-16
          md:py-20
        "
      >

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
              "
            >

              "We make a living by what we get,
              but we make a life by what we give."

            </blockquote>

            <cite
              className="
                flex
                items-center
                justify-center
                gap-3

                not-italic
                text-gray-300
              "
            >

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

                  Winston Churchill

                </span>

                <span className="text-sm text-gray-400">

                  Inspiring our giving spirit

                </span>
              </div>
            </cite>
          </motion.div>
        </div>
      </section>

      */}

      {/* CTA */}
      <section className="bg-ngo-bg py-14 md:py-20">
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
              mx-auto
              max-w-4xl

              rounded-3xl
              border
              border-gray-100

              bg-white

              p-6

              text-center

              shadow-xl

              sm:p-8
              md:p-12
            "
          >
            {/* ICON */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="
                mb-6
                inline-flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-ngo-secondary
                to-orange-500

                text-white
                shadow-lg
              "
            >
              <FaHandHoldingHeart size={28} />
            </motion.div>

            {/* TITLE */}
            <h2
              className="
                mb-4
                text-2xl
                font-bold
                text-ngo-primary

                sm:text-3xl
                md:text-4xl
              "
            >
              Be a Part of the Change
            </h2>

            {/* DESC */}
            <p
              className="
                mx-auto
                mb-8
                max-w-2xl
                text-sm
                leading-relaxed
                text-gray-600

                sm:text-base
                md:text-lg
              "
            >
              Your support through volunteering, awareness, and community
              participation can help create a better future for children and
              society.
            </p>

            {/* BUTTON */}
            <motion.a
              href="/volunteer"
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
                from-ngo-primary
                to-blue-700

                px-8
                py-3.5

                text-sm
                font-semibold
                text-white

                shadow-lg

                transition-all

                hover:from-ngo-secondary
                hover:to-orange-500

                sm:text-base
              "
            >
              Volunteer With Us
              <ArrowRightLucide size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
