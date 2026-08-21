import Link from "next/link";

type BrandWordmarkProps = {
  as?: "link" | "span";
  className?: string;
};

export default function BrandWordmark({
  as = "link",
  className = "",
}: BrandWordmarkProps) {
  const label = (
    <span
      className={`font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-gold transition-colors duration-300 sm:text-sm sm:tracking-[0.18em] md:text-[15px] md:font-semibold md:tracking-[0.2em] ${className}`}
    >
      Mauricio Yepes
    </span>
  );

  if (as === "span") {
    return label;
  }

  return (
    <Link
      href="/"
      className="group rounded p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      aria-label="Mauricio Yepes — Home"
    >
      <span className="transition-colors duration-300 group-hover:text-paper">
        {label}
      </span>
    </Link>
  );
}
