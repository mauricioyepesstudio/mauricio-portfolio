import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

type ProjectNavigationProps = {
  previous?: {
    slug: string;
    title: string;
  };

  next?: {
    slug: string;
    title: string;
  };
};

export default function ProjectNavigation({
  previous,
  next,
}: ProjectNavigationProps) {
  return (
    <Reveal delay={0.2}>
      <section className="mt-40">

        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#121212] to-[#090909] p-10 md:p-16">

          <div className="mb-12">

            <p className="eyebrow mb-4">
              Continue Exploring
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-paper md:text-5xl">
              Discover more case studies and creative work.
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Previous */}

            {previous ? (

              <Link
                href={`/portfolio/${previous.slug}`}
                className="group rounded-[28px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.04]"
              >

                <div className="mb-10 flex items-center gap-3 text-bone">

                  <ArrowLeft size={18} />

                  <span className="text-xs uppercase tracking-[0.3em]">
                    Previous
                  </span>

                </div>

                <h3 className="text-3xl font-semibold text-paper transition-colors group-hover:text-gold">
                  {previous.title}
                </h3>

              </Link>

            ) : (
              <div />
            )}

            {/* Next */}

            {next ? (

              <Link
                href={`/portfolio/${next.slug}`}
                className="group rounded-[28px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.04]"
              >

                <div className="mb-10 flex items-center justify-end gap-3 text-bone">

                  <span className="text-xs uppercase tracking-[0.3em]">
                    Next Project
                  </span>

                  <ArrowRight size={18} />

                </div>

                <h3 className="text-right text-3xl font-semibold text-paper transition-colors group-hover:text-gold">
                  {next.title}
                </h3>

              </Link>

            ) : (
              <div />
            )}

          </div>

          <div className="mt-14 text-center">

            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-white/10 px-8 py-4 text-sm uppercase tracking-[0.25em] text-paper transition-all duration-300 hover:bg-paper hover:text-black"
            >
              View All Projects
            </Link>

          </div>

        </div>

      </section>
    </Reveal>
  );
}