"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-px flex items-center justify-between h-20"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-serif italic text-3xl tracking-tight text-paper hover:text-gold transition-colors"
        >
          MY
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href === "/portfolio" &&
                pathname.startsWith("/portfolio"));

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm uppercase tracking-[0.18em] transition-colors ${
                    active
                      ? "text-paper"
                      : "text-bone hover:text-paper"
                  }`}
                >
                  {link.label}

                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full border border-line px-6 py-2 text-sm uppercase tracking-[0.18em] text-paper transition-all hover:bg-paper hover:text-ink"
        >
          Let&apos;s Talk
        </Link>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:hidden overflow-hidden border-t border-line bg-ink"
          >
            <ul className="container-px py-8 flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-3xl font-serif ${
                      pathname.startsWith(link.href)
                        ? "text-gold"
                        : "text-paper"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <Link
                href="/contact"
                className="mt-4 inline-flex w-fit rounded-full border border-line px-6 py-3 text-sm uppercase tracking-[0.18em] text-paper"
              >
                Let&apos;s Talk
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}