"use client";

import Link from "next/link";
import Image from "next/image";
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
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-20 items-center">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <motion.div variants={line} className="flex items-center gap-4">
                <Image
                  src="/brand/rge/rge-mark-white.png"
                  alt="Real Group Entertainment"
                  width={56}
                  height={62}
                  className="h-12 w-auto sm:h-14"
                />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-paper">
                    Real Group Entertainment
                  </p>
                  <p className="text-xs text-bone">by Mauricio Yepes</p>
                </div>
              </motion.div>

              <motion.span
                variants={line}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs uppercase tracking-[0.3em] text-bone"
              >
                Miami • Full-Service Agency
              </motion.span>

              <motion.h1
                variants={line}
                className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-[0.94] tracking-tight text-paper"
              >
                Do you need{" "}
                <span className="font-serif italic text-gold">advertising</span>?
              </motion.h1>

              <motion.p
                variants={line}
                className="max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-bone"
              >
                Real Group Entertainment is a full-service creative agency —
                video, graphic design, web development, and photography —
                led by Mauricio Yepes, plus the team behind two of our own
                live products, EVOLUSA and BELONG. Real work, real clients,
                real craft.
              </motion.p>

              <motion.div
                variants={line}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a
                  href="#services"
                  className="rounded-full bg-paper px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
                >
                  Our Services
                </a>
                <a
                  href="tel:+17543675068"
                  className="rounded-full border border-line px-8 py-4 text-sm font-medium text-paper transition hover:border-paper"
                >
                  754 367 5068
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT — Mauricio's photo */}
          <div className="col-span-12 lg:col-span-6 relative flex items-end justify-center lg:justify-end min-h-[300px] sm:min-h-[480px] lg:min-h-[700px]">
            <div className="absolute h-[300px] w-[300px] sm:h-[560px] sm:w-[560px] rounded-full bg-white/5 blur-[140px]" />
            <Image
              src="/images/mauricio.png"
              alt="Mauricio Yepes"
              width={900}
              height={1200}
              priority
              className="relative z-10 w-[220px] sm:w-[300px] md:w-[380px] lg:w-[520px] h-auto object-contain mx-auto"
            />
          </div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="col-span-12 border-t border-line pt-10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
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
                  4
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                  Service Lines
                </p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                  2
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-bone">
                  Live In-House Products
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
            </div>
          </motion.div>
        </div>
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
