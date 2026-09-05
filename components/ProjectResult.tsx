import Reveal from "@/components/Reveal";

export default function ProjectResult({ result }: { result: string }) {
  return (
    <section className="mt-24 sm:mt-36">
      <Reveal>
        <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-[#151515] to-[#0d0d0d] p-8 sm:rounded-[32px] sm:p-12">
          <p className="eyebrow mb-6">Result</p>
          <p className="max-w-3xl text-xl leading-9 text-paper sm:text-2xl sm:leading-10">
            {result}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
