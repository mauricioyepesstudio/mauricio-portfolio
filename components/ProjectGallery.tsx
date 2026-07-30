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

        <div className="max-w-4xl mb-16">

          <p className="eyebrow mb-4">
            Selected Work
          </p>

          <h2 className="font-sans font-semibold text-display-md text-paper leading-tight">
            A closer look at the creative process and final execution.
          </h2>

        </div>

      </Reveal>

      <div className="columns-1 md:columns-2 xl:columns-3 gap-8">

        {images.map((image, index) => (

          <Reveal
            key={image}
            delay={index * 0.05}
          >

            <div className="group mb-8 break-inside-avoid overflow-hidden rounded-[28px] border border-white/10 bg-[#111] shadow-xl">

              <div className="relative overflow-hidden">

                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  width={1400}
                  height={1000}
                  className="h-auto w-full object-cover transition-all duration-700 group-hover:scale-105"
                />

              </div>

            </div>

          </Reveal>

        ))}

      </div>

    </section>
  );
}