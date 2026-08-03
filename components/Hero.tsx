"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const words = [
  "Creative Director.",
  "Building brands",
  "people remember.",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const line = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-fade flex items-center min-h-[100svh] lg:min-h-screen">

      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container-px max-w-[1600px] mx-auto w-full relative z-10 pt-36 pb-20 lg:pt-32 lg:pb-20">

        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-20 items-center">

          {/* LEFT */}

          <div className="col-span-12 lg:col-span-5">

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <motion.span
                variants={line}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs uppercase tracking-[0.3em] text-bone"
              >
                Miami • Creative Direction • Branding
              </motion.span>

              <div className="space-y-2">
                {words.map((word) => (
                  <motion.h1
                    key={word}
                    variants={line}
                    className="
text-5xl
sm:text-6xl
md:text-7xl
xl:text-8xl
font-semibold
leading-[0.9]
tracking-tight
text-paper
"
                  >
                    {word}
                  </motion.h1>
                ))}
              </div>

              <motion.p
                variants={line}
                className="
max-w-xl
text-base
sm:text-lg
leading-7
sm:leading-8
text-bone
"
              >
                I create premium brand identities, digital experiences,
                advertising campaigns and marketing systems that help
                companies stand out, grow and connect with the right
                audience.
              </motion.p>

              <motion.div
                variants={line}
                className="
flex
flex-col
sm:flex-row
gap-4
pt-4
"
              >
                <Link
                  href="/portfolio"
                  className="rounded-full bg-paper px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
                >
                  View Portfolio
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-line px-8 py-4 text-sm font-medium text-paper transition hover:border-paper"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>

            </motion.div>

          </div>

          {/* RIGHT */}
          <div
className="
col-span-12
lg:col-span-7
relative
flex
items-end
justify-center
lg:justify-end
min-h-[300px]
sm:min-h-[480px]
lg:min-h-[760px]
"
>

            <div className="absolute h-[300px] w-[300px] sm:h-[620px] sm:w-[620px] rounded-full bg-white/5 blur-[140px]" />

            <Image
  src="/images/mauricio.png"
  alt="Mauricio Yepes"
  width={900}
  height={1200}
  priority
  className="
relative
z-10
w-[240px]
sm:w-[340px]
md:w-[430px]
lg:w-[610px]
h-auto
object-contain
mx-auto
"
/>

          </div>
                    {/* STATS */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="col-span-12 mt-10 border-t border-line pt-10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">

              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                  20+
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                  300+
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                  100+
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                  Brands Worked With
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                  2
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                  Languages
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone"
      >
        <span className="text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={18} />
        </motion.div>

      </motion.div>

    </section>
  );
}