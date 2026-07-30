import Image from "next/image";
import Reveal from "@/components/Reveal";

type Section = {
  title: string;
  images: string[];
};

type Props = {
  sections?: Section[];
};

export default function ProjectSections({ sections }: Props) {
  if (!sections?.length) return null;

  return (
    <section className="mt-36 space-y-32">

      {sections.map((section, index) => (

        <div key={section.title}>

          <Reveal delay={index * 0.05}>

            <div className="mb-12">

              <p className="eyebrow mb-3">
                Chapter {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="text-paper text-display-md font-semibold">
                {section.title}
              </h2>

            </div>

          </Reveal>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-8">

            {section.images.map((image) => (

              <Reveal key={image}>

                <div className="mb-8 break-inside-avoid overflow-hidden rounded-[28px] border border-line bg-[#111]">

                  <Image
                    src={image}
                    alt={section.title}
                    width={1400}
                    height={1000}
                    className="w-full h-auto transition duration-700 hover:scale-105"
                  />

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      ))}

    </section>
  );
}