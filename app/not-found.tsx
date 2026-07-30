import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80svh] flex flex-col items-center justify-center text-center container-px">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-sans font-semibold text-display-md text-paper">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-bone text-lg mt-6 max-w-md">
        Let&apos;s get you back to the work that does.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center bg-paper text-ink px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-gold transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
