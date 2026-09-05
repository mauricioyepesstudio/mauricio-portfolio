"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HeroStats from "@/components/HeroStats";

const headlineLines = [
  { text: "Creative Director.", accent: false },
  { text: "Building brands", accent: false },
  { text: "people remember.", accent: true },
] as const;

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

function HeroCTAs({ variants }: { variants: typeof line }) {
  return (
    <motion.div
      variants={variants}
      className="order-3 col-span-12 flex w-full flex-col gap-3 pt-7 lg:order-none lg:col-span-auto lg:pt-4 lg:flex-row lg:gap-4"
    >
      <Link
        href="/portfolio"
        className="flex min-h-11 w-full items-center justify-center rounded-full bg-paper px-8 py-3.5 text-sm font-medium text-black transition hover:scale-105 lg:w-auto lg:py-4"
      >
        View Portfolio
      </Link>

      <Link
        href="/contact"
        className="flex min-h-11 w-full items-center justify-center rounded-full border border-line px-8 py-3.5 text-sm font-medium text-paper transition hover:border-paper lg:w-auto lg:py-4"
      >
        Let&apos;s Talk
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex overflow-hidden bg-radial-fade max-lg:items-start lg:min-h-screen lg:items-center">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container-px relative z-10 mx-auto w-full max-w-[1600px] pb-24 pt-[6.25rem] sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-32">
        <div className="grid grid-cols-12 items-center gap-y-6 sm:gap-y-8 lg:gap-x-20 lg:gap-y-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-lg:contents lg:col-span-5 lg:flex lg:flex-col lg:gap-8"
          >
            <motion.div variants={line} className="order-1 col-span-12">
              <motion.span
                variants={line}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs uppercase tracking-[0.3em] text-bone sm:mb-8"
              >
                Miami • Creative Direction • Marketing
              </motion.span>

              <h1 className="space-y-1.5 sm:space-y-2">
                {headlineLines.map((lineItem) => (
                  <motion.span
                    key={lineItem.text}
                    variants={line}
                    className={`block text-[2.65rem] font-semibold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl ${
                      lineItem.accent
                        ? "font-serif font-normal italic text-gold"
                        : "text-paper"
                    }`}
                  >
                    {lineItem.text}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                variants={line}
                className="mt-5 max-w-xl text-base leading-7 text-bone sm:mt-6 sm:text-lg sm:leading-8 lg:mt-8"
              >
                Twelve years directing brand identities, advertising campaigns
                and lead-generation systems — from a South Florida
                home-improvement publication&apos;s ad network to product
                launches for international beauty brands.
              </motion.p>
            </motion.div>

            <HeroCTAs variants={line} />
          </motion.div>

          <div className="relative order-2 col-span-12 flex min-h-[240px] w-full max-w-full items-end justify-center overflow-x-clip sm:min-h-[380px] md:min-h-[480px] lg:order-none lg:col-span-7 lg:min-h-[760px] lg:overflow-visible lg:justify-end">
            <div className="hero-portrait-glow absolute left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px] sm:h-[400px] sm:w-[400px] lg:h-[620px] lg:w-[620px]" />

            <Image
              src="/images/mauricio.png"
              alt="Mauricio Yepes"
              width={900}
              height={1200}
              priority
              sizes="(min-width: 1024px) 610px, (min-width: 768px) 430px, (min-width: 640px) 340px, 220px"
              className="hero-portrait-mark relative z-10 mx-auto h-auto w-[220px] max-w-[calc(100vw-3rem)] object-contain object-bottom sm:w-[340px] lg:w-[610px] lg:max-w-[610px]"
            />
          </div>
        </div>

        <HeroStats />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-bone"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
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
