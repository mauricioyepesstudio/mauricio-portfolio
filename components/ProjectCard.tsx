"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block"
    >
      <motion.article
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.45,
        }}
        className="overflow-hidden rounded-[38px] border border-white/10 bg-[#0d0d0d] transition-all duration-500 hover:border-white/20"
      >
        {/* IMAGE */}

        <div className="relative aspect-[16/10] overflow-hidden">

          <motion.img
            src={project.heroImage}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 1,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

          {/* CATEGORY */}

          <div className="absolute left-8 top-8">

            <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur-md">
              {project.category}
            </span>

          </div>

          {/* ARROW */}

          <motion.div
            whileHover={{
              rotate: 45,
              scale: 1.08,
            }}
            className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black"
          >
            <ArrowUpRight size={22} />
          </motion.div>

          {/* TITLE */}

          <div className="absolute bottom-0 left-0 right-0 p-8">

            <h3 className="text-[44px] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
              {project.title}
            </h3>

            <p className="mt-3 text-white/70">
              {project.client}
            </p>

          </div>

        </div>

        {/* CONTENT */}

        <div className="px-8 py-8">

          <p className="text-[17px] leading-8 text-white/70">
            {project.excerpt}
          </p>

          {/* SERVICES */}

          <div className="mt-8 flex flex-wrap gap-3">

            {project.services.slice(0, 4).map((service) => (

              <span
                key={service}
                className="rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/60"
              >
                {service}
              </span>

            ))}

          </div>

          {/* FOOTER */}

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                YEAR
              </p>

              <p className="mt-2 text-lg text-white">
                {project.year}
              </p>

            </div>

            <motion.div
              whileHover={{
                x: 8,
              }}
              className="flex items-center gap-3 font-medium text-gold"
            >
              View Case Study

              <ArrowUpRight size={18} />

            </motion.div>

          </div>

        </div>

      </motion.article>
    </Link>
  );
}