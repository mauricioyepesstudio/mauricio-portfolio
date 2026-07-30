"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block"
      aria-label={`View case study: ${project.title}`}
    >
      <motion.article
        whileHover={{
  y: -8,
  scale: 1.015,
}}
        transition={{ duration: 0.35 }}
        className="overflow-hidden rounded-[36px] border border-white/10 bg-[#0f0f0f] transition-all duration-500 hover:border-white/20"
      >
        <div className="relative aspect-[16/9] overflow-hidden">

          {project.heroImage ? (
            <motion.img
              src={project.heroImage}
              alt={project.title}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})`,
              }}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-10">

            <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-3">
              {project.category}
            </p>

            <h3 className="text-white text-[48px] font-semibold leading-[0.95] tracking-[-0.03em]">
              {project.title}
            </h3>

            <p className="text-white/70 mt-3">
              {project.client}
            </p>

          </div>

          <motion.div
            whileHover={{
              rotate: 45,
              scale: 1.1,
            }}
            className="absolute top-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl"
          >
            <ArrowUpRight size={22} />
          </motion.div>

        </div>

        <div className="px-10 py-9">

          <p className="text-white/70 text-[18px] leading-9">
            {project.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/60"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

            <span className="text-sm text-white/40">
              {project.year}
            </span>

            <span className="flex items-center gap-2 font-medium text-gold transition-all group-hover:gap-4">
              View Case Study
              <ArrowUpRight size={16} />
            </span>

          </div>

        </div>

      </motion.article>
    </Link>
  );
}