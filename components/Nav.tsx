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
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-6 sm:px-6">

      <motion.div
        animate={{
          width: scrolled ? "92%" : "96%",
        }}
        transition={{
          duration: .35,
        }}
        className={`max-w-[1450px] rounded-[28px] border transition-all duration-500 sm:rounded-full ${
          scrolled
            ? "border-white/10 bg-[#0b0b0bcc] backdrop-blur-2xl shadow-2xl"
            : "border-transparent bg-transparent"
        }`}
      >

        <nav className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8">

          {/* LOGO */}

          <Link
            href="/"
            className="rounded p-1 font-serif text-2xl italic tracking-tight text-paper transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:text-3xl"
          >
            MY
          </Link>

          {/* MENU */}

          <ul className="hidden items-center gap-10 md:flex">

            {links.map((link) => {

              const active =
                pathname === link.href ||
                (link.href === "/portfolio" &&
                  pathname.startsWith("/portfolio"));

              return (

                <li key={link.href}>

                  <Link
                    href={link.href}
                    className={`relative text-sm uppercase tracking-[0.25em] transition-colors ${
                      active
                        ? "text-paper"
                        : "text-bone hover:text-paper"
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

          {/* BUTTON */}

          <Link
            href="/contact"
            className="hidden rounded-full border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.28em] text-paper transition-all duration-300 hover:scale-105 hover:bg-paper hover:text-black md:inline-flex"
          >
            Let's Talk
          </Link>

          {/* MOBILE */}

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
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
                duration: .35,
              }}
              className="overflow-hidden md:hidden"
            >

              <div className="border-t border-white/10 px-8 py-8">

                <ul className="space-y-6">

                  {links.map((link) => (

                    <li key={link.href}>

                      <Link
                        href={link.href}
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
