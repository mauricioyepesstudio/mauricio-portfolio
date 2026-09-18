"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandWordmark from "@/components/BrandWordmark";

const links = [
  { href: "/real-group-entertainment", label: "RGE" },
  { href: "/evolusa", label: "EVOLUSA" },
  { href: "/belong", label: "BELONG" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Locks page scroll and closes the menu on Escape while it's open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // The mobile menu needs an opaque backdrop to be visible/usable — without
  // this, opening it while `scrolled` is still false (e.g. at the very top of
  // a page) rendered the links over a fully transparent background, blending
  // into whatever content sat behind the nav.
  const solidBackground = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-6 sm:px-6">
      <motion.div
        animate={{
          width: scrolled ? "92%" : "96%",
        }}
        transition={{
          duration: 0.35,
        }}
        className={`max-w-[1450px] rounded-[28px] border transition-all duration-500 sm:rounded-full ${
          solidBackground
            ? "border-white/10 bg-[#0b0b0bcc] shadow-2xl backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="flex h-16 items-center justify-between gap-4 px-4 sm:h-20 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 rounded p-1 transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            aria-label="Real Group Entertainment — Home"
          >
            <Image
              src="/brand/rge/rge-mark-white.png"
              alt=""
              width={32}
              height={35}
              className="h-8 w-auto"
            />
            <BrandWordmark as="span" />
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((link) => {
              const active =
                pathname === link.href ||
                (link.href === "/portfolio" && pathname.startsWith("/portfolio"));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative text-sm uppercase tracking-[0.25em] transition-colors ${
                      active ? "text-paper" : "text-bone hover:text-paper"
                    }`}
                  >
                    {link.label}

                    {active && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-3 left-0 right-0 h-px bg-gold"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="hidden rounded-full border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.28em] text-paper transition-all duration-300 hover:scale-105 hover:bg-paper hover:text-black md:inline-flex"
          >
            Let&apos;s Talk
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-white/10 px-8 py-8">
                <ul className="space-y-6">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                        className={`block rounded py-2 text-3xl font-serif focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                          pathname.startsWith(link.href)
                            ? "text-gold"
                            : "text-paper"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
