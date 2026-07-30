import Image from "next/image";
import Reveal from "@/components/Reveal";

type ProjectGalleryProps = {
  title: string;
  images?: string[];
};

export default function ProjectGallery({
  title,
  images = [],
}: ProjectGalleryProps) {
  if (!images.length) return null;

  return (
    <section className="mt-36">
      <Reveal>
        <div className="mb-16 max-w-4xl">
          <p className="eyebrow mb-4">Selected Work</p>

          <h2 className="font-sans text-display-md font-semibold leading-tight text-paper">
            A closer look at the creative process and final execution.
          </h2>
        </div>
      </Reveal>

      <div className="columns-1 gap-8 md:columns-2 xl:columns-3">
        {images.map((image, index) => (
          <Reveal key={`${image}-${index}`} delay={index * 0.05}>
            <div className="group mb-8 break-inside-avoid overflow-hidden rounded-[32px] border border-white/10 bg-[#111] shadow-[0_30px_80px_rgba(0,0,0,.35)] transition-all duration-700 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  width={1400}
                  height={1000}
                  sizes="(max-width:768px) 100vw,
                         (max-width:1280px) 50vw,
                         33vw"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}