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
    <Reveal delay={0.15}>
      <section className="mt-32 border-t border-line pt-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            {previous && (
              <Link
                href={`/portfolio/${previous.slug}`}
                className="group inline-flex items-center gap-3 text-bone hover:text-paper transition-colors"
              >
                <ArrowLeft size={18} />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-bone">
                    Previous Project
                  </p>

                  <p className="mt-1 text-xl font-serif italic">
                    {previous.title}
                  </p>
                </div>
              </Link>
            )}
          </div>

          <div className="text-left md:text-right">
            {next && (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group inline-flex items-center gap-3 text-bone hover:text-paper transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-bone">
                    Next Project
                  </p>

                  <p className="mt-1 text-xl font-serif italic">
                    {next.title}
                  </p>
                </div>

                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </section>
    </Reveal>
  );
}