import { ArrowRight, Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CtaSection() {
  const ref = useScrollReveal();
  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/6 blur-[160px] rounded-full pointer-events-none" />

      {/* Decorative beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-primary font-heading mb-6">
          Join the Network
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gradient leading-[1.1] tracking-[-0.02em]">
          Ready to enter<br />the Lab?
        </h2>
        <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Select your path. Whether you're scaling a professional sales operation or deploying
          products into the world's highest-performance commission marketplace — the future starts here.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.78_0.08_260_/_35%)]"
          >
            Apply for Scale <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full glass glow-border px-9 py-4 text-sm font-semibold text-foreground transition-all duration-300 glow-border-hover"
          >
            <Building2 size={16} /> Hire for Scale
          </a>
        </div>
      </div>
    </section>
  );
}
