"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

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
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function RGEHero() {
  return (
    <section className="relative overflow-hidden bg-radial-fade flex items-center min-h-[100svh] lg:min-h-screen">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container-px max-w-[1600px] mx-auto w-full relative z-10 pt-36 pb-20 lg:pt-32 lg:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl space-y-8"
        >
          <motion.span
            variants={line}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs uppercase tracking-[0.3em] text-bone"
          >
            Miami • Venture Studio
          </motion.span>

          <div className="space-y-2">
            <motion.h1
              variants={line}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-[0.94] tracking-tight text-paper"
            >
              Real products.
            </motion.h1>
            <motion.h1
              variants={line}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-[0.94] tracking-tight text-paper"
            >
              Built with{" "}
              <span className="font-serif italic text-gold">real craft</span>.
            </motion.h1>
          </div>

          <motion.p
            variants={line}
            className="max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-bone"
          >
            Real Group Entertainment builds and operates products end to
            end — EVOLUSA and BELONG are live ventures, not concepts, backed
            by two decades of brand strategy and design craft rather than
            outsourced to whoever's cheapest.
          </motion.p>

          <motion.div
            variants={line}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#ventures"
              className="rounded-full bg-paper px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
            >
              See the Ventures
            </a>
            <Link
              href="/portfolio"
              className="rounded-full border border-line px-8 py-4 text-sm font-medium text-paper transition hover:border-paper"
            >
              Creative &amp; Design Work
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 border-t border-line pt-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                2
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                Live Ventures
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                20+
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                Years Creative Craft
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                $25
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                Per Real Connection, Proven
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                100%
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                Built In-House
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
