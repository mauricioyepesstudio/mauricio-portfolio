import Link from "next/link";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-px max-w-content mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.24em] text-paper">
              Mauricio Yepes
            </p>
            <p className="text-bone text-sm mt-3 max-w-xs">
              Creative direction, marketing strategy and multidisciplinary design —
              from magazine publishing to international product launches.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio" className="text-bone hover:text-paper transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-bone hover:text-paper transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-bone hover:text-paper transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-bone hover:text-paper transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:rgentertainmentmanagement@gmail.com"
                  className="flex items-center gap-2 text-bone hover:text-paper transition-colors"
                >
                  <Mail size={16} /> rgentertainmentmanagement@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mauricio-yepes-lotero/?locale=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-bone hover:text-paper transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/mauricioyepes01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-bone hover:text-paper transition-colors"
                >
                  <ExternalLink size={16} /> Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row justify-between gap-4 text-xs text-bone">
          <p>© {year} Mauricio Yepes. All rights reserved.</p>
          <p>Miami, FL · Available for select engagements</p>
        </div>
      </div>
    </footer>
  );
}
