import Image from "next/image";
import path from "node:path";
import { probeDimensions } from "@/lib/projects/probe-media";

/** Original proportions; small source artwork is never expanded into a full-width hero. */
export default function CaseStudyImage({ src, alt, hero = false }: { src: string; alt: string; hero?: boolean }) {
  const file = path.join(process.cwd(), "public", decodeURIComponent(src));
  const dimensions = probeDimensions(file, path.extname(file)) ?? { width: 1200, height: 900 };
  const vector = path.extname(file).toLowerCase() === ".svg";
  return (
    <div className="mx-auto flex min-w-0 items-center justify-center" style={{ maxWidth: vector ? undefined : dimensions.width }}>
      <Image src={src} alt={alt} width={dimensions.width} height={dimensions.height}
        sizes={hero ? "(max-width: 1024px) 92vw, 1200px" : "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px"}
        className={hero ? "h-auto max-h-[75vh] w-auto max-w-full object-contain" : "h-auto w-full object-contain"} />
    </div>
  );
}
