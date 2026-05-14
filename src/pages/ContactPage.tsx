import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import {
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

/* ============================================================================
   CONTACT INFO
============================================================================ */

const CONTACT_CARDS = [
  {
    icon: <FaEnvelope size={20} />,
    title: "Email Us",
    detail: "falconarmy.ngo@gmail.com",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },

  {
    icon: <FaPhoneAlt size={20} />,
    title: "Call Us",
    detail: "+91 9685958831",
    sub: "Mon-Sun,",
    color: "text-green-600",
    bg: "bg-green-50",
  },

  {
    icon: <FaMapMarkerAlt size={20} />,
    title: "Visit Our Office",
    detail: "Indore, MP",
    sub: "331 Samrth Dream City",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },

  {
    icon: <FaClock size={20} />,
    title: "Working Days",
    detail: "Monday - Sunday",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

/* ============================================================================
   COMPONENT
============================================================================ */
export default function ContactPage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-ngo-primary
          via-blue-900
          to-black

          pt-24
          pb-16

          md:pt-32
          md:pb-24
        "
      >
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
              <MessageCircle size={14} className="text-ngo-secondary" />
              We're Here to Help
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
              Get In <span className="text-ngo-secondary">Touch</span>
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
              Have questions, want to volunteer, collaborate, or support our
              mission? We’d love to connect with you.
            </p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-4

                sm:flex-row
              "
            >
              {/* EMAIL */}
              <a
                href="mastterkrish812@gmail.com"
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
                "
              >
                <FaEnvelope size={15} />
                Email Directly
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919685958831"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-green-500

                  px-6
                  py-3

                  text-sm
                  font-semibold
                  text-white

                  shadow-lg
                  transition-all

                  hover:bg-green-600
                "
              >
                <FaWhatsapp size={16} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section
        className="
          relative
          z-20

          -mt-6
          bg-white

          py-10

          md:-mt-10
          md:py-14
        "
      >
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="
              grid
              gap-4

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {CONTACT_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
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
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-2xl
                  border
                  border-gray-100

                  bg-ngo-bg
                  p-5

                  transition-all
                  duration-300

                  hover:border-ngo-secondary/30
                  hover:shadow-lg
                "
              >
                {/* ICON */}
                <div
                  className={`
                    mb-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-xl

                    ${card.bg}
                    ${card.color}
                  `}
                >
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="mb-1 text-lg font-bold text-ngo-primary">
                  {card.title}
                </h3>

                {/* DETAIL */}
                <p className="mb-1 text-sm font-medium text-gray-800">
                  {card.detail}
                </p>

                {/* SUB */}
                <p className="text-xs text-gray-500">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="bg-ngo-bg py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="
              grid
              items-start
              gap-8

              lg:grid-cols-5
              lg:gap-14
            "
          >
            {/* FORM */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="lg:col-span-3"
            >
              <div
                className="
                  rounded-3xl
                  border
                  border-gray-100

                  bg-white

                  p-5

                  shadow-xl

                  sm:p-6
                  md:p-8
                "
              >
                {/* HEADER */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-full
                      bg-ngo-primary/10
                    "
                  >
                    <MessageCircle size={20} className="text-ngo-primary" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-ngo-primary">
                      Send Us a Message
                    </h2>

                    <p className="text-sm text-gray-500">
                      Fill out the form and our team will connect with you.
                    </p>
                  </div>
                </div>

                <ContactForm />
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                space-y-6

                lg:col-span-2
              "
            >
              {/* WHY CONTACT */}
              <div
                className="
                  rounded-3xl

                  bg-gradient-to-br
                  from-ngo-primary
                  to-blue-900

                  p-6

                  text-white
                  shadow-xl

                  md:p-8
                "
              >
                <h3
                  className="
                    mb-5
                    flex
                    items-center
                    gap-2

                    text-xl
                    font-bold
                  "
                >
                  <ShieldCheck size={20} className="text-ngo-secondary" />
                  Why Connect With Us?
                </h3>

                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    "Volunteer opportunities",

                    "Partnership & collaboration support",

                    "Educational initiative details",

                    "Help and general assistance",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <CheckCircle
                        size={16}
                        className="
                          mt-0.5
                          flex-shrink-0
                          text-green-400
                        "
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOCIAL */}
              <div
                className="
                  rounded-2xl
                  border
                  border-gray-100

                  bg-white
                  p-6

                  shadow-lg
                "
              >
                <h3
                  className="
                    mb-5
                    text-lg
                    font-bold
                    text-ngo-primary
                  "
                >
                  Follow Our Journey
                </h3>

                <div className="flex flex-wrap items-center gap-3">
                  {[

                    {
                      icon: <FaInstagram size={16} />,
                      url: "https://www.instagram.com/fses.ngo?igsh=Mm1lNmQ2cTQydGlv",
                      color: "hover:bg-pink-600",
                    },

                    {
                      icon: <FaLinkedinIn size={16} />,
                      url: "https://www.linkedin.com/company/falconarmyngo/",
                      color: "hover:bg-blue-700",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-full

                        bg-gray-100
                        text-gray-600

                        shadow-sm

                        transition-all
                        duration-300

                        hover:text-white
                        ${social.color}
                      `}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
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
            className="
              relative
              overflow-hidden

              rounded-3xl

              bg-gradient-to-r
              from-ngo-primary
              to-blue-800

              p-8

              text-center
              shadow-xl

              md:p-12
            "
          >
            {/* BG EFFECT */}
            <div
              className="
                absolute
                inset-0
                opacity-10

                bg-[radial-gradient(circle_at_30%_50%,_#F59E0B_0%,_transparent_50%)]
              "
            />

            <div className="relative z-10">
              <h2
                className="
                  mb-4
                  text-2xl
                  font-bold
                  text-white

                  md:text-3xl
                "
              >
                Ready to Create Impact Together?
              </h2>

              <p
                className="
                  mx-auto
                  mb-8
                  max-w-xl

                  text-sm
                  leading-relaxed
                  text-blue-100

                  md:text-base
                "
              >
                Join thousands of volunteers helping communities across India.
              </p>

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

                  bg-ngo-secondary

                  px-6
                  py-3

                  text-sm
                  font-semibold
                  text-white

                  shadow-lg
                  transition-all

                  hover:bg-orange-500
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
