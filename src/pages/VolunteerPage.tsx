import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHeart,
  FaUsers,
  FaGlobe,
  FaAward,
  FaClipboardList,
  FaVideo,
  FaHandshake,
  FaRocket,
  FaGraduationCap,
  FaStethoscope,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaUserCircle,
} from "react-icons/fa";

import { ArrowRight } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

/* ============================================================================
   VOLUNTEER ROLES
============================================================================ */

const VOLUNTEER_ROLES = [
  {
    title: "Education Mentor",
    icon: <FaGraduationCap size={24} />,
    description:
      "Teach underprivileged children and conduct digital literacy workshops.",
    commitment: "4-6 hrs/week",
    location: "On-site & Remote",
    gradient: "from-blue-500 to-cyan-400",
  },

  {
    title: "Healthcare Support",
    icon: <FaStethoscope size={24} />,
    description:
      "Assist in health camps, awareness drives, and rural healthcare programs.",
    commitment: "6-8 hrs/week",
    location: "On-site",
    gradient: "from-green-500 to-emerald-400",
  },

  {
    title: "Event & Outreach",
    icon: <FaCalendarAlt size={24} />,
    description:
      "Coordinate campaigns, volunteer onboarding, and field logistics.",
    commitment: "Flexible",
    location: "Hybrid",
    gradient: "from-orange-500 to-amber-400",
  },

  {
    title: "Digital & Tech",
    icon: <FaGlobe size={24} />,
    description:
      "Manage website, social media, data systems, and tech tools.",
    commitment: "3-5 hrs/week",
    location: "Remote",
    gradient: "from-purple-500 to-pink-400",
  },
];

/* ============================================================================
   PROCESS STEPS
============================================================================ */

const PROCESS_STEPS = [
  {
    icon: <FaClipboardList size={20} />,
    title: "Apply Online",
    desc: "Fill out the volunteer application form.",
  },

  {
    icon: <FaVideo size={20} />,
    title: "Orientation",
    desc: "Attend a quick virtual orientation session.",
  },

  {
    icon: <FaHandshake size={20} />,
    title: "Role Match",
    desc: "Get assigned to a suitable volunteer role.",
  },

  {
    icon: <FaRocket size={20} />,
    title: "Start Impacting",
    desc: "Begin your volunteering journey with us.",
  },
];

/* ============================================================================
   TESTIMONIALS
============================================================================ */

const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    role: "Education Mentor",
    quote:
      "Volunteering here transformed my perspective and gave my work real meaning.",
  },

  {
    name: "Rohan Mehta",
    role: "Tech Volunteer",
    quote:
      "The transparency and impact tracking make this NGO truly different.",
  },

  {
    name: "Priya Nair",
    role: "Healthcare Support",
    quote:
      "Amazing team, flexible work, and genuine community impact.",
  },
];

/* ============================================================================
   FAQ
============================================================================ */

const FAQS = [
  {
    q: "Who can volunteer?",
    a: "Anyone aged 16+ can volunteer. Students, professionals, and retirees are welcome.",
  },

  {
    q: "Minimum time commitment?",
    a: "We recommend at least 3 hours/week for consistent impact.",
  },

  {
    q: "Will I receive a certificate?",
    a: "Yes, all active volunteers receive certificates and recommendations.",
  },

  {
    q: "Is remote volunteering available?",
    a: "Yes, several roles are fully remote or hybrid.",
  },
];

/* ============================================================================
   COMPONENT
============================================================================ */

export default function VolunteerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />

      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-gradient-to-br from-ngo-primary via-blue-900 to-black pt-24 pb-16 md:pt-32 md:pb-24">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-ngo-secondary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-ngo-primary/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl text-center"
          >

            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              <FaHeart
                size={14}
                className="animate-pulse text-ngo-secondary"
              />

              Join 2,000+ Changemakers
            </motion.span>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Volunteer With{" "}
              <span className="text-ngo-secondary">
                Purpose
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
              Lend your time, skills, and passion to create measurable impact
              across communities.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

              <button
                onClick={() =>
                  (window.location.href = "#apply")
                }
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-ngo-secondary to-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
              >
                Apply Now

                <ArrowRight size={18} />
              </button>

              <button
                onClick={() =>
                  (window.location.href = "/contact")
                }
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Contact Us
              </button>

            </div>

          </motion.div>
        </div>
      </section>

      {/* WHY VOLUNTEER */}

      <section className="relative z-20 -mt-8 bg-white py-12 md:-mt-12 md:py-20">

        <div className="container mx-auto px-5 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">

            <h2 className="mb-3 text-3xl font-bold text-ngo-primary md:text-4xl">
              Why{" "}
              <span className="text-ngo-secondary">
                Volunteer?
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              Grow personally while creating real-world impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: <FaAward size={24} />,
                title: "Skill Development",
                desc: "Build leadership and communication skills.",
              },

              {
                icon: <FaUsers size={24} />,
                title: "Community",
                desc: "Connect with passionate changemakers.",
              },

              {
                icon: <FaGlobe size={24} />,
                title: "Real Impact",
                desc: "See your contribution change lives.",
              },

              {
                icon: <FaHeart size={24} />,
                title: "Growth",
                desc: "Develop empathy and confidence.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-gray-100 bg-ngo-bg p-6 shadow-md transition-all"
              >

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-ngo-primary shadow-sm">
                  {item.icon}
                </div>

                <h3 className="mb-2 text-lg font-bold text-ngo-primary">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER ROLES */}

      <section className="bg-ngo-bg py-16 md:py-24">

        <div className="container mx-auto px-5 sm:px-6 lg:px-8">

          <div className="mb-14 text-center">

            <h2 className="mb-3 text-3xl font-bold text-ngo-primary md:text-4xl">
              Explore{" "}
              <span className="text-ngo-secondary">
                Roles
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              Find the perfect volunteering opportunity for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {VOLUNTEER_ROLES.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all md:p-8"
              >

                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${role.gradient} text-white shadow-md`}
                >
                  {role.icon}
                </div>

                <h3 className="mb-2 text-xl font-bold text-ngo-primary">
                  {role.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {role.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-3">

                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    {role.commitment}
                  </span>

                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    {role.location}
                  </span>

                </div>

                <button
                  onClick={() =>
                    (window.location.href = "#apply")
                  }
                  className="w-full rounded-xl border-2 border-ngo-primary py-3 text-sm font-semibold text-ngo-primary transition-all hover:bg-ngo-primary hover:text-white"
                >
                  Apply for This Role
                </button>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="bg-white py-16 md:py-24">

        <div className="container mx-auto px-5 sm:px-6 lg:px-8">

          <div className="mb-14 text-center">

            <h2 className="mb-3 text-3xl font-bold text-ngo-primary md:text-4xl">
              Your{" "}
              <span className="text-ngo-secondary">
                Journey
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              A simple and supportive process.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">

            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center"
              >

                <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ngo-primary shadow-md">
                    {step.icon}
                  </div>

                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-ngo-secondary text-xs font-bold text-white">
                    {i + 1}
                  </div>

                </div>

                <h3 className="mb-1 font-bold text-ngo-primary">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {step.desc}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="relative overflow-hidden bg-gradient-to-br from-ngo-primary to-blue-900 py-16 text-white md:py-24">

        <div className="absolute inset-0 bg-black/20" />

        <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">

            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Voices of{" "}
              <span className="text-ngo-secondary">
                Impact
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-blue-100">
              Hear from volunteers creating change.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >

                <p className="mb-4 text-sm italic leading-relaxed text-gray-200">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ngo-secondary/30">
                    <FaUserCircle
                      size={20}
                      className="text-ngo-secondary"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {t.name}
                    </h4>

                    <p className="text-xs text-blue-200">
                      {t.role}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-ngo-bg py-16 md:py-24">

        <div className="container mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">

            <h2 className="mb-3 text-3xl font-bold text-ngo-primary">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600">
              Quick answers to common questions.
            </p>

          </div>

          <div className="space-y-4">

            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white"
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                  className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 md:p-5"
                >

                  <span className="pr-4 font-semibold text-ngo-primary">
                    {faq.q}
                  </span>

                  {openFaq === i ? (
                    <FaChevronUp
                      size={16}
                      className="flex-shrink-0 text-ngo-secondary"
                    />
                  ) : (
                    <FaChevronDown
                      size={16}
                      className="flex-shrink-0 text-gray-400"
                    />
                  )}

                </button>

                <AnimatePresence>

                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="border-t border-gray-100 px-5 pt-4 pb-5 text-sm leading-relaxed text-gray-600"
                    >
                      {faq.a}
                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}

      <section
        id="apply"
        className="bg-white py-16 md:py-20"
      >

        <div className="container mx-auto px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl">

            <div className="mb-10 text-center">

              <h2 className="mb-3 text-3xl font-bold text-ngo-primary md:text-4xl">
                Apply As a Volunteer
              </h2>

              <p className="text-gray-600">
                Fill out the form and our team will contact you shortly.
              </p>

            </div>

            <ContactForm />

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}