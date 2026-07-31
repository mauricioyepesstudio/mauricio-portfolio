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
    <section className="mt-40">

      <Reveal>

        <div className="mx-auto mb-20 max-w-5xl text-center">

          <p className="eyebrow mb-5">
            Visual Showcase
          </p>

          <h2 className="text-5xl font-semibold leading-[0.92] text-paper md:text-7xl">
            Bringing the
            <br />
            creative vision
            <br />
            to life.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-bone">
            A curated collection of creative executions,
            campaign assets and final deliverables developed
            throughout the project.
          </p>

        </div>

      </Reveal>

      <div className="columns-1 gap-10 md:columns-2 xl:columns-3">

        {images.map((image, index) => (

          <Reveal
            key={`${image}-${index}`}
            delay={index * 0.04}
          >

            <div className="group mb-10 break-inside-avoid overflow-hidden rounded-[34px] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_80px_rgba(0,0,0,.35)] transition-all duration-700 hover:-translate-y-3 hover:border-white/20">

              <div className="relative overflow-hidden">

                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  width={1600}
                  height={1200}
                  sizes="(max-width:768px) 100vw,
                         (max-width:1280px) 50vw,
                         33vw"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              </div>

            </div>

          </Reveal>

        ))}

      </div>

    </section>
  );
}