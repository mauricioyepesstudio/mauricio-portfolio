import Image from "next/image";
import type { BrandBook as BrandBookData, BrandPiece } from "@/lib/studio-brandbooks";

const surface = { light: "bg-[#F4F4F1]", dark: "bg-[#0B0B0F]" } as const;
const ratio = { square: "aspect-square", portrait: "aspect-[4/5]", wide: "col-span-3 aspect-[4/1]" } as const;

export function PieceGrid({ pieces, sizes = "(max-width: 768px) 30vw, 15vw" }: { pieces: BrandPiece[]; sizes?: string }) {
  return (
    <div className="grid grid-cols-3 items-start gap-2 sm:gap-3">
      {pieces.map((piece) => (
        <a key={piece.src} href={piece.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${piece.alt}`} className={`relative block overflow-hidden rounded-lg border border-line bg-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${ratio[piece.ratio]}`}>
          <Image src={piece.src} alt={piece.alt} fill sizes={piece.ratio === "wide" ? "(max-width: 768px) 92vw, 46vw" : sizes} className={piece.ratio === "wide" ? "object-contain" : "object-cover"} />
        </a>
      ))}
    </div>
  );
}

export default function BrandBook({ name, book }: { name: string; book: BrandBookData }) {
  const [primary, ...versions] = book.logos;
  return (
    <section aria-label={`${name} brand book`} className="mt-6 border-t border-line pt-5">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">Brand book</h3>

      <figure className="mt-4">
        <div className={`relative aspect-[16/7] overflow-hidden rounded-xl border border-line ${surface[primary.surface]}`}>
          <Image src={primary.src} alt={`${name} — ${primary.label}`} fill sizes="(max-width: 768px) 92vw, 46vw" className="object-contain p-8 sm:p-10" />
        </div>
        <figcaption className="mt-2 text-xs text-bone">{primary.label}</figcaption>
      </figure>

      {versions.length > 0 && (
        <ul className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          {versions.map((logo) => (
            <li key={logo.src}>
              <div className={`relative aspect-[4/3] overflow-hidden rounded-lg border border-line ${surface[logo.surface]}`}>
                <Image src={logo.src} alt={`${name} — ${logo.label}`} fill sizes="(max-width: 768px) 30vw, 15vw" className="object-contain p-3 sm:p-4" />
              </div>
              <p className="mt-1.5 text-[11px] leading-4 text-bone">{logo.label}</p>
            </li>
          ))}
        </ul>
      )}

      <h4 className="mt-6 text-sm font-medium text-paper">Color palette</h4>
      <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {book.colors.map((color) => (
          <li key={color.hex + color.name} className="overflow-hidden rounded-lg border border-line">
            <div className="h-14 border-b border-line" style={{ backgroundColor: color.hex }} aria-hidden="true" />
            <div className="p-2.5">
              <p className="text-sm font-medium text-paper">{color.name}</p>
              <p className="font-mono text-xs uppercase text-bone">{color.hex}</p>
              <p className="mt-1 text-[11px] leading-4 text-bone/80">{color.role}</p>
            </div>
          </li>
        ))}
      </ul>

      {book.typography && (
        <>
          <h4 className="mt-6 text-sm font-medium text-paper">Typography</h4>
          <p className="mt-2 text-sm leading-6 text-bone"><span className="text-paper">{book.typography.family}</span> · {book.typography.note}</p>
        </>
      )}

      <h4 className="mt-6 text-sm font-medium text-paper">Logo usage</h4>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-bone">
        {book.rules.map((rule) => <li key={rule}>{rule}</li>)}
      </ul>
    </section>
  );
}
