import heroImage from "@/assets/hero-figure.jpg";
import { ArrowRight, Eye } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Subheading */}
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-heading">
        A New Performance Ecosystem
      </p>

      {/* Main Headline */}
      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] tracking-tight max-w-4xl">
        <span className="text-gradient">Redefining the Future of</span>
        <br />
        <span className="text-gradient-accent">Affiliate Performance.</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 max-w-2xl text-center text-muted-foreground text-base md:text-lg leading-relaxed">
        We've abandoned the profit-margin models of the past. SalesGen is an ethereal
        performance ecosystem where high-stakes sales talent meets hyper-optimized
        business infrastructure.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
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

      {/* Hero Image */}
      <div className="relative mt-16 animate-float">
        <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
        <img
          src={heroImage}
          alt="SalesGen digital performance ecosystem visualization"
          width={768}
          height={896}
          className="relative z-10 w-full max-w-md mx-auto rounded-2xl opacity-90"
        />
      </div>
    </section>
  );
}
