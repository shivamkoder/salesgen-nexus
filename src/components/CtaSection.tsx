import { ArrowRight, Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CtaSection() {
  const ref = useScrollReveal();
  return (
    <section id="cta" className="relative py-24 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 blur-[140px] rounded-full pointer-events-none" />
      <div ref={ref} className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gradient leading-tight">
          Ready to enter the Lab?
        </h2>
        <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Select your path. Whether you're scaling a professional sales operation or looking
          to deploy your products into the world's highest performance commission-based marketplace,
          the future starts here.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.78_0.08_260_/_30%)]">
            Apply for Scale <ArrowRight size={16} />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg glass glow-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all glow-border-hover">
            <Building2 size={16} /> Hire for Scale
          </a>
        </div>
      </div>
    </section>
  );
}
