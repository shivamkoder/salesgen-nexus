import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function VisionSection() {
  const ref = useScrollReveal();
  return (
    <section id="vision" className="relative py-32 px-6">
      {/* Light beam accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div ref={ref} className="gradient-border-card glass-strong rounded-3xl p-12 md:p-20">
          {/* Decorative quote marks */}
          <span className="block font-heading text-6xl text-primary/20 leading-none mb-4">"</span>
          <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic leading-[1.15] tracking-[-0.02em] text-gradient">
            Building the infrastructure for the sovereign sales professional.
          </blockquote>
          <p className="mt-10 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our vision extends beyond lead generation. We are creating a global top-tier,
            high-performance talent ecosystem — independent of traditional corporate
            constraints, powered by seamless tracking and instant commission settlement.
          </p>
        </div>
      </div>
    </section>
  );
}
