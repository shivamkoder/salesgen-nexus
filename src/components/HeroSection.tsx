import { ArrowRight, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function HeroSection() {
  const subRef = useScrollReveal({ threshold: 0.1 });
  const headRef = useScrollReveal({ threshold: 0.1, delay: 150 });
  const textRef = useScrollReveal({ threshold: 0.1, delay: 300 });
  const ctaRef = useScrollReveal({ threshold: 0.1, delay: 450 });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Subheading */}
      <p ref={subRef} className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-heading">
        A New Performance Ecosystem
      </p>

      {/* Main Headline */}
      <h1 ref={headRef} className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] tracking-tight max-w-4xl">
        <span className="text-gradient">Redefining the Future of</span>
        <br />
        <span className="text-gradient-accent">Affiliate Performance.</span>
      </h1>

      {/* Subtext */}
      <p ref={textRef} className="mt-6 max-w-2xl text-center text-muted-foreground text-base md:text-lg leading-relaxed">
        We've abandoned the profit-margin models of the past. SalesGen is an ethereal
        performance ecosystem where high-stakes sales talent meets hyper-optimized
        business infrastructure.
      </p>

      {/* CTAs */}
      <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#cta"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.78_0.08_260_/_30%)]"
        >
          Enter the Lab <ArrowRight size={16} />
        </a>
        <a
          href="#infrastructure"
          className="inline-flex items-center gap-2 rounded-lg glass glow-border px-7 py-3 text-sm font-semibold text-foreground transition-all glow-border-hover"
        >
          <Eye size={16} /> View Ecosystem
        </a>
      </div>
    </section>
  );
}
