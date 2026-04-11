import { ArrowRight, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function HeroSection() {
  const subRef = useScrollReveal({ threshold: 0.1 });
  const headRef = useScrollReveal({ threshold: 0.1, delay: 150 });
  const textRef = useScrollReveal({ threshold: 0.1, delay: 300 });
  const ctaRef = useScrollReveal({ threshold: 0.1, delay: 450 });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-40" />

      {/* Huly-style light beam */}
      <div className="light-beam animate-beam-pulse" />

      {/* Radial glow from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-radial-glow pointer-events-none" />

      {/* Extra ambient glow orbs */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      {/* Subheading */}
      <p ref={subRef} className="relative z-10 text-xs uppercase tracking-[0.35em] text-muted-foreground mb-8 font-heading">
        A New Performance Ecosystem
      </p>

      {/* Main Headline — dramatic & large */}
      <h1 ref={headRef} className="relative z-10 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.05] tracking-[-0.02em] max-w-5xl">
        <span className="text-gradient">Redefining the</span>
        <br />
        <span className="text-gradient">Future of</span>
        <br />
        <span className="text-gradient-accent">Affiliate Performance.</span>
      </h1>

      {/* Subtext */}
      <p ref={textRef} className="relative z-10 mt-8 max-w-xl text-center text-muted-foreground text-base md:text-lg leading-relaxed">
        We've abandoned the profit-margin models of the past. SalesGen is an ethereal
        performance ecosystem where high-stakes sales talent meets hyper-optimized
        business infrastructure.
      </p>

      {/* CTAs */}
      <div ref={ctaRef} className="relative z-10 mt-12 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#cta"
          className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.78_0.08_260_/_35%)]"
        >
          Enter the Lab <ArrowRight size={16} />
        </a>
        <a
          href="#infrastructure"
          className="inline-flex items-center gap-2 rounded-full glass glow-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 glow-border-hover"
        >
          <Eye size={16} /> View Ecosystem
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
